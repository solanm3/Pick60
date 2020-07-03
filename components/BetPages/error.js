import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridItem from "../setup/GridItem.js";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import fail from "../../assets/img/Earl.jpg";

// styles
import teamStyle from "../../assets/teamStyle.js";
const useStyles = makeStyles(teamStyle);

export default function ErrorPage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <img src={fail} alt="error..." />
      <div>
        <h2>Our apologies, Pick60 is not available at this time</h2>
      </div>
    </div>
  );
}
