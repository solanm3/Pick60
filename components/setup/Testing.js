/* eslint-disable */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridItem from "./GridItem.js";
import GridContainer from "./GridContainer.js";
import NavPills from "./NavPills.js";
import Card from "@material-ui/core/Card";
import Features from "../setup/Features.js";
import UsersAccessibility from "../setup/UsersAccessibility.js";
import Pick60Efficiency from "../setup/Pick60Efficiency";

// @material-ui/icons
import {
  SupervisorAccount,
  Ballot,
  Face,
  EmojiPeople,
  Receipt,
  TrendingUp,
  SportsFootball,
  Poll,
  FormatBold
} from "@material-ui/icons";

//styles
import teamStyle from "../../assets/teamStyle.js";
import UserInterfaceRating from "./UserInterfaceRating.js";
import Pick60Efficency from "./Pick60Efficiency.js";

const useStyles = makeStyles(teamStyle);

/*
  - TDD smart contract
  - Is Valid
  - ReactTesting
  - ML Testing
*/

export default function Testing(props) {
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
          <h2 className={classes.smallTitle}>USER TESTING</h2>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
          <NavPills
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: "User Interface Rating",
                tabIcon: Ballot,
                tabContent: (
                  <GridContainer>
                    <UserInterfaceRating />
                  </GridContainer>
                )
              },
              {
                tabButton: "Pick 60 Efficency",
                tabIcon: TrendingUp,
                tabContent: (
                  <GridContainer>
                    <Pick60Efficiency />
                  </GridContainer>
                )
              },
              {
                tabButton: "Usability",
                tabIcon: EmojiPeople,
                tabContent: (
                  <GridContainer>
                    <UsersAccessibility />
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
