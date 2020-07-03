import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import MyHeader from "./MyHeader.js";
import Header from "../setup/Header.js";
import Parallax from "../setup/Parallax.js";
import CardBody from "../setup/CardBody.js";
import CardFooter from "../setup/CardFooter.js";
import GridItem from "../setup/GridItem.js";
import GridContainer from "../setup/GridContainer.js";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import LeftLinks from "../setup/LeftHeaderLinks.js";
import RightLinks from "../setup/RightHeaderLinks.js";
//styles
import teamStyle from "../../assets/teamStyle.js";

const useStyles = makeStyles(teamStyle);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <MyHeader color="transparent" />
      <Parallax
        large
        filter
        image={require("../../assets/img/blockchain.PNG")}
      />
      <h2 className={classes.title}></h2>
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={require("../../assets/img/Mise.PNG")}
                  alt="Seahawks"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Mick
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>Blockchain</p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={require("../../assets/img/SexyDuff.jpg")}
                  alt="SexyDuff"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Duffman
                <br />
                <small className={classes.smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  A once promising Galiec Footballer, traded in his boots for
                  the laptop after joining the Virgins of L128. Garnered intrest
                  from both Tylnex and Salesforce during free agency. He chose
                  Salesforce as he no longer wants to be a filty Northsider and
                  wants to move closer to Rob Carnage and the guys. Has
                  aspirations of playing in the Koi Sumoi Cup next year. Also an
                  avid lover of bat soup!
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
