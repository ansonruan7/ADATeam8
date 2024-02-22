import React from 'react';
import './CoralButton.css'; // Import the CSS file for the button component
import coralButtonImage from './buttonImages/coralButtonImage.png'; // Import the CoralButton image

function CoralButton() {
  const handleClick = () => {
    console.log('Coral button clicked');
  };

  return (
    <a href="/coral" className="CoralButton" onClick={handleClick}>
      <img src={coralButtonImage} alt="Coral" /> {/* Render the image */}
    </a>
  );
}

export default CoralButton;
