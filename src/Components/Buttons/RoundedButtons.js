import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import ringSound from "../../assets/Sound/ring.wav";

const RoundedButtons = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonClick = (path) => {
    navigate(path);
    playSound();
  };

  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
    playSound();
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };
  
  const playSound = () => {
    const sound = new Audio(ringSound);
    sound.play().catch((error) => {
      // Handle the play() promise rejection
      console.error("Failed to play sound:", error);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "50px",
          backgroundColor: "purple",
          flex: "1 1 30%",
          maxWidth: "30%",
          marginRight: "1rem",
          transform: hoveredButton === "home" ? "scale(1.1)" : "none",
          animation: hoveredButton === "home" ? "shake 0.3s infinite" : "none",
        }}
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick("/")}
      >
        Home
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "50px",
          backgroundColor: "purple",
          flex: "1 1 30%",
          maxWidth: "30%",
          marginRight: "1rem",
          transform: hoveredButton === "about" ? "scale(1.1)" : "none",
          animation: hoveredButton === "about" ? "shake 0.3s infinite" : "none",
        }}
        onMouseEnter={() => handleMouseEnter("about")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick("/about")}
      >
        About
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "50px",
          backgroundColor: "purple",
          flex: "1 1 30%",
          maxWidth: "30%",
          marginRight: "1rem",
          transform: hoveredButton === "theory" ? "scale(1.1)" : "none",
          animation: hoveredButton === "theory" ? "shake 0.3s infinite" : "none",
        }}
        onMouseEnter={() => handleMouseEnter("theory")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick("/theory")}
      >
        Theory
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "50px",
          backgroundColor: "purple",
          flex: "1 1 30%",
          maxWidth: "30%",
          marginRight: "1rem",
          transform: hoveredButton === "design" ? "scale(1.1)" : "none",
          animation: hoveredButton === "design" ? "shake 0.3s infinite" : "none",
        }}
        onMouseEnter={() => handleMouseEnter("design")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick("/design")}
      >
        Design
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "50px",
          backgroundColor: "purple",
          flex: "1 1 30%",
          maxWidth: "30%",
          marginRight: "1rem",
          transform: hoveredButton === "art" ? "scale(1.1)" : "none",
          animation: hoveredButton === "art" ? "shake 0.3s infinite" : "none",
        }}
        onMouseEnter={() => handleMouseEnter("art")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleButtonClick("/art")}
      >
        Art
      </Button>

      {/* Add the remaining buttons with similar logic */}
      
      {/* Media Query for smaller screens */}
      <style jsx>{`
        @media (max-width: 600px) {
          div {
            flex-wrap: wrap;
            justify-content: center;
          }

          Button {
            flex: 1 1 80%;
            maxwidth: 80%;
            margin-bottom: 1rem;
          }
        }

        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-4px) rotate(-3deg);
          }
          50% {
            transform: translateX(4px) rotate(3deg);
          }
          75% {
            transform: translateX(-2px) rotate(-2deg);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default RoundedButtons;
