// TimeManagementButton.js

import React from 'react';
import './TimeManagementButton.css'; // Import the CSS file for the button component
import timeManagementImage from './quizPageimages/timeImage.png'; // Import the TimeManagementButton image

function TimeManagementButton() {
    const handleClick = () => {
        console.log('Time Management button clicked');
    };

    return (
        <a href="/TimeManagementButton" className="TimeManagementButton" onClick={handleClick}>
            <img src={timeManagementImage} alt="TimeManagementButton" /> {/* Render the image */}
            <span>Time Management</span> {/* Render the text */}
        </a>
    );
}

export default TimeManagementButton;
