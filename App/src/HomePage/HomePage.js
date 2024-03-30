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
        <button className="button my-tasks">My Tasks</button>
        <button className="button daily-streak">Daily Streak</button>
        <button className="button badges">Badges</button>
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
