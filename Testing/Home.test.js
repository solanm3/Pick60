import React from "react";
import ReactDOM from "react-dom";
import Home from "/home/johnd/Desktop/JediBetDapp/src/components/layouts/Home.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
});
