/* eslint-disable */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import InfoArea from "./InfoArea.js";
import GridItem from "./GridItem.js";
import GridContainer from "./GridContainer.js";

// @material-ui/icons
import {
  ThumbsUpDown,
  Visibility,
  GridOn,
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
  Widgets
} from "@material-ui/icons";

//styles
import teamStyle from "../../assets/teamStyle.js";

const useStyles = makeStyles(teamStyle);

export default function Features(props) {
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
          <h2 className={classes.smallTitle}>FEATURES</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Peer-To-Peer"
            description="Using Pick 60's smart contract betting you can place a bet directly against other sports fans. Our NFL betting marketplace driven by blockchain is where you can create and acknowledge NFL bets with any other person around the globe."
            icon={SupervisorAccount}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Machine Learning"
            description="Pick 60's prediction model can help you gain the upper hand and make educated guesses on which teams will win. We use a neural network of different prediction models to give you the best chance of winning money."
            icon={Poll}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Blockchain"
            description="Blockchain the most popular place to securely buy, store, and trade Bitcoin, Ethereum, and other top cryptocurrencies."
            icon={FormatBold}
            iconColor="danger"
            vertical
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Safety"
            description="A smart contract is a computer protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract. Smart contracts allow the performance of credible transactions without third parties."
            icon={Https}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Transparency"
            description="Smart contracts allow you to exchange anything of value including money, shares, property etc, in a transparent manner eliminating the need for a middleman and keeping the system conflict-free."
            icon={Visibility}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Privacy"
            description="A key aspect of privacy in blockchains is the use of private and public keys. Blockchain systems use asymmetric cryptography to secure transactions between users."
            icon={Fingerprint}
            iconColor="danger"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
