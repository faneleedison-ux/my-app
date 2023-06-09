import React, { Component } from "react";
import black from "../Images/black.png";
import brown from "../Images/default.png";
import gray from "../Images/gray.png";
import Draggable from "react-draggable";
import "./theory.css";

export default class Hello extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Draggable>
            <div className="folder">
              <img src={gray} alt="gray folder" />
              <p>Dev Blogs</p>
              <p>This folder is draggable and contains the following content: written critical reflection dev blogs for WSOA4175A week 8 to week 14.</p>
            </div>
          </Draggable>

          <Draggable>
            <div className="folder">
              <img src={black} alt="black folder" />
              <p>Essay</p>
              <p>This folder is draggable and contains tthe following content: the essay and technical preparatory work.</p>
            </div>
          </Draggable>

          <Draggable>
            <div className="folder">
              <img src={brown} alt="brown folder" />
              <p>Research</p>
              <p>This folder is draggable and contains tthe following content: additional writing, reflection, and extra research.</p>
            </div>
          </Draggable>
        </div>
      </React.Fragment>
    );
  }
}
