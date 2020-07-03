import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Header from "../setup/Header.js";
import LeftLinks from "../setup/LeftHeaderLinks.js";
import RightLinks from "../setup/RightHeaderLinks.js";

//styles
import teamStyle from "../../assets/teamStyle.js";

const useStyles = makeStyles(teamStyle);

export default function MyHeader(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <Header
      leftLinks={<LeftLinks />}
      brand="Pick60"
      rightLinks={<RightLinks />}
      fixed
      changeColorOnScroll={{
        height: 200,
        color: "transparent"
      }}
    />
  );
}
