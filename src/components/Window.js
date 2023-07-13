import React from 'react';
import './Window.css';

export default function Window() {
  function returnSymbol(text) {
    function findUnique(str) {
      let unique = '';
      for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
          unique += str[i]
        }
      }
      return unique
    }

    text = text.split(' ')
    let uniqueStr = '';

    text.forEach((word) => {
      if (findUnique(word)) {
        uniqueStr += findUnique(word)[0]
      }
    })

    return findUnique(uniqueStr) 
            ? findUnique(uniqueStr)[0] 
            : 'No unique symbols found'
  }

  const [text, setText] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

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
      <form className="form--container">
        <textarea 
          rows={10} 
          className="Window--main--textarea" 
          placeholder='Enter your text...'
          value={text}
          onChange={handleText}>
        </textarea>
      </form>
      </div>
      <div className="Window--answer">
        <div className="Window--answer-box">
          <p className="Window--the-answer">{returnSymbol(text)}</p>
        </div>
      </div>
    </div>
  );
}