import React, { useState } from 'react';
import './QuizPage2.css';
import ContinueButton from '../QuizPage/ContinueButton';
import AddButton from './AddButton';

function QuizPage2() {
  
  const [quizAnswer, setQuizAnswer] = useState("");

  const handleInputChange = (event) => {
    setQuizAnswer(event.target.value);
  };

  const handleSubmit = () => {
    console.log("User's answer:", quizAnswer);
  };

  return (
    <div className="QuizPage2">
      <div className="content">
        <h1 className="heading">I take care of myself by...</h1>
        <input 
          type="text" 
          placeholder="Type your answer." 
          value={quizAnswer} 
          onChange={handleInputChange} 
        />
        <ContinueButton />  
        <AddButton /> {/* Render the AddButton component */}
      </div>
    </div>
  );
}

export default QuizPage2;
