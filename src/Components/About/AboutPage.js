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
        <Words />
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
                  padding: "5px",
                  
    
                }}
              >
                <p className="title">About Us</p>
                <p className="description">
                  Welcome to "See Her" - an interactive website that exposes the
                  flaws in the South African police justice system through a
                  chatbot experience. Engage with our chatbot to understand the
                  challenges faced by individuals seeking assistance or
                  reporting incidents. Symbolic visuals and victim stories
                  provide a poignant reminder of the broken aspects of the
                  system. Join us in raising awareness and working towards
                  positive change.
                </p>
              </div>
            </div>
          </Draggable>
        </div>
      </React.Fragment>
    );
  }
}
