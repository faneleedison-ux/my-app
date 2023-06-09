import React from 'react';
import Slideshow from './Slider';


//importing images
import image0 from '../Images/0.png';
import image1 from '../Images/1.png';
import image2 from '../Images/2.png';
import image3 from '../Images/3.png';
import image4 from '../Images/4.png';
import image5 from '../Images/5.png';
import image6 from '../Images/6.png';
import image7 from '../Images/7.png';
import image8 from '../Images/8.png';
import image9 from '../Images/9.png';
import image10 from '../Images/10.png';
import image11 from '../Images/11.png';


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
    image11

  ];

  return (
    <div>
      <h1>Slideshow Example</h1>
      <Slideshow images={images} />
    </div>
  );
};

export default ImagesSlider;
