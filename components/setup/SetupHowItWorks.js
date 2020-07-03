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

export default function SetupHowItWorks(props) {
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
          <h2 className={classes.smallTitle}>How It Works - Setup</h2>
        </GridItem>
      </GridContainer>

      <GridContainer alignItems="center">
        <GridItem>
          <Card plain>
            <GridItem>
              <img
                src={require("../../assets/img/metamask1.png")}
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
                To utilise the betting section of Pick 60 it is import to have
                your browser set up in the correct way. The metamask extension
                is required for the wagering on this application. The first step
                is to visit the chrome web store or the web store of your chosen
                browser
              </p>
            </CardBody>
          </Card>
          <Card plain>
            <GridItem>
              <img
                src={require("../../assets/img/metamask2.png")}
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
                In the web store search for the extension called MetaMask.
              </p>
            </CardBody>
          </Card>
          <Card plain>
            <GridItem>
              <img
                src={require("../../assets/img/metamask3.png")}
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
                Select the extension pictured in the picture above. You should
                be able to identify it by the fox icon.
              </p>
            </CardBody>
          </Card>
          <Card plain>
            <GridItem>
              <img
                src={require("../../assets/img/metamask4.png")}
                alt="Prediction"
                justify="center"
                alignItems="center"
                width="60%"
              />
            </GridItem>
            <h4 className={classes.cardTitle}>
              Step 4
              <br />
            </h4>
            <CardBody>
              <p className={classes.description}>
                Click the add to chrome button.
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
