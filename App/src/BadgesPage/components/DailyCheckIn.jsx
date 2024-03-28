import { useState, useEffect } from 'react';
import { useGlobalContext } from "ADATeam8/App/src/BadgesPage/components/ClickCount.jsx";
import "ADATeam8/App/src/BadgesPage/components/activitybased.css";

const DailyCheckIn = () => {
  const { clickCount, setClickCount } = useGlobalContext();
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    setIsVisible(false);
    localStorage.setItem('lastButtonClick', JSON.stringify({ timestamp: Date.now(), clickCount: clickCount + 1 }));
  };

  useEffect(() => {
    const lastButtonClick = JSON.parse(localStorage.getItem('lastButtonClick'));
    if (lastButtonClick) {
      const twentyFourHours = 24 * 60 * 60 * 1000;
      const timeSinceLastClick = Date.now() - lastButtonClick.timestamp;
      if (timeSinceLastClick < twentyFourHours) {
        setIsVisible(false);
      } else {
        setClickCount(0);
      }
    }
  }, [clickCount]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(true);
      setClickCount(0);
    }, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {isVisible && (
        <div>
          <button className="button" onClick={handleClick}>Daily Check-In</button>
        </div>
      )}
    </>
  );
};

export default DailyCheckIn;