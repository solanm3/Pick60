import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridItem from "../setup/GridItem.js";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Matchups from "./Matchups.js";

//styles
import teamStyle from "../../assets/teamStyle.js";

const useStyles = makeStyles(teamStyle);

function TeamBet(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const handleClick = () => {
    console.log(props, "INDEX");
  };

  return (
    <GridItem xs={12} sm={12} md={6} onClick={handleClick}>
      <Button disabled>
        <Card>
          <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
            <img
              src={require(`../../assets/teams/${props.logo}`)}
              alt={props.alt}
              className={imageClasses}
            />
          </GridItem>
          <h4 className={classes.cardTitle}>
            {props.alt}
            <br />
            <small className={classes.smallTitle}>{props.record}</small>
          </h4>
        </Card>
      </Button>
    </GridItem>
  );
}

export default TeamBet;
