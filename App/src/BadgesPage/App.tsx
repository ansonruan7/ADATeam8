//to run, type "npm run dev" in terminal!
import background from "./images/BackgroundADA.png";
import { GlobalProvider } from "./components/ClickCount.jsx";
import CommunityBased from "./components/CommunityBased";
import "./App.css";
import ActivityBased from "./components/ActivityBased";
import DailyCheckIn from "./components/DailyCheckIn.jsx";

export default function App() {
  return (
    <>
      <img className="backgroundIMG" src={background} alt="background" />
      <MyBadges />
    </>
  );
}

function MyBadges() {
  return (
    <>
      <div className="badges">
        <h1 className="title">My Badges</h1>
        <GlobalProvider>
          <DailyCheckIn />
          <ActivityBased />
        </GlobalProvider>
        <CommunityBased />
      </div>
    </>
  );
}
