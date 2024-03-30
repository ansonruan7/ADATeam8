// OtherButton.js
import React from 'react';
import './OtherButton.css'; // Import the CSS file for the button component
import otherImage from './quizPageimages/otherImage.png'; // Import the OtherButton image

function OtherButton() {
    const handleClick = () => {
        console.log('Other button clicked');
    };

    return (
        <a href="/OtherButton" className="OtherButton" onClick={handleClick}>
            <img src={otherImage} alt="OtherButton" /> {/* Render the image */}
            <span className="ButtonText">Other</span> {/* Render the text */}
        </a>
    );
}

export default OtherButton;
