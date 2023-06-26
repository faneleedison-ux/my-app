import React from "react";
import "./sandhourglass.css";
import "./Words";
import Words from "./Words";
import RoundedButtons from "../Buttons/RoundedButtons";

const SandHourglass = () => {
  return (
    <div>
      <RoundedButtons />
      <Words />

      <div className="box-canvas">
        <div className="frame">
          <div className="top"></div>
          <div className="bottom">
            <div className="drip"></div>
            <div className="blob"></div>
            <div className="glass"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandHourglass;
