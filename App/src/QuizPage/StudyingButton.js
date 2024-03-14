// StudyingButton.js
import React from 'react';
import './StudyingButton.css'; // Import the CSS file for the button component
import studyingImage from './quizPageimages/studyingImage.png'; // Import the StudyingButton image

function StudyingButton() {
    const handleClick = () => {
        console.log('Studying button clicked');
    };

    return (
        <a href="/StudyingButton" className="StudyingButton" onClick={handleClick}>
            <img src={studyingImage} alt="StudyingButton" /> {/* Render the image */}
            <span className="ButtonText">Studying</span> {/* Render the text */}
        </a>
    );
}

export default StudyingButton;
