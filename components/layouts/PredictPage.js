import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import GridItem from "../setup/GridItem.js";
import GridContainer from "../setup/GridContainer.js";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TeamBet from "./TeamBet.js";
import { Matchups } from "./Matchups.js";
import MyHeader from "./MyHeader.js";
import Parallax from "../setup/Parallax.js";
import Prediction from "./Prediction.js";
import TeamGrid from "./TeamGrid.js";

// styles
import "../../css/oswald.css";
import "../../css/open-sans.css";
import "../../css/pure-min.css";
import "../../App.css";

class Predict extends Component {
  constructor(props) {
    super(props);
    const index = this.props.match ? this.props.match.params.key : 0;
    const yppa = Matchups[index].yppa_diff;
    const rush = Matchups[index].rush_diff;
    const drive = Matchups[index].drive_points_diff;
    const turnover = Matchups[index].turnover_diff;
    const sackyardsdiff = Matchups[index].sack_times_diff;
    const sacktimesdiff = Matchups[index].sack_times_diff;
    this.state = {
      isLoading: false,
      formData: {
        yppa_diff: yppa,
        rush_diff: rush,
        drive_points_diff: drive,
        turnover_diff: turnover,
        sack_yards_diff: sackyardsdiff,
        sack_times_diff: sacktimesdiff
      },
      result: ""
    };
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  };

  handlePredictClick = event => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch("http://127.0.0.1:5000/prediction/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      });
  };

  handleCancelClick = event => {
    this.setState({ result: "" });
  };

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;
    const index = this.props.match ? this.props.match.params.key : 0;

    console.log("Pred props", this.props.match.params);

    var yppa_diffs = [];
    for (var i = -20; i <= 7; i = +(i + 0.1).toFixed(1)) {
      yppa_diffs.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    var rush_diffs = [];
    for (var i = -20; i <= 4; i = +(i + 0.1).toFixed(1)) {
      rush_diffs.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    var drive_points_diffs = [];
    for (var i = -20; i <= 6; i = +(i + 0.1).toFixed(1)) {
      drive_points_diffs.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    var turnover_diffs = [];
    for (var i = -20; i <= 3; i = +(i + 0.1).toFixed(1)) {
      turnover_diffs.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    var sack_yards_diffs = [];
    for (var i = -20; i <= 3; i = +(i + 0.1).toFixed(1)) {
      sack_yards_diffs.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    var sack_times_diffs = [];
    for (var i = -20; i <= 3; i = +(i + 0.1).toFixed(1)) {
      sack_times_diffs.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return (
      <div>
        <div>
          <MyHeader color="Black" />
          <Parallax
            small
            filter
            image={require("../../assets/img/pick6014.jpg")}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "30%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <GridContainer spacing={24}>
              <TeamGrid
                logo={Matchups[index].homeImg}
                alt={Matchups[index].homeAlt}
                record={Matchups[index].homeRecord}
                index={Matchups[index].index}
              />
              <Prediction />
              <TeamGrid
                logo={Matchups[index].awayImg}
                alt={Matchups[index].awayAlt}
                record={Matchups[index].awayRecord}
                index={Matchups[index].index}
              />
            </GridContainer>
          </div>
          <div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "30%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <GridContainer spacing={24}>
                <TeamGrid
                  logo={Matchups[index].homeImg}
                  alt={Matchups[index].homeAlt}
                  record={Matchups[index].homeRecord}
                  index={Matchups[index].index}
                />
                <Prediction />
                <TeamGrid
                  logo={Matchups[index].awayImg}
                  alt={Matchups[index].awayAlt}
                  record={Matchups[index].awayRecord}
                  index={Matchups[index].index}
                />
              </GridContainer>
            </div>
            <GridContainer justify="center">
              <h1>NFL Game Predictor</h1>
            </GridContainer>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} alignItems="center">
              <div className="pure-form pure-form-aligned">
                <fieldset align="center">
                  <div className="pure-control-group">
                    <label htmlFor="name">
                      Yards Per Pass Attempt Differential
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={Matchups[index].yppa_diff}
                    />
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="name">
                      Rushing Yards Per Attempt Differential
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={Matchups[index].rush_diff}
                    />
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="name">Drive Points Differential</label>
                    <input
                      id="name"
                      type="text"
                      value={Matchups[index].drive_points_diff}
                    />
                  </div>
                </fieldset>
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={6}>
              <div className="pure-form pure-form-aligned">
                <fieldset align="center">
                  <div className="pure-control-group">
                    <label htmlFor="name">Turnover Differential</label>
                    <input
                      id="name"
                      type="text"
                      value={Matchups[index].turnover_diff}
                    />
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="name">Sack Yards Differential</label>
                    <input
                      id="name"
                      type="text"
                      value={Matchups[index].sack_yards_diff}
                    />
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="name">Sack Times Differential</label>
                    <input
                      id="name"
                      type="text"
                      value={Matchups[index].sack_times_diff}
                    />
                  </div>
                  <h3>{result}</h3>
                </fieldset>
                <fieldset align="center">
                  <button
                    className="pure-button pure-button-primary"
                    onClick={this.handlePredictClick}
                    align="center"
                  >
                    Predict
                  </button>
                </fieldset>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default Predict;
