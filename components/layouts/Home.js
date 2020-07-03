import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
      <Parallax
        large
        filter
        image={require("../../assets/img/Beastquake.PNG")}
      />
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h1 className={classes.title}>PICK 60</h1>
            <h4 className={classes.description}>
              A Blockchain Powered Betting System!
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[0].homeImg}
            alt={Matchups[0].homeAlt}
            rival={Matchups[0].awayAlt}
            record={Matchups[0].homeRecord}
            index={Matchups[0].index}
            history={props.history}
          />
          <Prediction index={Matchups[0].index} history={props.history} />
          <TeamGrid
            logo={Matchups[0].awayImg}
            alt={Matchups[0].awayAlt}
            rival={Matchups[0].homeAlt}
            record={Matchups[0].awayRecord}
            index={Matchups[0].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[1].homeImg}
            alt={Matchups[1].homeAlt}
            rival={Matchups[1].awayAlt}
            record={Matchups[1].homeRecord}
            index={Matchups[1].index}
            history={props.history}
          />
          <Prediction index={Matchups[1].index} history={props.history} />
          <TeamGrid
            logo={Matchups[1].awayImg}
            alt={Matchups[1].awayAlt}
            rival={Matchups[1].homeAlt}
            record={Matchups[1].awayRecord}
            index={Matchups[1].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[2].homeImg}
            alt={Matchups[2].homeAlt}
            rival={Matchups[2].awayAlt}
            record={Matchups[2].homeRecord}
            index={Matchups[2].index}
            history={props.history}
          />
          <Prediction index={Matchups[2].index} history={props.history} />
          <TeamGrid
            logo={Matchups[2].awayImg}
            alt={Matchups[2].awayAlt}
            rival={Matchups[2].homeAlt}
            record={Matchups[2].awayRecord}
            index={Matchups[2].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[3].homeImg}
            alt={Matchups[3].homeAlt}
            rival={Matchups[3].awayAlt}
            record={Matchups[3].homeRecord}
            index={Matchups[3].index}
            history={props.history}
          />
          <Prediction index={Matchups[3].index} history={props.history} />
          <TeamGrid
            logo={Matchups[3].awayImg}
            alt={Matchups[3].awayAlt}
            rival={Matchups[3].homeAlt}
            record={Matchups[3].awayRecord}
            index={Matchups[3].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[4].homeImg}
            alt={Matchups[4].homeAlt}
            rival={Matchups[4].awayAlt}
            record={Matchups[4].homeRecord}
            index={Matchups[4].index}
            history={props.history}
          />
          <Prediction index={Matchups[4].index} history={props.history} />
          <TeamGrid
            logo={Matchups[4].awayImg}
            alt={Matchups[4].awayAlt}
            rival={Matchups[4].homeAlt}
            record={Matchups[4].awayRecord}
            index={Matchups[4].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[5].homeImg}
            alt={Matchups[5].homeAlt}
            rival={Matchups[5].awayAlt}
            record={Matchups[5].homeRecord}
            index={Matchups[5].index}
            history={props.history}
          />
          <Prediction index={Matchups[5].index} history={props.history} />
          <TeamGrid
            logo={Matchups[5].awayImg}
            alt={Matchups[5].awayAlt}
            rival={Matchups[5].homeAlt}
            record={Matchups[5].awayRecord}
            index={Matchups[5].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[6].homeImg}
            alt={Matchups[6].homeAlt}
            rival={Matchups[6].awayAlt}
            record={Matchups[6].homeRecord}
            index={Matchups[6].index}
            history={props.history}
          />
          <Prediction index={Matchups[6].index} history={props.history} />
          <TeamGrid
            logo={Matchups[6].awayImg}
            alt={Matchups[6].awayAlt}
            rival={Matchups[6].homeAlt}
            record={Matchups[6].awayRecord}
            index={Matchups[6].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[7].homeImg}
            alt={Matchups[7].homeAlt}
            rival={Matchups[7].awayAlt}
            record={Matchups[7].homeRecord}
            index={Matchups[7].index}
            history={props.history}
          />
          <Prediction index={Matchups[7].index} history={props.history} />
          <TeamGrid
            logo={Matchups[7].awayImg}
            alt={Matchups[7].awayAlt}
            rival={Matchups[7].homeAlt}
            record={Matchups[7].awayRecord}
            index={Matchups[7].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[8].homeImg}
            alt={Matchups[8].homeAlt}
            rival={Matchups[8].awayAlt}
            record={Matchups[8].homeRecord}
            index={Matchups[8].index}
            history={props.history}
          />
          <Prediction index={Matchups[8].index} history={props.history} />
          <TeamGrid
            logo={Matchups[8].awayImg}
            alt={Matchups[8].awayAlt}
            rival={Matchups[8].homeAlt}
            record={Matchups[8].awayRecord}
            index={Matchups[8].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[9].homeImg}
            alt={Matchups[9].homeAlt}
            rival={Matchups[9].awayAlt}
            record={Matchups[9].homeRecord}
            index={Matchups[9].index}
            history={props.history}
          />
          <Prediction index={Matchups[9].index} history={props.history} />
          <TeamGrid
            logo={Matchups[9].awayImg}
            alt={Matchups[9].awayAlt}
            rival={Matchups[9].homeAlt}
            record={Matchups[9].awayRecord}
            index={Matchups[9].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[10].homeImg}
            alt={Matchups[10].homeAlt}
            rival={Matchups[10].awayAlt}
            record={Matchups[10].homeRecord}
            index={Matchups[10].index}
            history={props.history}
          />
          <Prediction index={Matchups[10].index} history={props.history} />
          <TeamGrid
            logo={Matchups[10].awayImg}
            alt={Matchups[10].awayAlt}
            rival={Matchups[10].homeAlt}
            record={Matchups[10].awayRecord}
            index={Matchups[10].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[11].homeImg}
            alt={Matchups[11].homeAlt}
            rival={Matchups[11].awayAlt}
            record={Matchups[11].homeRecord}
            index={Matchups[11].index}
            history={props.history}
          />
          <Prediction index={Matchups[11].index} history={props.history} />
          <TeamGrid
            logo={Matchups[11].awayImg}
            alt={Matchups[11].awayAlt}
            rival={Matchups[11].homeAlt}
            record={Matchups[11].awayRecord}
            index={Matchups[11].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[12].homeImg}
            alt={Matchups[12].homeAlt}
            rival={Matchups[12].awayAlt}
            record={Matchups[12].homeRecord}
            index={Matchups[12].index}
            history={props.history}
          />
          <Prediction index={Matchups[12].index} history={props.history} />
          <TeamGrid
            logo={Matchups[12].awayImg}
            alt={Matchups[12].awayAlt}
            rival={Matchups[12].homeAlt}
            record={Matchups[12].awayRecord}
            index={Matchups[12].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[13].homeImg}
            alt={Matchups[13].homeAlt}
            rival={Matchups[13].awayAlt}
            record={Matchups[13].homeRecord}
            index={Matchups[13].index}
            history={props.history}
          />
          <Prediction index={Matchups[13].index} history={props.history} />
          <TeamGrid
            logo={Matchups[13].awayImg}
            alt={Matchups[13].awayAlt}
            rival={Matchups[13].homeAlt}
            record={Matchups[13].awayRecord}
            index={Matchups[13].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[14].homeImg}
            alt={Matchups[14].homeAlt}
            rival={Matchups[14].awayAlt}
            record={Matchups[14].homeRecord}
            index={Matchups[14].index}
            history={props.history}
          />
          <Prediction index={Matchups[14].index} history={props.history} />
          <TeamGrid
            logo={Matchups[14].awayImg}
            alt={Matchups[14].awayAlt}
            rival={Matchups[14].homeAlt}
            record={Matchups[14].awayRecord}
            index={Matchups[14].index}
            history={props.history}
          />
        </GridContainer>
        <GridContainer>
          <TeamGrid
            logo={Matchups[15].homeImg}
            alt={Matchups[15].homeAlt}
            rival={Matchups[15].awayAlt}
            record={Matchups[15].homeRecord}
            index={Matchups[15].index}
            history={props.history}
          />
          <Prediction index={Matchups[15].index} history={props.history} />
          <TeamGrid
            logo={Matchups[15].awayImg}
            alt={Matchups[15].awayAlt}
            rival={Matchups[15].homeAlt}
            record={Matchups[15].awayRecord}
            index={Matchups[15].index}
            history={props.history}
          />
        </GridContainer>
      </div>
    </div>
  );
}
