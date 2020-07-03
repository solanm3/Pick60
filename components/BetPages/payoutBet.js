import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridItem from "../setup/GridItem.js";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Matchups } from "../layouts/Matchups.js";
import TeamBet from "../layouts/TeamBet.js";
import Parallax from "../setup/Parallax.js";
import GridContainer from "../setup/GridContainer.js";

// styles
import teamStyle from "../../assets/teamStyle.js";
const useStyles = makeStyles(teamStyle);

export default function PayoutBet(props) {
  const classes = useStyles();
  const index = props.match ? props.match.params.key : 0;
  const orgTeam = props.match.params.team;
  const homeTeam = Matchups[index].homeAlt;
  const awayTeam = Matchups[index].awayAlt;
  console.log("paybet props", props);
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

  let winTeam;
  if (props.orgStatus === "Won") {
    winTeam = orgTeam;
  } else if (props.orgStatus === "Lost") {
    winTeam = takerTeam;
  } else {
    winTeam = "Draw";
  }

  return (
    <div>
      <GridContainer justify="center">
        <h2>Game Result</h2>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
          <img
            src={require(`../../assets/teams/${winTeam}.gif`)}
            alt={winTeam}
            className={imageClasses}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
          <img
            src={require(`../../assets/img/nums/${props.winMargin}.png`)}
            alt={winTeam}
            className={imageClasses}
          />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <h2>Bet Outcome</h2>
      </GridContainer>
      <GridContainer>
        <Card>
          <h4>Bet Status</h4>
          <div className="pure-form pure-form-aligned">
            <fieldset>
              <div className="pure-control-group">
                <label htmlFor="name">Bet Amount</label>
                <input id="name" type="text" disabled value={props.amount} />
              </div>
              <div className="pure-control-group">
                <label htmlFor="name">Winnings</label>
                <input id="name" type="text" disabled value={props.pot} />
              </div>
              <div className="pure-control-group">
                <label htmlFor="name">Winning Team</label>
                <input id="name" type="text" disabled value={winTeam} />
              </div>
              <div className="pure-control-group">
                <label htmlFor="name">Winning Margin</label>
                <input id="name" type="text" disabled value={props.winMargin} />
              </div>
            </fieldset>
          </div>
        </Card>
      </GridContainer>
      <GridContainer>
        <Card>
          <h4>Players Status</h4>
          <div className="pure-form pure-form-aligned">
            <fieldset>
              <div className="pure-control-group">
                <label htmlFor="name">Originator</label>
                <input id="name" type="text" value={props.orgAddr} disabled />
              </div>
              <div className="pure-control-group">
                <label htmlFor="name">Originator Guess</label>
                <input id="name" type="text" disabled value={props.orgGuess} />
              </div>
              <div className="pure-control-group">
                <label htmlFor="name">Originator Team</label>
                <input id="name" type="text" disabled value={orgTeam} />
              </div>
              <div className="pure-control-group">
                <label htmlFor="name">Originator Status</label>
                <input id="name" type="text" disabled value={props.orgStatus} />
              </div>

              <div className="pure-control-group">
                <label htmlFor="name">Taker</label>
                <input id="name" type="text" value={props.takerAddr} disabled />
              </div>
              <div className="pure-control-group">
                <label htmlFor="name">Taker Team</label>
                <input id="name" type="text" disabled value={takerTeam} />
              </div>
              <div className="pure-control-group">
                <label htmlFor="name">Taker Status</label>
                <input
                  id="name"
                  type="text"
                  disabled
                  value={props.takerStatus}
                />
              </div>
            </fieldset>
          </div>
        </Card>
      </GridContainer>
      <GridContainer justify="center">
        <div className="pure-controls">
          <button
            className="pure-button pure-button-primary"
            onClick={props.payout}
          >
            Payout Winnings
          </button>
        </div>
      </GridContainer>
    </div>
  );
}
