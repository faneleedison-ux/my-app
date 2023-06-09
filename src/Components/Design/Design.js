import React, { Component } from "react";
import black from "../Images/black.png";
import brown from "../Images/default.png";
import gray from "../Images/gray.png";
import Draggable from "react-draggable";
import "./design.css";

export default class Hello extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Draggable>
            <div className="folder">
              <img src={gray} alt="gray folder" />
              <p>Wireframes</p>
              <p>This folder is draggable & contains the following content: Low fidelity annotated Wireframes and high fidelity wireframes for each screen/screen type.</p>
            </div>
          </Draggable>

          <Draggable>
            <div className="folder">
              <img src={black} alt="black folder" />
              <p>Style Guide</p>
              <p>This folder is draggable & contains the following content: the website's goal and aesthetic as a single statement. The visual design elements selected.</p>
            </div>
          </Draggable>

          <Draggable>
            <div className="folder">
              <img src={brown} alt="brown folder" />
              <p>Rationale</p>
              <p>This folder is draggable & contains the following content: written critical reflection on design, a description on how the website's UI and UX impacted the code.</p>
            </div>
          </Draggable>
        </div>
      </React.Fragment>
    );
  }
}
