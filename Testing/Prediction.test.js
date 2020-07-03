import React from "react";
import ReactDOM from "react-dom";
import Prediction from "/home/johnd/Desktop/JediBetDapp/src/components/layouts/Prediction.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Prediction />, div);
});
