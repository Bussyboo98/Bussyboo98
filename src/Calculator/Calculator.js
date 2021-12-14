import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const maxheight = window.innerHeight;
  const maxwidth = window.innerWidth;
  let cal_width;
  let cal_height;
  
  if (maxwidth > 400) {
    cal_width = '400px';
  } else {
    cal_width = maxwidth;
  }
  if (maxheight > 700) {
    cal_height = '700px';
  } else {
    cal_height = maxheight;
  }
  
  const [values, setValues] = useState([]);
  const [display, setDisplay] = useState([]);
  const [answer, setAnswer] = useState('0');
  const [equBtnClicked, setEquBtnClicked] = useState(false);
  
  // Clear All Values
  const clear = () => {
    setValues([]);
    setDisplay([]);
    setAnswer('0');
    setEquBtnClicked(false);
  }
  // Clear Unit Value
  const backspace = () => {
    values.pop();
    display.pop();
    setValues([...values]);
    setDisplay([...display]);
    setEquBtnClicked(false);
  }
  // Get Clicked Value
  const numberKey = (e) => {
    let displayVal = e.innerText;
    let val = e.value;
    let lastValue = values[(values.length - 1)];
    
    if((lastValue === "." && val === ".") ||
       (lastValue === "+" && val === "+") ||
       (lastValue === "/" && val === "/") ||
       (lastValue === "*" && val === "*")) {
      displayVal = "";
      val = "";
      values.pop();
      display.pop();
    }
    
 /*   if ((values[(values.length -1)] === ")") && artKeys === false) {
      values.length = 0;
      display.length = 0;
      setValues([...values, val]);
      setDisplay([...display, displayVal]);
      setEquBtnClicked(false);
    } else {
        setValues([...values, val]);
        setDisplay([...display, displayVal]);
    } */
    
     setValues([...values, val]);
     setDisplay([...display, displayVal]);
  }
  
  let equalKey = () => {
   
    let figures = values.join("");
    
    if ((figures === "") && (display === "")) {
      setAnswer("0");
      setEquBtnClicked(false);
    } else {
      values.unshift("(");
      values.push(")")
      display.unshift("(");
      display.push(")");
      let equalToValue = eval(figures);
      setAnswer(equalToValue);
      setEquBtnClicked(false);
    }
  }
  
  
  return(
    <div className='main' style={{
     maxWidth: maxwidth,
      height: maxheight
    }}>
      <div className='calculator' 
      style={{
       width: cal_width,
       height: cal_height
      }}>
        <div className="display">
          <div className="values">{display}</div>
          <div className="answer">{answer}</div>
        </div>
        { /* calculator menu start*/ }
        <div className="menu">
          <div className="menubtn">
           <button className="innmenubtn setting">
           &#9967;</button>
          </div>
          <div className="menubtn">
           <button className="innmenubtn history">
           &#9778;
           </button>
          </div>
          <div className="menubtn">
           <button className="innmenubtn color">
           &#9775;
           </button>
          </div>
        </div>
        { /* calculator menu end*/ }
        { /* calculator buttons start */} 
        <div className='buttons'>
          <div className='btn-container cancelbtn'>
            <button 
              className='btn inncancelbtn'
              onClick={() => clear()}>C</button>
          </div>
          <div className='btn-container spcbtn'>
            <button 
              className='btn innspcbtn'
              onClick={() => backspace()}>MC</button>
          </div>
          <div className='btn-container spcbtn'>
            <button className='btn innspcbtn'>%</button>
          </div>
          <div className='btn-container ath-btn'>
            <button className='btn a-btn' value="/" onClick={(e) => numberKey(e.target)}>÷</button>
          </div>
          <div className='btn-container'>
            <button 
              className='btn' value="7"
              onClick={(e) => numberKey(e.target)}>7</button>
          </div>
          <div className='btn-container'>
            <button className='btn' value="8" onClick={(e) => numberKey(e.target)}>8</button>
          </div>
          <div className='btn-container'>
            <button className='btn' value="9" onClick={(e) => numberKey(e.target)}>9</button>
          </div>
          <div className='btn-container ath-btn'>
            <button className='btn a-btn' value="*" onClick={(e) => numberKey(e.target)}>×</button>
          </div>
          <div className='btn-container'>
            <button className='btn' value="4" onClick={(e) => numberKey(e.target)}>4</button>
          </div>
          <div className='btn-container'>
            <button className='btn' value="5" onClick={(e) => numberKey(e.target)}>5</button>
          </div>
          <div className='btn-container'>
            <button className='btn' value="6" onClick={(e) => numberKey(e.target)}>6</button>
          </div>
          <div className='btn-container ath-btn'>
            <button className='btn a-btn' value="-"  onClick={(e) => numberKey(e.target)}>-</button>
          </div>
          <div className='btn-container'>
            <button className='btn' value="1" onClick={(e) => numberKey(e.target)}>1</button>
          </div>
          <div className='btn-container'>
            <button className='btn' value="2" onClick={(e) => numberKey(e.target)}>2</button>
          </div>
          <div className='btn-container'>
            <button className='btn' value="3" onClick={(e) => numberKey(e.target)}>3</button>
          </div>
          <div className='btn-container ath-btn'>
            <button className='btn a-btn' value="+" onClick={(e) => numberKey(e.target)}>+</button>
          </div>
          <div className='btn-container zero-btn'>
            <button className='btn innzero-btn' value="0" onClick={(e) => numberKey(e.target)}>0</button>
          </div>
          <div className='btn-container'>
            <button className='btn number' value="." onClick={(e) => numberKey(e.target)}>.</button>
          </div>
          <div className='btn-container equal-btn'>
            <button className='btn equ-btn' onClick={(equalKey)}>=</button>
          </div>
      </div>
     { /* calculator buttons end */} 
     </div>
    </div>
    )
}

export default Calculator;
