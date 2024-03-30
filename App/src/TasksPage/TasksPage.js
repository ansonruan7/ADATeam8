import React from 'react';
import './TasksPage.css'; 

const TasksPage = () => {
  return (
    <div className="tasks-container">
      <h1 style={{ fontFamily: 'IBM Plex Serif, sans-serif' }}>Tasks</h1>

      <div className="task-section">
        <h2 style={{ fontFamily: 'IBM Plex Serif, sans-serif' }}>Daily</h2>
        <select className="task-dropdown">
          <option value="item1">Task 1</option>
          <option value="item2">Task 2</option>
          <option value="item3">Task 3</option>
        </select>
      </div>

      <div className="task-section">
      <h2 style={{ fontFamily: 'IBM Plex Serif, sans-serif' }}>Weekly</h2>
        <select className="task-dropdown">
          <option value="item1">Task 1</option>
          <option value="item2">Task 2</option>
          <option value="item3">Task 3</option>
        </select>
      </div>

      <div className="task-section">
      <h2 style={{ fontFamily: 'IBM Plex Serif, sans-serif' }}>Monthly</h2>
        <select className="task-dropdown">
          <option value="item1">Task 1</option>
          <option value="item2">Task 2</option>
          <option value="item3">Task 3</option>
        </select>
      </div>
      <a href='/home'>
      <button className="continue-button">
        <span className="button-icon">🌱</span> Continue
      </button>
      </a>
    </div>
  );
};

export default TasksPage;
