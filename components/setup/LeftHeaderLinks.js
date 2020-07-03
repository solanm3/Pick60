/*eslint-disable*/
import React from "react";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {
  Home,
  SupervisorAccount,
  Explore,
  SportsFootball,
  Poll
} from "@material-ui/icons";

// core components
import Button from "./Button.js";

import styles from "../../assets/styles/headerLinkStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Home"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="http://localhost:3000"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Home className={classes.icons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Our Predictions"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <Poll className={classes.icons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="About Pick60"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="http://localhost:3000/About"
            target="_blank"
            className={classes.navLink}
          >
            <SportsFootball className={classes.icons} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
