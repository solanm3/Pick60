import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridItem from "../setup/GridItem.js";
import TeamBet from "../layouts/TeamBet.js";
import GridContainer from "../setup/GridContainer.js";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import fail from "../../assets/img/Earl.jpg";
import { Matchups } from "../layouts/Matchups.js";
import PayoutBet from "./payoutBet.js";

// styles
import teamStyle from "../../assets/teamStyle.js";
const useStyles = makeStyles(teamStyle);

export default function TakeBet(props) {
  const classes = useStyles();
  const index = props.match ? props.match.params.key : 0;
  const orgTeam = props.match.params.team;
  const homeTeam = Matchups[index].homeAlt;
  const awayTeam = Matchups[index].awayAlt;
  console.log("takeBet props", props);
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  let takerTeam;
  if (orgTeam === homeTeam) {
    takerTeam = awayTeam;
  } else {
    takerTeam = homeTeam;
  }

  <PayoutBet takerTeam={takerTeam} />;

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
      <h2>Take Bet</h2>
      <p>Enter a guess and verify amount to take existing bet...</p>
      <div className="pure-form pure-form-aligned">
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="name">Placed By</label>
            <input id="name" type="text" value={props.orgAddr} disabled />
          </div>

          <div className="pure-control-group">
            <label htmlFor="name">Bet Amount</label>
            <input
              id="name"
              type="text"
              placeholder="Bet amount in Eth"
              value={props.amount}
              disabled
            />
          </div>

          <div className="pure-control-group">
            <label htmlFor="name">Your Address</label>
            <input id="name" type="text" value={props.takerAddr} disabled />
          </div>

          <div className="pure-control-group">
            <label htmlFor="name">Your Team</label>
            <input id="name" type="text" value={takerTeam} disabled />
          </div>
          <div className="pure-control-group">
            <label htmlFor="name">Predicted Winning Margin</label>
            <input id="name" value={props.guess} disabled />
          </div>

          <div className="pure-controls">
            <button
              className="pure-button pure-button-primary"
              onClick={props.takeBet}
            >
              Take Bet
            </button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
