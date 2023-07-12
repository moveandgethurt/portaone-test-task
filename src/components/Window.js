import React from 'react';
import './Window.css';

function Window() {
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
    // console.log(`splitted text - [${text}]`)

    let uniqueStr = '';

    text.forEach((word) => {
      if (findUnique(word)) {
        uniqueStr += findUnique(word)[0]
      }
    })
    // console.log('str w/ unique symbols - ' + uniqueStr)

    return findUnique(uniqueStr) 
            ? findUnique(uniqueStr)[0] 
            : 'No unique symbols found'
  }

  console.log('test task answer - ' + returnSymbol(`The Tao gave birth to machine language.  Machine language gave birth
  to the assembler.
  The assembler gave birth to the compiler.  Now there are ten thousand
  languages.
  Each language has its purpose, however humble.  Each language
  expresses the Yin and Yang of software.  Each language has its place within
  the Tao.
  But do not program in COBOL if you can avoid it.
          -- Geoffrey James, "The Tao of Programming"`))
  
  console.log('regular answer - ' + returnSymbol(`aaa bbc`))
  console.log('empty string - ' + returnSymbol(``))
  console.log('string w/ a space - ' + returnSymbol(` `))
  console.log('no unique symbols - ' + returnSymbol(`aaa bbb`))


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
        <textarea rows={10} className="Window--main--textarea"></textarea>
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