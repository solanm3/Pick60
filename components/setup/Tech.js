/* eslint-disable */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridItem from "./GridItem.js";
import GridContainer from "./GridContainer.js";
import InfoArea from "./InfoArea.js";

import {
  ThumbsUpDown,
  Visibility,
  GridOn,
  SupervisorAccount,
  SportsFootball,
  Https,
  Poll,
  Chat,
  Fingerprint,
  Business,
  Security,
  VerifiedUser,
  FullscreenExit,
  FormatBold,
  Widgets,
  Code,
  LibraryAdd,
  FilterFrames,
  Link,
  DeveloperBoard,
  BrokenImage
} from "@material-ui/icons";

//styles
import teamStyle from "../../assets/teamStyle.js";

const useStyles = makeStyles(teamStyle);

export default function HowItWorks(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.smallTitle}>TECHNOLOGIES IMPLEMENTED</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="JavaScript"
            description="JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications."
            icon={Code}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Python"
            description="Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991."
            icon={Code}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Solidity"
            description="Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state."
            icon={Code}
            iconColor="danger"
            vertical
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Flask"
            description="Flask is a micro web framework written in Python."
            icon={LibraryAdd}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Web3.js"
            description="web3.js is a collection of libraries which allow you to interact with a local or remote ethereum node, using a HTTP or IPC connection."
            icon={FilterFrames}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Ganache"
            description="Ganache is a personal blockchain for Ethereum development you can use to deploy contracts, develop your applications, and run tests."
            icon={BrokenImage}
            iconColor="danger"
            vertical
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Truffle"
            description="Development environment for blockchain dapps (decentralized applications) and smart contracts."
            icon={DeveloperBoard}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Sklearn"
            description="Scikit-learn is a free machine learning library for Python. It features various algorithms like support vector machine, random forests, and k-neighbours, and it also supports Python numerical and scientific libraries like NumPy and SciPy."
            icon={LibraryAdd}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="MetaMask"
            description="MetaMask is a crypto currency wallet that provides a secure connection between our blockchain application and the decentralized Ethereum network. "
            icon={Link}
            iconColor="danger"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
