// CoralPage.js

import React from 'react';
import './CoralPage.css';
import coralPageBackground from './images/coralPageBackground.jpeg';
import ShopButton from './NavigationButtons/ShopButton';
import LeaderboardButton from './NavigationButtons/LeaderboardButton';
import CoralButton from './NavigationButtons/CoralButton';
import ShopButtonOnPage from './ShopButtonOnPage'; // Import the ShopButtonOnPage component

function CoralPage() {
  return (
    <div className="CoralPage">
      {/* Navigation */}
      <nav className="navigation">
        <ShopButton link="/shop" image="shopButtonImage.png" alt="Shop" />
        <LeaderboardButton link="/leaderboard" image="leaderboardButtonImage.png" alt="Leaderboard" />
        <CoralButton link="/coral" image="coralButtonImage.png" alt="Coral" />
      </nav>

      {/* ShopButtonOnPage rendered directly within CoralPage */}
      <ShopButtonOnPage />

      {/* Content */}
      <div className="background-image" style={{ backgroundImage: `url(${coralPageBackground})` }}>
        <div className="content">
          {/* Content inside background image */}
        </div>
      </div>
    </div>
  );
}

export default CoralPage;
