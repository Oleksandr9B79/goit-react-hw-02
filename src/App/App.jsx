import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  const localStorage = "currentState"; // localStorage key for current Feedback data

  const [holdStatus, setStatus] = useState(() => {
    const storageData = window.localStorage.getItem(localStorage); // Get current Feedback data
    return storageData // if there is some data in LocalStorage take as initial value
      ? JSON.parse(storageData)
      : { good: 0, neutral: 0, bad: 0 }; // else reset Feedback data
  });

  useEffect(() => {
    window.localStorage.setItem(localStorage, JSON.stringify(holdStatus)); // Save current Feedback data
  }, [holdStatus]);

  const updateFeedback = (feedbackType) => {
    setStatus((prevRating) => ({
      ...prevRating,
      [feedbackType]: prevRating[feedbackType] + 1, // increase current rating
    }));
  };

  const resetFeedback = () => {
    setStatus({ good: 0, neutral: 0, bad: 0 }); // reset Feedback data
  };

  const totalFeedback = holdStatus.good + holdStatus.neutral + holdStatus.bad;

  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {/* show feedback data if available some ratings */}
      {totalFeedback ? <Feedback {...holdStatus} /> : <Notification />} 
    </>
  );
}

export default App;
