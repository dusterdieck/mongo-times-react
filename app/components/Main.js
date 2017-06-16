import React from "react";
import Navbar from "./common/Navbar";
import Jumbo from "./common/Jumbo";

const Main = props => (
  <div>
    <Navbar />
    <Jumbo />
    {props.children}
  </div>
);

export default Main;
