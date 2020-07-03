import React, { Component } from "react";
import { Redirect } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Bet from "../build/contracts/Bet.json";
import getWeb3 from "./utils/getWeb3";

// core components
import MyHeader from "./components/layouts/MyHeader";
import BetComponent from "./components/Bet.js";
import SendBet from "./components/BetPages/SendBet.js";
import GridContainer from "./components/setup/GridContainer.js";
import Card from "@material-ui/core/Card";

// styles
import "./css/oswald.css";
import "./css/open-sans.css";
import "./css/pure-min.css";
import "./App.css";
import teamStyle from "./assets/teamStyle.js";

const contract = require("truffle-contract");
const pick60 = contract(Bet);

class BetApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bet: {},
      loading: true,
      error: null,
      finished: false,
      created: false,
      web3: null
    };
  }

  componentWillMount() {
    // Detects MetaMask
    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3
        });
        pick60.setProvider(this.state.web3.currentProvider);
        this.state.web3.version.getNetwork(function(err, res) {
          console.log("network:" + res);
        });
        this.getBet();
      })
      .catch(error => {
        console.log("Error:" + JSON.stringify(error));
        this.setState({ error: "Pick60 Error", loading: false });
      });
  }

  getAccount() {
    if (this.state.web3) {
      return this.state.web3.eth.accounts[0];
    } else {
      return "";
    }
  }

  populateBetFromEvent(result) {
    //MetaMask events not reliable
    //https://github.com/MetaMask/metamask-extension/issues/2393
    //just using logs
    const logs = result.logs;
    if (logs) {
      logs.forEach(log => {
        if (log.event === "BetStatus") {
          const event = log.args;
          this.setState({
            loading: false,
            bet: {
              gameStatus: Number(event.gameStatus),
              originator: event.originatorAddress,
              originatorGuess: Number(event.originatorGuess),
              originatorStatus: Number(event.originatorStatus),
              taker: event.takerAddress,
              takerStatus: Number(event.takerStatus),
              betAmount: this.state.web3.fromWei(event.betAmount),
              betResult: Number(event.betResult),
              pot: this.state.web3.fromWei(event.pot)
            }
          });
        }
      });
    } else {
      this.setState({ error: "Pick60 Error", loading: false });
    }
  }

  getBet() {
    pick60.deployed().then(instance => {
      instance
        .getBetOutcome({ from: this.getAccount() })
        .then(result => {
          this.populateBetFromEvent(result);
        })
        .catch(error => {
          console.log("Error:" + JSON.stringify(error));
          this.setState({ error: "Pick60 Error", loading: false });
        });
    });
  }

  placeBet(guess, amount) {
    this.setState({ loading: true });
    pick60
      .deployed()
      .then(instance => {
        return instance.createBet(guess, {
          from: this.getAccount(),
          value: this.state.web3.toWei(amount, "ether")
        });
      })
      .then(() => this.setState({ created: true }))
      .then(result => {
        this.populateBetFromEvent(result);
      })
      .catch(error => {
        console.log("Error:" + JSON.stringify(error));
        this.setState({ error: "Pick60 Error", loading: false });
      });
  }

  takeBet() {
    this.setState({ loading: true });
    pick60
      .deployed()
      .then(instance => {
        return instance.takeBet({
          guess: this.state.bet.originatorGuess,
          from: this.getAccount(),
          value: this.state.web3.toWei(this.state.bet.betAmount, "ether")
        });
      })
      .then(result => {
        this.populateBetFromEvent(result);
      })
      .catch(error => {
        console.log("Error:" + JSON.stringify(error));
        this.setState({ error: "Pick60 Error", loading: false });
      });
  }

  payoutBet() {
    this.setState({ loading: true });
    pick60
      .deployed()
      .then(instance => {
        return instance.payout({ from: this.getAccount(), gas: 300000 });
      })
      .then(result => {
        this.populateBetFromEvent(result);
      })
      .then(() => this.setState({ finished: true }))
      .catch(error => {
        console.log("Error:" + JSON.stringify(error));
        this.setState({ error: "Pick60 Error", loading: false });
      });
  }

  render() {
    const { finished } = this.state;
    const { created } = this.state;
    console.log("params", this.props.match.params);
    console.log("match", this.props.match);
    console.log("props", this.props);

    if (created) {
      return <SendBet match={this.props.match} />;
    }
    if (finished) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <MyHeader color="dark" />
        <GridContainer>
          <Card>
            <BetComponent
              loading={this.state.loading}
              match={this.props.match}
              account={this.getAccount()}
              bet={this.state.bet}
              placeBet={(guess, amount) => {
                this.placeBet(guess, amount);
              }}
              takeBet={() => {
                this.takeBet();
              }}
              payoutBet={() => {
                this.payoutBet();
              }}
            />
          </Card>
        </GridContainer>
      </div>
    );
  }
}

export default BetApp;
