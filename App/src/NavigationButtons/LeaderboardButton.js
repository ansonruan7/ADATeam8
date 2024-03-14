// LeaderboardButton.js

import React from 'react';
import './LeaderboardButton.css'; // Import the CSS file for the button component
import leaderboardButtonImage from './buttonImages/LeaderboardButtonImage.png'; // Import the LeaderboardButton image

function LeaderboardButton() {
  const handleClick = () => {
    console.log('Leaderboard clicked');
  };

  return (
    <a href="/leaderboard" className="LeaderboardButton" onClick={handleClick}>
      <img src={leaderboardButtonImage} alt="Leaderboard" /> {/* Render the image */}
    </a>
  );
}

export default LeaderboardButton;


