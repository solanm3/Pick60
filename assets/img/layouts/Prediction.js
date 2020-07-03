import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridItem from "../setup/GridItem.js";
import GridContainer from "../setup/GridContainer.js";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Header from "../setup/Header.js";
import LeftLinks from "../setup/LeftHeaderLinks.js";
import RightLinks from "../setup/RightHeaderLinks.js";
import Parallax from "../setup/Parallax.js";
import { Link } from "react-router-dom";
//styles
import teamStyle from "../../assets/teamStyle.js";

const useStyles = makeStyles(teamStyle);

export default function TeamGrid(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <GridItem xs={6} sm={6} md={4}>
      <Button disabled>
        <Card plain>
          <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
            <img
              src={require("../../assets/teams/NFL-white.png")}
              alt="..."
              className={imageClasses}
            />
          </GridItem>
          <h4 className={classes.cardTitle}>
            Our Prediction
            <br />
            <small className={classes.smallTitle}>Designer</small>
          </h4>
        </Card>
      </Button>
    </GridItem>
  );
}
