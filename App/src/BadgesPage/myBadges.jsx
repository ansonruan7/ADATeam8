import React from "react";
import background from "./images/BackgroundADA.png";
import { GlobalProvider } from "./components/ClickCount.jsx";
import CommunityBased from "./components/CommunityBased";
import "./App.css";
import ActivityBased from "./components/ActivityBased";
import DailyCheckIn from "./components/DailyCheckIn.jsx";

const myBadges = () => {
    return(
        <>
        <img className="backgroundIMG" src={background} alt="background" />
        <div className="badges">
            <h1 className="title">My Badges</h1>
            <GlobalProvider/>
            <DailyCheckIn/>
            <ActivityBased/>
            <CommunityBased />
        </div>
        </>
    );
}
export default myBadges;