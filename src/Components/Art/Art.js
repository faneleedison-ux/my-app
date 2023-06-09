import React, { useEffect } from 'react';
import "./art.css";


const EyeFollowCursor = () => {
  useEffect(() => {
    const eyeball = (event) => {
      const eye = document.querySelectorAll('.eye');
      eye.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rot}deg)`;
      });
    };

    document.querySelector('body').addEventListener('mousemove', eyeball);

    return () => {
      document.querySelector('body').removeEventListener('mousemove', eyeball);
    };
  }, []);

  return (
    <div className="face">
      <div className="eyes">
        <div className="eye"></div>
        <div className="eye"></div>
      </div>
    </div>
  );
};

export default EyeFollowCursor;
