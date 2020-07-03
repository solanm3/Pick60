import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "/home/johnd/Desktop/JediBetDapp/src/components/layouts/MyHeader.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MyHeader />, div);
});
