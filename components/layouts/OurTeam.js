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
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.smallTitle}>MEET THE DEVS</h2>
        </GridItem>
      </GridContainer>
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={require("../../assets/img/Mise.PNG")}
                  alt="Mick"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Mick
                <br />
                <small className={classes.smallTitle}>Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  "I became interested in the development of blockchain
                  applications just before the start of the college year and was
                  very keen on exploring the field further with the development
                  of this fourth-year project.
                  <br /> <br />
                  There was a very steep learning curve as it involved the use
                  of many new technologies. I was tasked with developing the
                  smart contract, integrating the contract into the
                  decentralized application and designing the user experience
                  relating to the wagering side of the application. <br />
                  <br /> I also got the opportunity to dip my toe into the
                  machine learning side of things, helping with the data
                  preparation, research of the best features to use in our
                  models and implementing our logistic regression algorithm."
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
            <Card>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={require("../../assets/img/duff.PNG")}
                  alt="Duff"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                John
                <br />
                <br />
                <small className={classes.smallTitle}>Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  "I am an avid fan of the NFL. I have always expressed interest
                  in designing a prediction model that allowed me to gain an
                  advantage in betting on NFL games. <br />
                  <br />
                  <br />
                  For Pick 60 I mainly dealt with the machine learning element
                  of the decentralized application. I have always liked working
                  with python and it was great to get the experience of working
                  with different languages such as solidity and JavaScript.{" "}
                  <br />
                  <br />
                  <br />I love taking on new challenges especially working with
                  prediction algorithms such as logistic regression, decision
                  trees and support vector machines. I am very proud of what we
                  have created here with pick 60”
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