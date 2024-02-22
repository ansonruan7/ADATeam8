
// ShopButtonOnPage.js
import React from 'react';
import './ShopButtonOnPage.css'; // Import the CSS file for the button component
import shopButtonImageOnPage from './images/shopButtonImageOnPage.png'; // Import the ShopButton image


function ShopButtonOnPage() {
  const handleClick = () => {
    console.log('ShopButton on Page clicked');
  };

  return (
    <a href="/ShopButtonOnPage" className="ShopButtonOnPage" onClick={handleClick}>
      <img src={shopButtonImageOnPage} alt="ShopButtonOnPage" /> {/* Render the image */}
      <span className="ButtonText">Shop</span> {/* Render the text */}
    </a>
  );
}

export default ShopButtonOnPage;
