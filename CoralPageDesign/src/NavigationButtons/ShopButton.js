// ShopButton.js

import React from 'react';
import './ShopButton.css'; // Import the CSS file for the button component
import shopButtonImage from './buttonImages/shopButtonImage.png'; // Import the ShopButton image


function ShopButton() {
  const handleClick = () => {
    console.log('ShopButton clicked');
  };

  return (
    <a href="/Shop" className="ShopButton" onClick={handleClick}>
      <img src={shopButtonImage} alt="Shop" /> {/* Render the image */}
    </a>
  );
}

export default ShopButton;


