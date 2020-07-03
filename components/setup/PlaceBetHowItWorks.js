/* eslint-disable */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import InfoArea from "./InfoArea.js";
import GridItem from "./GridItem.js";
import GridContainer from "./GridContainer.js";
import Parallax from "../setup/Parallax.js";
import Card from "@material-ui/core/Card";
import CardBody from "../setup/CardBody.js";
import CardFooter from "../setup/CardFooter.js";

// @material-ui/icons
import {
  Face,
  Accessibility,
  Group,
  SupervisorAccount,
  SportsFootball,
  Https,
  Poll,
  Chat,
  Fingerprint,
  Business,
  Security,
  VerifiedUser,
  FullscreenExit,
  FormatBold,
  Widgets,
} from "@material-ui/icons";

//styles
import teamStyle from "../../assets/teamStyle.js";

const useStyles = makeStyles(teamStyle);

export default function PlaceBetHowItWorks(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.smallTitle}>How It Works - Place Bet</h2>
        </GridItem>
      </GridContainer>

      <GridContainer alignItems="center">
        <GridItem>
          <Card plain>
            <GridItem>
              <img
                src={require("../../assets/img/PlaceBet.PNG")}
                alt="Prediction"
                justify="center"
                alignItems="center"
                width="60%"
              />
            </GridItem>
            <h4 className={classes.cardTitle}>
              Step 1
              <br />
            </h4>
            <CardBody>
              <p className={classes.description}>
                Select the team you would like the place the bet on and input
                the amount you would like to bet and how much you think the
                spread will be.
              </p>
            </CardBody>
          </Card>

          <Card plain>
            <GridItem>
              <img
                src={require("../../assets/img/ContractConfirm.PNG")}
                alt="Prediction"
                justify="center"
                alignItems="center"
                width="60%"
              />
            </GridItem>
            <h4 className={classes.cardTitle}>
              Step 2
              <br />
            </h4>
            <CardBody>
              <p className={classes.description}>
                Once you have placed the bet the contract will need to be
                confirmed by someone. The contract needs to be confirmed so that
                the wager can be placed.
              </p>
            </CardBody>
          </Card>

          <Card plain>
            <GridItem>
              <img
                src={require("../../assets/img/BetOutcome1.png")}
                alt="Prediction"
                justify="center"
                alignItems="center"
                width="60%"
              />
            </GridItem>
            <h4 className={classes.cardTitle}>
              Step 3
              <br />
            </h4>
            <CardBody>
              <p className={classes.description}>
                Once the result has been return you will be able to see the bet
                outcome and the smart contract should be honoured
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
