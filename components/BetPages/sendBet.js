import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridItem from "../setup/GridItem.js";
import GridContainer from "../setup/GridContainer.js";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Parallax from "../setup/Parallax.js";
import MyHeader from "../layouts/MyHeader.js";
import CardFooter from "../setup/CardFooter.js";
import InfoArea from "../setup/InfoArea.js";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Telegram, Facebook, Twitter, SportsKabaddi } from "@material-ui/icons";

// styles
import teamStyle from "../../assets/teamStyle.js";
const useStyles = makeStyles(teamStyle);

export default function SendBet(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  console.log("match", props.match);
  const handleClick = () => {
    window.location.reload(true);
  };

  return (
    <div className={classes.section}>
      <MyHeader color="transparent" />
      <Parallax small filter image={require("../../assets/img/MilkyWay.png")} />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h1 className={classes.title}>Find A Bet Taker</h1>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card plain>
            <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
              <img
                src={require(`../../assets/img/TBG.jpg`)}
                alt={"TB12"}
                className={imageClasses}
              />
            </GridItem>
            <h4 className={classes.cardTitle}>Play A Mate</h4>
            <h5 className={classes.description}>
              Send your bet to a friend via Facebook, Twitter or Telegram.{" "}
              <br />
            </h5>
            <CardFooter className={classes.justifyCenter}>
              <Button
                justIcon
                color="info"
                round
                size="sm"
                className={classes.margin5}
                onClick={handleClick}
              >
                <InfoArea icon={Facebook} size="small" iconColor="info" />
              </Button>
              <Button
                justIcon
                color="transparent"
                onClick={handleClick}
                className={classes.margin5}
              >
                <InfoArea icon={Twitter} size="small" iconColor="info" />
              </Button>
              <Button
                justIcon
                color="transparent"
                onClick={handleClick}
                className={classes.margin5}
              >
                <InfoArea icon={Telegram} size="small" iconColor="info" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
              <img
                src={require(`../../assets/img/DHenry.PNG`)}
                alt={"Tom&Eli"}
                className={imageClasses}
              />
            </GridItem>
            <h4 className={classes.cardTitle}>Play A Rival</h4>
            <h5 className={classes.description}>
              Post your bet on our site and we'll try and find a bet taker for
              you.
            </h5>
            <CardFooter className={classes.justifyCenter}>
              <Button
                justIcon
                color="gray"
                round
                size="sm"
                className={classes.margin5}
                onClick={handleClick}
              >
                <InfoArea
                  icon={SportsKabaddi}
                  size="small"
                  iconColor="danger"
                />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
