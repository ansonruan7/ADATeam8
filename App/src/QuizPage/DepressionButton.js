// DepressionButton.js

import React from 'react';
import './DepressionButton.css'; // Import the CSS file for the button component
import depressionImage from './quizPageimages/depressionImage.png'; // Import the DepressionButton image

function DepressionButton() {
  const handleClick = () => {
    console.log('Depression button clicked');
  };

  return (
    <a href="/DepressionButton" className="DepressionButton" onClick={handleClick}>
      <img src={depressionImage} alt="DepressionButton" /> {/* Render the image */}
      <span className="ButtonText">Depression</span> {/* Render the text */}
    </a>
  );
}

export default DepressionButton;
