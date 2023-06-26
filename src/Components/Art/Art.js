import React, { useEffect } from "react";
import "./art.css";
import PurpleCard from "./Cards";
import { Link } from "react-router-dom";

import RoundedButtons from "../Buttons/RoundedButtons";
import Words from "../Home/Words";
import casefolder from "../../assets/Images/casefolder.png";

const FaceAnimation = () => {
  useEffect(() => {
    const eyeball = (event) => {
      const eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rot}deg)`;
      });
    };

    document.querySelector("body").addEventListener("mousemove", eyeball);

    return () => {
      document.querySelector("body").removeEventListener("mousemove", eyeball);
    };
  }, []);

  return (
    <div>
      <RoundedButtons />
      <Words />

      <div className="container">
      <Link to="/chat">
        <PurpleCard
          image={casefolder}
          title="POLICE"
          description="The mission of the South African Police Service is to prevent, combat, and investigate crime to ensure the safety and security of all people in South Africa."
        />
        </Link>

        {/* <div className="cards">
              <PurpleCard
                image="../../assets/Images/gray.png"
                title="Stories"
                description="Some description for stories"
              />
              <PurpleCard
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Stats"
                description="Some description for stats"
              />
              <PurpleCard
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Report"
                description="Some description for report"
              />
            </div> */}
        <div className="face">
          <div className="eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
        <Link to="/tinder">

          <PurpleCard
            image={casefolder}
            
            title="TINDER"
            description="Graves with girls. Taken too soon. Too brutal. Too horrifying to name. To document. To find. To mark as danger zones. Danger zones disguised as safe spaces. Safe spaces with murderers."
          />
        </Link>
      </div>
    </div>
  );
};

export default FaceAnimation;
