import React from 'react';
import Draggable from 'react-draggable';

const DraggableImage = ({ title, image, description }) => {
  return (
    <Draggable>
      
      <div style={{ height: '2000px' }}>
        <img src={image} alt="Image" />
        <h1  style={{
                  border: "2px solid red",
                  borderRadius: "10px",
                  backgroundColor: "beige",
                  padding: "10px",
                }}>
          {title}
        </h1>
        <p  style={{
                  border: "2px solid red",
                  borderRadius: "10px",
                  backgroundColor: "beige",
                  padding: "10px",
                }}>{description}</p>
      </div>
    </Draggable>
  );
};

export default DraggableImage;
