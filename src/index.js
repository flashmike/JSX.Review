////calling dependencies
//var React = require("react");
//var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";

const fname = "Mike";
const lname = "Mijaro";
const num = 12;
const web = "flashmike.com";
const copyright = 2022;

////render - what to show and where; single element rendering
//ReactDOM.render(<h1>Hello Mike!</h1>, document.getElementById("root"));

////render multiple elements
ReactDOM.render(
  <div>
    <h1 className="heading">Hello {fname + " " + lname}</h1>
    <p>
      Currently testing ver {num}.{Math.floor(Math.random() * 10)}...
    </p>
    <ul>
      <li>React</li>
      <li>Node</li>
      <li>Github</li>
    </ul>
    <div>
      <img
        className="thumb-img"
        src="https://flashmike.com/images/games/KulturaTrip.jpg"
        alt="Kultura Trip"
      />
      <img
        className="thumb-img"
        src="https://flashmike.com/images/games/alingMcBees.jpg"
        alt="Aling McBees"
      />
      <img
        className="thumb-img"
        src="https://flashmike.com/images/games/ziggyRun.jpg"
        alt="Ziggy Run"
      />
    </div>
    <p>
      &copy; {web} {copyright}
    </p>
  </div>,
  document.getElementById("root")
);
