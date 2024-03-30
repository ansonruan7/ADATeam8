import React from 'react';
import './HomePage.css'; // Make sure to have your CSS file named App.css

function HomePage() {
  return (
    <div className="app">
      <div className="header">
        <h1>Welcome Back!</h1>
        <div className="profile-icon" />
      </div>
      <div className="buttons">
        <a href='/tasks'><button className="button">My Tasks</button></a>
        <a href=''><button className="button">Daily Streak</button></a>
        <a href='/badges'><button className="button">Badges</button></a>
        <a href='/coral'><button className="button">Coral</button></a>
      </div>
      <div className="footer">
        <div className="badge-icon"></div>
        <div className="trophy-icon"></div>
        <div className="coral-icon"></div>
      </div>
    </div>
  );
}

export default HomePage;
