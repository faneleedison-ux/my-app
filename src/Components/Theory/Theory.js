import React, { Component } from "react";
import Casefolder from "../../assets/Images/casefolder.png";

import Draggable from "react-draggable";

import { Link } from "react-router-dom";
import Words from "../Home/Words";

import RoundedButtons from "../Buttons/RoundedButtons";

export default class Hello extends Component {
  render() {
    return (
      <React.Fragment>
        <RoundedButtons />
        <Words/>
        <div className="container">
          <Draggable>
            <div className="folder">
              <Link to="/devblogs">
                <img src={Casefolder} alt="gray folder" />
              </Link>
              <div
                className="paragraph"
                style={{
                  border: "2px solid red",
                  borderRadius: "50px",
                  backgroundColor: "beige",
                  padding: "10px",
                }}
              >
              <p className="title">Dev Blogs</p>
              <p className="description">
                This folder is draggable and contains the following content:
                written critical reflection dev blogs for WSOA4175A week 8 to
                week 14.
              </p>
              </div>
            </div>
          </Draggable>

          <Draggable>
            <div className="folder">
              <Link to="/essay">
                <img src={Casefolder} alt=" black folder" />
              </Link>
              <div
                className="paragraph"
                style={{
                  border: "2px solid red",
                  borderRadius: "50px",
                  backgroundColor: "beige",
                  padding: "10px",
                }}
              >
              <p className="title">Essay</p>
              <p className="description">
                This folder is draggable and contains the following content: the
                essay and technical preparatory work.
              </p>
              </div>
            </div>
          </Draggable>

          <Draggable>
            <div className="folder">
              <Link to="/research">
                <img src={Casefolder} alt="ebrown folderxample" />
              </Link>
              <div
                className="paragraph"
                style={{
                  border: "2px solid red",
                  borderRadius: "50px",
                  backgroundColor: "beige",
                  padding: "10px",
                }}
              >
              <p className="title">Research</p>
              <p className="description">
                This folder is draggable and contains the following content:
                additional writing, reflection, and extra research.
              </p>
              </div>
            </div>
          </Draggable>
        </div>
      </React.Fragment>
    );
  }
}
