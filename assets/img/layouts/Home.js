import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import TeamGrid from "./TeamGrid.js";
import GridItem from "../setup/GridItem.js";
import MyHeader from "./MyHeader.js";
import Prediction from "./Prediction.js";
import GridContainer from "../setup/GridContainer.js";
import Parallax from "../setup/Parallax.js";
//styles
import teamStyle from "../../assets/teamStyle.js";
const useStyles = makeStyles(teamStyle);

//Matchups
import { Matchups } from "./Matchups.js";

export default function TeamSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <MyHeader color="transparent" />
      <Parallax large filter image={require("../../assets/img/Beastquake.PNG")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}> Pick 60</h1>
                <h3 className={classes.title}>
                  A Blockchain Powered Betting system!
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <GridContainer />
      <div>
        <GridContainer>
          <TeamGrid
            logo={Matchups[0].homeImg}
            alt={Matchups[0].homeAlt}
            rival={Matchups[0].awayAlt}
            record={Matchups[0].homeRecord}
            index={Matchups[0].index}
            history={props.history}
          />
          <Prediction />
          <TeamGrid
            logo={Matchups[0].awayImg}
            alt={Matchups[0].awayAlt}
            rival={Matchups[0].homeAlt}
            record={Matchups[0].awayRecord}
            index={Matchups[0].index}
            history={props.history}
          />
          <TeamGrid
            logo={Matchups[1].homeImg}
            alt={Matchups[1].homeAlt}
            rival={Matchups[1].awayAlt}
            record={Matchups[1].homeRecord}
            index={Matchups[1].index}
            history={props.history}
          />
          <Prediction />
          <TeamGrid
            logo={Matchups[1].awayImg}
            alt={Matchups[1].awayAlt}
            rival={Matchups[1].homeAlt}
            record={Matchups[1].awayRecord}
            index={Matchups[1].index}
            history={props.history}
          />
          <TeamGrid
            logo={Matchups[2].homeImg}
            alt={Matchups[2].homeAlt}
            rival={Matchups[2].awayAlt}
            record={Matchups[2].homeRecord}
            index={Matchups[2].index}
            history={props.history}
          />
          <Prediction />
          <TeamGrid
            logo={Matchups[2].awayImg}
            alt={Matchups[2].awayAlt}
            rival={Matchups[2].homeAlt}
            record={Matchups[2].awayRecord}
            index={Matchups[2].index}
            history={props.history}
          />
        </GridContainer>
      </div>
    </div>
  );
}
