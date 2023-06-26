import React, { useState } from "react";
import "./SwipeCard.css";
import img1 from "../../assets/Images/gbv.jpg";
import RoundedButtons from "../Buttons/RoundedButtons";
import ProvinceStats from "./ProvinceStats";
import Words from "../Home/Words";

import CaseF from "../../assets/Images/bgcase-fotor-bg-remover-20230626155922.png";

import image1 from "../../assets//Images/gbv0.jpg";
import image2 from "../../assets//Images/gbv1.jpg";
import image3 from "../../assets//Images/gbv2.jpg";
import image4 from "../../assets//Images/gbv3.jpg";
import image5 from "../../assets//Images/gbv4.jpg";
import image6 from "../../assets//Images/gbv5.jpg";
import image7 from "../../assets//Images/gbv6.jpg";
import image8 from "../../assets//Images/gbv10.jpg";
import image9 from "../../assets//Images/gbv8.jpg";
import image10 from "../../assets//Images/gbv9.jpg";

const SwipeCard = () => {
  const [cards, setCards] = useState([
    { id: 1, name: "Uyinene Mrwetyana", age: 18, image: image1 },
    { id: 2, name: "Karabo Mokoena", age: 22, image: image2 },
    { id: 3, name: "Reeva Steenkamp", age: 29, image: image3 },
    { id: 4, name: "Zolile Khumalo", age: 21, image: image10 },
    { id: 5, name: "Tshegofatso Pule", age: 28, image: image4 },
    { id: 6, name: "Nosicelo Mtebani", age: 23, image: image5 },
    { id: 7, name: "Natasha Conabee", age: 17, image: image6 },
    { id: 8, name: "Ntokozo Mayenziwe Xaba", age: 20, image: image7 },
    { id: 9, name: "Altecia Kortjie", age: 29, image: image8 },
    { id: 10, name: "Lindelwa Peni, ", age: 43, image: image9 },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChatbot, setShowChatbot] = useState(false);

  const handleSwipe = (direction) => {
    if (direction === "right") {
      console.log(`Swiped right on card ${cards[currentIndex].name}`);
    } else if (direction === "left") {
      console.log(`Swiped left on card ${cards[currentIndex].name}`);
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  const toggleChatbot = () => {
    setShowChatbot((prevState) => !prevState);
  };

  return (
    <div className="main-bg">
      <RoundedButtons />
      <Words />
      <div className="swipe-card-container">
        {currentIndex < cards.length ? (
          <div className="swipe-card">
            <img
              src={cards[currentIndex].image}
              alt={cards[currentIndex].name}
            />
            <div className="swipe-card-info">
              <h3>{cards[currentIndex].name}</h3>
              <p>{cards[currentIndex].age}</p>
              <div className="swipe-buttons">
                <a
                  href="https://www.instagram.com/keeptheenergy/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="swipe-button"
                    onClick={() => handleSwipe("left")}
                  >
                    Read
                  </button>
                </a>

                <button
                  className="swipe-button"
                  onClick={() => handleSwipe("right")}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="end-message" style={{ backgroundColor: "beige" }}>
            <p>Error 404: Many Victims !!!</p>
            <button className="reset-button" onClick={handleReset}>
              Reset
            </button>
          </div>
        )}
      </div>
      {showChatbot && <ProvinceStats />}
      <img
        className="stats-button"
        src={showChatbot ? CaseF : CaseF}
        alt={showChatbot ? "Hide Stats" : "Show Stats"}
        onClick={toggleChatbot}
        style={{
          fontWeight: "bold",
          color: "red",
        
          border: "2px solid red",
        }}
      />
    </div>
  );
};

export default SwipeCard;
