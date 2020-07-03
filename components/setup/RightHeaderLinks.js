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
import { Apps, YouTube, MenuBook, GitHub, School } from "@material-ui/icons";

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
          title="User Manual"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <MenuBook className={classes.icons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Watch Our Video"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.youtube.com/watch?v=_Te5kSJntGk"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <YouTube className={classes.icons} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Check Out Our Repo"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://gitlab.computing.dcu.ie/duffyj34/2020-ca400-duffyj34-solanm3"
            target="_blank"
            className={classes.navLink}
          >
            <GitHub className={classes.icons} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
