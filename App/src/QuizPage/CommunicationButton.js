// CommunicationButton.js
import React from 'react';
import './CommunicationButton.css'; // Import the CSS file for the button component
import communicationImage from './quizPageimages/communicationImage.png'; // Import the CommunicationButton image

function CommunicationButton() {
    const handleClick = () => {
        console.log('Communication button clicked');
    };

    return (
        <a href="/CommunicationButton" className="CommunicationButton" onClick={handleClick}>
            <img src={communicationImage} alt="CommunicationButton" /> {/* Render the image */}
            <span className="ButtonText">Communication</span> {/* Render the text */}
        </a>
    );
}

export default CommunicationButton;
