/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import { makeStyles } from "@material-ui/core/styles";
import MyHeader from "./MyHeader.js";
import Parallax from "../setup/Parallax.js";
import Features from "../setup/Features.js";
import HowItWorks from "../setup/HowItWorks.js";
import Testing from "../setup/Testing.js";
import Tech from "../setup/Tech.js";
import OurTeam from "./OurTeam.js";
import GridItem from "../setup/GridItem.js";
import GridContainer from "../setup/GridContainer.js";
import Card from "@material-ui/core/Card";

//styles
import teamStyle from "../../assets/teamStyle.js";

const useStyles = makeStyles(teamStyle);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <MyHeader />
      <Parallax
        large
        filter
        image={require("../../assets/img/blockchain.jpg")}
      />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h1 className={classes.title}>PICK 60</h1>
          <h4 className={classes.description}>
            Pick60 is a user-friendly, decentralised, peer-to-peer NFL betting
            platform. <br /> Integrated with an industry standard Machine
            Learning model to predict the outcome of weekly NFL games.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <Card>
          <Features />
          <HowItWorks />
          <Tech />
          <Testing />
          <OurTeam />
        </Card>
      </GridContainer>
    </div>
  );
}
