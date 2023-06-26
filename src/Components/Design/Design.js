import React, { Component } from "react";
import Draggable from "react-draggable";
import "./design.css";
import { Link } from "react-router-dom";
import Casefolder from "../../assets/Images/casefolder.png";
import RoundedButtons from "../Buttons/RoundedButtons";
import Words from "../Home/Words";

export default class Hello extends Component {
  render() {
    return (
      <React.Fragment>
        <RoundedButtons/>
        <Words/>
        <div className="container">
          <Draggable>
            <div className="folder">
              <Link to="/wireframes">
                <img src={Casefolder} alt="gray folder" />
              </Link>
              <div
                className="paragraph"
                style={{
                  border: "2px solid red",
                  borderRadius: "10px",
                  backgroundColor: "beige",
                  padding: "10px",
                }}
              >
              <p>Wireframes</p>
              
              <p>
                This folder is draggable & contains the following content: Low
                fidelity annotated Wireframes and high fidelity wireframes for
                each screen/screen type.
              </p>
              </div>
            </div>
          </Draggable>

          <Draggable>
            <div className="folder">
              <Link to="/guide">
                <img src={Casefolder} alt="black folder" />
              </Link>
              <div
                className="paragraph"
                style={{
                  border: "2px solid red",
                  borderRadius: "10px",
                  backgroundColor: "beige",
                  padding: "10px",
                }}
              >              <p>Style Guide</p>
              <p>
                This folder is draggable & contains the following content: the
                website's goal and aesthetic as a single statement. The visual
                design elements selected.
              </p>
              </div>
            </div>
          </Draggable>

          <Draggable>
            <div className="folder">
              <Link to="/rationale">
                <img src={Casefolder} alt="brown folder" />
              </Link>
              <div
                className="paragraph"
                style={{
                  border: "2px solid red",
                  borderRadius: "10px",
                  backgroundColor: "beige",
                  padding: "10px",
                }}
              >
              <p>Rationale</p>
              <p>
                This folder is draggable & contains the following content:
                written critical reflection on design, a description on how the
                website's UI and UX impacted the code.
              </p>
              </div>
            </div>
          </Draggable>
        </div>
      </React.Fragment>
    );
  }
}
