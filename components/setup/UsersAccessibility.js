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

export default function UsersAccessibility(props) {
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
          <h2 className={classes.smallTitle}>User Accessibility</h2>
        </GridItem>
      </GridContainer>

      <GridContainer alignItems="center">
        <GridItem>
          <Card plain>
            <GridItem>
              <img
                src={require("../../assets/img/accessibility.png")}
                alt="Seahawks"
                justify="center"
                alignItems="center"
                width="100%"
              />
            </GridItem>
            <h4 className={classes.cardTitle}>
              User Accessability
              <br />
            </h4>
            <CardBody>
              <p className={classes.description}>
                We asked the users how easy it was to find the different
                features on Pick 60.
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
