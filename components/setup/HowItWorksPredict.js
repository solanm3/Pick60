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

export default function HowItWorksPredict(props) {
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
          <h2 className={classes.smallTitle}>How It Works - Prediction</h2>
        </GridItem>
      </GridContainer>

      <GridContainer alignItems="center">
        <GridItem>
          <Card plain>
            <GridItem>
              <img
                src={require("../../assets/img/prediction1.jpg")}
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
                Select one of the games from the current NFL Game Week and click
                on the middle button that is shown in the picture above.
              </p>
            </CardBody>
          </Card>
          <Card plain>
            <GridItem>
              <img
                src={require("../../assets/img/prediction2.jpg")}
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
                Click on the Predict Button after you have reviewed the
                statistics.
              </p>
            </CardBody>
          </Card>
          <Card plain>
            <GridItem>
              <img
                src={require("../../assets/img/prediction3.jpg")}
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
                Use our prediction model to further your betting game. Happy
                Winnings
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
