/*App Index.js*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CoralPage from './CoralPage/CoralPage.js';
import QuizPage from './QuizPage/QuizPage.js';
import QuizPage2 from './QuizPage2/QuizPage2.js';

import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizPage2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
