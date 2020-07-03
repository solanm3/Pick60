import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridItem from "./GridItem.js";
import GridContainer from "./GridContainer.js";
import NavPills from "./NavPills.js";
import Card from "@material-ui/core/Card";

import MetaMask from "../../assets/img/Metamask.png";
import PlaceBet from "../../assets/img/PlaceBet.PNG";
import HowItWorksPredict from "../setup/HowItWorksPredict.js";
import HowItWorksOutcome from "../setup/HowItWorksOutcome.js";
import AcceptBetHowItWorks from "../setup/AcceptBetHowItWorks.js";

// @material-ui/icons
import {
  SupervisorAccount,
  Build,
  SportsFootball,
  Poll,
  FormatBold,
  ThumbUp,
  MonetizationOn,
  HowToVote
} from "@material-ui/icons";

//styles
import teamStyle from "../../assets/teamStyle.js";
import SmartContractTesting from "./SmartContractTesting.js";
import SetupHowItWorks from "./SetupHowItWorks.js";
import PlaceBetHowItWorks from "./PlaceBetHowItWorks.js";
const useStyles = makeStyles(teamStyle);

export default function HowItWorks(props) {
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
          <h2 className={classes.smallTitle}>HOW IT WORKS</h2>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
          <NavPills
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: "Setup",
                tabIcon: Build,
                tabContent: (
                  <GridContainer>
                    <SetupHowItWorks />
                  </GridContainer>
                )
              },
              {
                tabButton: "Place Bet",
                tabIcon: HowToVote,
                tabContent: (
                  <GridContainer>
                    <PlaceBetHowItWorks />
                  </GridContainer>
                )
              },
              {
                tabButton: "Take Bet",
                tabIcon: ThumbUp,
                tabContent: (
                  <GridContainer>
                    <AcceptBetHowItWorks />
                  </GridContainer>
                )
              },
              {
                tabButton: "Bet Outcome",
                tabIcon: MonetizationOn,
                tabContent: (
                  <GridContainer>
                    <HowItWorksOutcome />
                  </GridContainer>
                )
              },
              {
                tabButton: "Predict",
                tabIcon: Poll,
                tabContent: (
                  <GridContainer>
                    <HowItWorksPredict />
                  </GridContainer>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
