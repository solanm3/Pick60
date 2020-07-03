import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridItem from "../setup/GridItem.js";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Matchups } from "../layouts/Matchups.js";
import TeamBet from "../layouts/TeamBet.js";
import GridContainer from "../setup/GridContainer.js";
import TakeBet from "./takeBet.js";

// styles
import teamStyle from "../../assets/teamStyle.js";
const useStyles = makeStyles(teamStyle);

export default function PlaceBet(props) {
  const classes = useStyles();
  const index = props.match ? props.match.params.key : 0;
  const team = props.match ? props.match.params.team : 0;
  const spread = props.guess;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <GridContainer>
        <TeamBet
          logo={Matchups[index].homeImg}
          alt={Matchups[index].homeAlt}
          record={Matchups[index].homeRecord}
          index={Matchups[index].index}
        />
        <TeamBet
          logo={Matchups[index].awayImg}
          alt={Matchups[index].awayAlt}
          record={Matchups[index].awayRecord}
          index={Matchups[index].index}
        />
      </GridContainer>
      <h2>Place Bet</h2>
      <p>Enter an amount and a guess to place a new bet...</p>
      <div className="pure-form pure-form-aligned">
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="name">Your Address</label>
            <input id="name" type="text" value={props.orgAddr} disabled />
          </div>
          <div className="pure-control-group">
            <label htmlFor="name">Your Team</label>
            <input
              id="name"
              type="text"
              value={props.match.params.team}
              disabled
            />
          </div>

          <div className="pure-control-group">
            <label htmlFor="name">Bet Amount</label>
            <input
              id="name"
              type="text"
              placeholder="Bet amount in Eth"
              onChange={props.changeAmount}
              value={props.amount}
            />
            <span className="pure-form-message-inline">
              This is a required field.
            </span>
          </div>

          <div className="pure-control-group">
            <label htmlFor="name">You predict the spread</label>
            <input
              id="name"
              type="text"
              placeholder="Your Guess"
              onChange={props.changeGuess}
              value={props.guess}
            />
            <span className="pure-form-message-inline">
              This is a required field.
            </span>
          </div>

          <div className="pure-controls">
            <button
              className="pure-button pure-button-primary"
              disabled={props.valid}
              onClick={props.placeBet}
            >
              Place Bet
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
