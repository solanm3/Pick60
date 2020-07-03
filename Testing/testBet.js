var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

var Bet = artifacts.require("./contracts/Bet");

const betAmountInEth = "0.25";
const wrongBetAmountInEth = "0.15";
const agreedUponBetAmount = web3.utils.toWei(betAmountInEth, "ether");
const wrongBetAmount = web3.utils.toWei(wrongBetAmountInEth, "ether");

contract("Bet", function(accounts) {
  const betOriginator = accounts[0];
  const betTaker = accounts[1];
  const badActor = accounts[2];
  const originatorBet = 4;
  const takerBet = 5;

  const originatorBalanceBeforeBet = web3.eth.getBalance(betOriginator);
  const takerBalanceBeforeBet = web3.eth.getBalance(betTaker);

  let bet;

  it("The state of the Bet smart contract should be clean before a bet takes place", async function() {
    // get shared instance of contract
    bet = await Bet.deployed();

    const tx = await bet.getBetOutcome({ from: betTaker });
    expect(tx).to.exist;

    const betEvent = tx.logs[0].args;
    expect(betEvent).to.exist;
    expect(betEvent.gameStatus.toNumber()).to.equal(0);
    expect(betEvent.originatorStatus.toNumber()).to.equal(0);
    expect(betEvent.originatorAddress).to.equal(
      "0x0000000000000000000000000000000000000000"
    );
    expect(betEvent.originatorGuess.toNumber()).to.equal(0); //Hides until the end
    expect(betEvent.takerAddress).to.equal(
      "0x0000000000000000000000000000000000000000"
    );
    expect(betEvent.takerStatus.toNumber()).to.equal(0);
    expect(betEvent.takerGuess.toNumber()).to.equal(0);
    expect(betEvent.betAmount.toNumber()).to.equal(0);
    expect(betEvent.actualNumber.toNumber()).to.equal(0);
    expect(betEvent.pot.toNumber()).to.equal(0);
  });

  it("We should be able to start a bet by setting a guess and sending the bet amount that the contract was initialized with", async function() {
    const tx = await bet.createBet(originatorBet, {
      from: betOriginator,
      value: agreedUponBetAmount
    });
    expect(tx).to.exist;

    const betEvent = tx.logs[0].args;
    expect(betEvent).to.exist;
    expect(betEvent.gameStatus.toNumber()).to.equal(1);
    expect(betEvent.originatorStatus.toNumber()).to.equal(4);
    expect(betEvent.originatorAddress).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
    expect(betEvent.originatorGuess.toNumber()).to.equal(0); //Hides until the end
    expect(betEvent.takerAddress).to.equal(
      "0x0000000000000000000000000000000000000000"
    );
    expect(betEvent.takerStatus.toNumber()).to.equal(0);
    expect(betEvent.takerGuess.toNumber()).to.equal(0);
    expect(web3.utils.toHex(betEvent.betAmount)).to.equal(
      web3.utils.toHex(agreedUponBetAmount)
    );
    expect(betEvent.actualNumber.toNumber()).to.equal(0);
    expect(betEvent.pot.toNumber()).to.equal(0);
  });

  it("We should be able to take a bet by setting a guess and sending the bet amount that the contract was initialized with", async function() {
    const tx = await bet.takeBet(takerBet, {
      from: betTaker,
      value: agreedUponBetAmount
    });
    expect(tx).to.exist;

    const betEvent = tx.logs[0].args;
    expect(betEvent).to.exist;
    expect(betEvent.gameStatus.toNumber()).to.equal(2);
    expect(betEvent.originatorStatus.toNumber()).to.not.equal(0);
    expect(betEvent.originatorAddress).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
    expect(betEvent.originatorGuess.toNumber()).to.equal(originatorBet); //Hides until the end
    expect(betEvent.takerAddress).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
    expect(betEvent.takerStatus.toNumber()).to.not.equal(0);
    expect(betEvent.takerGuess.toNumber()).to.equal(takerBet);
    expect(web3.utils.toHex(betEvent.betAmount)).to.equal(
      web3.utils.toHex(agreedUponBetAmount)
    );
    expect(betEvent.actualNumber.toNumber()).to.not.equal(0);
    expect(web3.utils.toHex(betEvent.pot)).to.equal(
      web3.utils.toHex(agreedUponBetAmount * 2)
    );
  });

  it("Taking the bet should fail if the bet amount does not equal the bet amount that the contract was initialized with", function() {
    const tx = bet.takeBet(takerBet, { from: betTaker, value: wrongBetAmount });
    expect(tx).to.be.rejectedWith(
      "VM Exception while processing transaction: revert"
    );
  });

  it("ONLY the taker or originator should be able to call the payout function", async function() {
    const tx = bet.payout({ from: badActor });
    expect(tx).to.be.rejectedWith(
      "VM Exception while processing transaction: revert"
    );
  });

  it("The taker or originator should be able to call the payout to transfer winnings", async function() {
    const tx = await bet.payout({ from: betTaker });
    expect(tx).to.exist;

    const betEvent = tx.logs[0].args;
    expect(betEvent).to.exist;
    expect(betEvent.gameStatus.toNumber()).to.equal(0);
    expect(betEvent.originatorStatus.toNumber()).to.equal(0);
    expect(betEvent.originatorAddress).to.equal(
      "0x0000000000000000000000000000000000000000"
    );
    expect(betEvent.originatorGuess.toNumber()).to.equal(0); //Hides until the end
    expect(betEvent.takerAddress).to.equal(
      "0x0000000000000000000000000000000000000000"
    );
    expect(betEvent.takerStatus.toNumber()).to.equal(0);
    expect(betEvent.takerGuess.toNumber()).to.equal(0);
    expect(betEvent.betAmount.toNumber()).to.equal(0);
    expect(betEvent.actualNumber.toNumber()).to.equal(0);
    expect(betEvent.pot.toNumber()).to.equal(0);
  });

  it("Originator and Taker balances should reflect bet outcome", async function() {
    const tx = await bet.getBetOutcome({ from: betOriginator });
    const betOutcome = tx.logs[0].args;
    expect(betOutcome).to.exist;

    assert.notEqual(
      betOutcome.gameStatus,
      "",
      "Bet outcome description should not be empty"
    );
    assert.notEqual(
      betOutcome.originatorStatus,
      "",
      "Bet originator status should not be empty"
    );
    assert.notEqual(
      betOutcome.betStatus,
      "",
      "Bet taker status should not be empty"
    );

    const originatorBalanceAfterPayout = web3.eth.getBalance(betOriginator);
    const takerBalanceAfterPayout = web3.eth.getBalance(betTaker);

    if (betOutcome.originatorStatus.toString() === "1") {
      expect(originatorBalanceAfterPayout).to.be.above(
        originatorBalanceBeforeBet
      );
    } else if (betOutcome.takerStatus.toString() === "1") {
      expect(takerBalanceAfterPayout).to.be.above(takerBalanceBeforeBet);
    }
  });
});
