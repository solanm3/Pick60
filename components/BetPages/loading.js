import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridContainer from "../setup/GridContainer.js";
import GridItem from "../setup/GridItem.js";
import Card from "@material-ui/core/Card";
import waiting from "../../assets/img/TheHelmet.PNG";
import payout from "../../assets/img/Miani.PNG";
import take from "../../assets/img/RavensQbs.PNG";
import place from "../../assets/img/ODB.PNG";
import fail from "../../assets/img/Earl.jpg";
import winner from "../../assets/img/Mahomes.jpg";

// styles
import teamStyle from "../../assets/teamStyle.js";
const useStyles = makeStyles(teamStyle);

export default function LoadingPage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <GridContainer justify="center">
        <Card>
          <GridItem xs={12} sm={12} md={8}>
            <img src={props.pic} alt="loading..." />
            <div>
              <h2>{props.message}</h2>
            </div>
          </GridItem>
        </Card>
      </GridContainer>
    </div>
  );
}
