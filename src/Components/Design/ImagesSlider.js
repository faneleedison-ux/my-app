import React from "react";
import Slideshow from "./Slider";

//importing images
import image0 from "../../assets/Images/home.png";
import image1 from "../../assets/Images/design.png";
import image2 from "../../assets/Images/theory.png";
import image3 from "../../assets/Images/art.png";


//using the images in slider show imported
const ImagesSlider = () => {
  const images = [
    image0,
    image1,
    image2,
    image3
  ];

  return (
    <div>
      <h1>Slideshow For Low Fidelity Wireframes </h1>
      <Slideshow images={images} />
    </div>
  );
};

export default ImagesSlider;
