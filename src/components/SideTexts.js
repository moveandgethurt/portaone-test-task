import React from 'react';
import './SideTexts.css';

function SideTexts() {
  return (
    <div className="SideTexts">
      <p>програма приймає текст і знаходить в кожному слові найперший символ, який не повторюється</p>
      <p>і з цього набору символів вибирає перший унікальний символ і повертає його</p>
    </div>
  );
}

export default SideTexts;