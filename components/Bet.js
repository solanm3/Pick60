/* eslint-disable */
import React, { Component } from "react";
import LoadingPage from "./BetPages/loading.js";
import PlaceBet from "./BetPages/placeBet.js";
import TakeBet from "./BetPages/takeBet.js";
import PayoutBet from "./BetPages/payoutBet.js";
import SendBet from "./BetPages/SendBet.js";

import waiting from "../assets/img/TheHelmet.PNG";
import payout from "../assets/img/Miani.PNG";
import place from "../assets/img/ODB.PNG";
import fail from "../assets/img/Earl.jpg";
import winner from "../assets/img/Mahomes.jpg";

//Matchups
import { Matchups } from "./layouts/Matchups.js";

//Pick60 status
const STATUS_WINNER = 1;
const STATUS_LOSE = 2;
const STATUS_TIE = 3;
const STATUS_PENDING = 4;

//game status
const STATUS_NOT_STARTED = 0;
const STATUS_STARTED = 1;
const STATUS_COMPLETE = 2;

//general status for game or player
const STATUS_ERROR = 3;

export default class Bet extends Component {
  constructor(props) {
    super(props);
    this.state = this.generateStateFromProps(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps !== this.props) {
      this.setState(this.generateStateFromProps(newProps));
    }
  }

  generateStateFromProps(props) {
    return {
      taker: {
        guess: Number(props.bet.takerGuess),
        addr: this.getCurrentAccountForStatus(
          props.bet.gameStatus,
          props.bet.taker,
          false
        ),
        status: props.bet.takerStatus
      },
      originator: {
        guess: Number(props.bet.originatorGuess),
        addr: this.getCurrentAccountForStatus(
          props.bet.gameStatus,
          props.bet.originator,
          true
        ),
        status: props.bet.originatorStatus
      },
      amount: Number(props.bet.betAmount),
      gameStatus: Number(props.bet.gameStatus),
      betResult: Number(props.bet.betResult),
      pot: Number(props.bet.pot),
      loading: props.loading
      //error: props.error
    };
  }

  //if the bet has not started, the account will be the originator
  //if the bet has started the account will be the taker
  getCurrentAccountForStatus(gameStatus, acct, isOriginator) {
    let account = null;
    switch (gameStatus) {
      case STATUS_NOT_STARTED:
        account = isOriginator ? this.props.account : acct; //acct is not stored in contract yet
        break;

      case STATUS_STARTED:
        account = isOriginator ? acct : this.props.account; //acct is not stored in contract yet
        break;

      case STATUS_COMPLETE: //accts are stored in contract
        account = acct;
        break;

      default:
        account = acct;
        break;
    }

    return account;
  }

  getEmptyForZero(value) {
    if (value === 0) {
      return "";
    } else {
      return value;
    }
  }

  generateOutcomeDescription() {
    return (
      "The bet originator " +
      this.generateDescriptionForStatus(this.state.originator) +
      " the bet" +
      " while the bet taker " +
      this.generateDescriptionForStatus(this.state.taker) +
      ". Please click the 'Payout Winnings' button to settle accounts."
    );
  }

  generateDescriptionForStatus(gambler) {
    let description = "Error";
    switch (gambler.status) {
      case STATUS_WINNER:
        description = "Won";
        break;

      case STATUS_LOSE:
        description = "Lost";
        break;

      case STATUS_TIE:
        description = "Tied";
        break;

      case STATUS_PENDING:
        description = "Pending";
        break;

      default:
        description = "Error";
        break;
    }

    return description;
  }

  generateTakerStatusDescription() {
    return "Nobody wins";
  }

  // Change this to clicked team
  onChangeOriginatorGuess(e) {
    this.setState({ originator: { guess: e.target.value } });
  }

  onChangeBetAmount(e) {
    this.setState({ amount: e.target.value });
  }

  placeBet() {
    this.props.placeBet(this.state.originator.guess, this.state.amount);
  }

  takeBet() {
    this.props.takeBet();
  }

  payoutBet() {
    this.props.payoutBet();
  }

  isValid() {
    let valid;
    switch (this.state.gameStatus) {
      case STATUS_NOT_STARTED:
        valid =
          this.getEmptyForZero(this.state.originator.addr) !== "" &&
          this.getEmptyForZero(this.state.amount) !== "" &&
          this.getEmptyForZero(this.state.originator.guess);
        break;

      case STATUS_STARTED:
        valid =
          this.getEmptyForZero(this.state.originator.addr) !== "" &&
          this.getEmptyForZero(this.state.taker.addr) !== "" &&
          this.getEmptyForZero(this.state.amount) !== "";
        break;

      default:
        valid = true;
        break;
    }
    return valid;
  }

  renderPlaceBet() {
    const index = this.props.match ? this.props.match.params.key : 0;
    return (
      <div>
        <PlaceBet
          orgAddr={this.state.originator.addr}
          team={this.props.match.params}
          changeAmount={this.onChangeBetAmount.bind(this)}
          amount={this.getEmptyForZero(this.state.amount)}
          changeGuess={this.onChangeOriginatorGuess.bind(this)}
          guess={this.getEmptyForZero(this.state.originator.guess)}
          valid={!this.isValid()}
          placeBet={this.placeBet.bind(this)}
          match={this.props.match}
        />
      </div>
    );
  }

  renderBetOutcome() {
    return (
      <div>
        <PayoutBet
          description={this.generateOutcomeDescription()}
          amount={this.getEmptyForZero(this.state.amount)}
          pot={this.getEmptyForZero(this.state.pot)}
          winMargin={this.getEmptyForZero(this.state.betResult)}
          orgAddr={this.state.originator.addr}
          orgGuess={this.getEmptyForZero(this.state.originator.guess)}
          orgStatus={this.generateDescriptionForStatus(this.state.originator)}
          takerAddr={this.state.taker.addr}
          takerStatus={this.generateDescriptionForStatus(this.state.taker)}
          payout={this.payoutBet.bind(this)}
          orgTeam={this.props.match.params}
          match={this.props.match}
        />
      </div>
    );
  }

  renderTakeBet() {
    return (
      <div>
        <TakeBet
          orgAddr={this.state.originator.addr}
          takerAddr={this.state.taker.addr}
          amount={this.getEmptyForZero(this.state.amount)}
          changeGuess={this.onChangeOriginatorGuess.bind(this)}
          guess={this.getEmptyForZero(this.state.originator.guess)}
          takeBet={this.takeBet.bind(this)}
          match={this.props.match}
        />
      </div>
    );
  }

  render() {
    let view = null;
    const isLoading = this.state.loading;

    switch (this.state.gameStatus) {
      case STATUS_NOT_STARTED:
        view = isLoading ? <SendBet /> : this.renderPlaceBet();
        break;

      case STATUS_STARTED:
        view = isLoading ? (
          <LoadingPage message="Calculating Match Results... " pic={waiting} />
        ) : (
          this.renderTakeBet()
        );
        break;

      case STATUS_COMPLETE:
        view = isLoading ? (
          <LoadingPage message="Your money is on the way..." pic={payout} />
        ) : (
          this.renderBetOutcome()
        );
        break;

      case STATUS_ERROR:
        view = (
          <LoadingPage message="Pick60 is having problems..." pic={fail} />
        );
        break;

      default:
        view = (
          <LoadingPage
            message="Waiting for a valid MetaMask account..."
            pic={place}
          />
        );
        break;
    }
    return view;
  }
}
