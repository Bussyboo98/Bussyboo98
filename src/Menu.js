import React, { useState } from 'react';
import './Menu.css';

function Menu({col, func1, func2, func3, func4, func5, func6, func7}) {
  const [displayStyle, setDisplayStyle] = useState("none");
  let menuListDisplay = () => {
    (displayStyle == "none") ? setDisplayStyle("block") : setDisplayStyle("none");
  }
  return(
    <>
      <div className="menu-container">
        <div className="home-button" onClick={() => {func6(); setDisplayStyle("none")}} style={{color: col}}>Home</div>
        <div className="menu-button" onClick={() => menuListDisplay()}></div>
      </div>
      <div className="menu-list" style={{display: displayStyle}}>
          <div className="menu-cancel-button" onClick={menuListDisplay}><p>×</p></div>
          <div onClick={() => {func1(); menuListDisplay();}}>Background Color Change</div>
          <div onClick={() => {func2(); menuListDisplay();}}>Image Carousel</div>
          <div onClick={() => {func3(); menuListDisplay();}}>Todo List</div>
          <div onClick={() => {func4(); menuListDisplay();}}>Pixel Experience</div>
          <div onClick={() => {func5(); menuListDisplay();}}>Tilting with JavaScript</div>
          <div onClick={() => {func7(); menuListDisplay();}}>Calculator</div>
      </div> 
    </>
    )
}

export default Menu;