// QuizPage.js

import React from 'react';
import './QuizPage.css';
import ContinueButton from './ContinueButton';
import AnxietyButton from './AnxietyButton';
import DepressionButton from './DepressionButton';
import TimeManagementButton from './TimeManagementButton';
import CommunicationButton from './CommunicationButton';
import StudyingButton from './StudyingButton';
import OtherButton from './OtherButton';

/*App/src/QuizPage/quizPageButtons/AnxietyButton.js*/

function QuizPage() {
  return (
    <div className="QuizPage">


    
      {/* Content */}
      <div className="content">
        {/* Content inside */}
        <h1 className="heading">I need help with...</h1> {/* Apply CSS class 'heading' */}
        
        {/* Continue button */}
        <ContinueButton />  

        {/* Anxiety button */}
        <AnxietyButton />    

        {/* Depression button */}
        <DepressionButton/>      
        
        {/* TimeManagement button */}
        <TimeManagementButton/>        
       
        {/* Communication button */}
        <CommunicationButton/>    

        {/* Studying button */}
        <StudyingButton/>           

        {/* Other button */}
        <OtherButton/>  

      </div>
    </div>
  );
}

export default QuizPage;
