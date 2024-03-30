// AnxietyButton.js
import React from 'react';
import './AnxietyButton.css'; // Import the CSS file for the button component
import continueImage from './quizPageimages/anxietyImage.png'; // Import the ContinueButton image

function AnxietyButton() {
  const handleClick = () => {
    console.log('Anxirty button clicked');
  };

  return (
    <a href="/AnxietyButton" className="AnxietyButton" onClick={handleClick}>
      <img src={continueImage} alt="AnxietyButton" /> {/* Render the image */}
      <span className="ButtonText">Anxiety</span> {/* Render the text */}
    </a>
  );
}

export default AnxietyButton;