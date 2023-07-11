import React from 'react';
import './Window.css';

function Window() {
  return (
    <div className="Window">
      <div className="Window--header">
      <a href="https://github.com/moveandgethurt" target="_blank" rel="noreferrer">
        <div className="Window--header--dot yellow"></div>
      </a>
      <a href="https://www.linkedin.com/in/kateryna-korotkova/" target="_blank" rel="noreferrer">
        <div className="Window--header--dot blue"></div>
      </a>
      </div>
      <div className="Window--main">
        <textarea className="Window--main--textarea"></textarea>
        <button className="Window--main--button">НАТИСНУТИ</button>
      </div>
      <div className="Window--answer">
        <div className="Window--answer-box">
          <p className="Window--the-answer">the answer will be here</p>
        </div>
      </div>
    </div>
  );
}

export default Window;