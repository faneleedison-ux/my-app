import React from "react";
import Slideshow from "./Slider";

//importing images
import image0 from "../../assets/Images/0.png";
import image1 from "../../assets/Images/1.png";
import image2 from "../../assets/Images/2.png";
import image3 from "../../assets/Images/3.png";
import image4 from "../../assets/Images/4.png";
import image5 from "../../assets/Images/5.png";
import image6 from "../../assets/Images/6.png";
import image7 from "../../assets/Images/7.png";
import image8 from "../../assets/Images/8.png";
import image9 from "../../assets/Images/9.png";
import image10 from "../../assets/Images/10.png";
import image11 from "../../assets/Images/11.png";

//using the images in slider show imported
const ImagesSlider = () => {
  const images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  return (
    <div>
      <h1>Slideshow For High Fidelity Wireframes</h1>
      <Slideshow images={images} />
    </div>
  );
};

export default ImagesSlider;
