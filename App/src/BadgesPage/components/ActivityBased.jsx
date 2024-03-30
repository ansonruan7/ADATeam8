//import badgesData from './badges.json';import React from 'react';
import { useGlobalContext } from "./ClickCount";
import React, { useState, useEffect } from "react";
import "./activitybased.css";
import threeDay from "../images/3-day streak.png";
import fiveDay from "../images/5-day streak.png";
import threeStreak from "../images/3-streak.png";
import fiveStreak from "../images/5-streak.png";

let ActivityBased = () => {
  // Using the global context hook to access clickCount and setClickCount
  const { clickCount, setClickCount } = useGlobalContext();
  const [hasReachedThree, setHasReachedThree] = useState(false);
  const [hasReachedFive, setHasReachedFive] = useState(false);

  useEffect(() => {
    // Check if clickCount has reached at least 3
    if (clickCount >= 3) {
      setHasReachedThree(true);
    } else {
      setHasReachedThree(false);
    }
    if (clickCount >= 5) {
      setHasReachedFive(true);
    } else {
      setHasReachedFive(false);
    }
  }, [clickCount]);

  // Reset clickCount after 24 hours
  useEffect(() => {
    const lastButtonClick = JSON.parse(
      localStorage.getItem("lastButtonClick") || "{}"
    );
    if (lastButtonClick) {
      const twentyFourHours = 24 * 60 * 60 * 1000;
      const timeSinceLastClick = Date.now() - lastButtonClick.timestamp;
      if (timeSinceLastClick >= twentyFourHours) {
        setClickCount(0);
      }
    }
  }, [setClickCount]);

  return (
    <div className="container">
      <h3 className="heading">Activity Based</h3>
      {hasReachedThree ? (
        <img className="threeStreak" src={threeStreak} alt="threeStreak" />
      ) : (
        <img className="threeStreak" src={threeDay} alt="threeDay" />
      )}
      {hasReachedFive ? (
        <img className="fiveStreak" src={fiveStreak} alt="fiveStreak" />
      ) : (
        <img className="fiveStreak" src={fiveDay} alt="fiveDay" />
      )}
    </div>
  );
}

export default ActivityBased;
