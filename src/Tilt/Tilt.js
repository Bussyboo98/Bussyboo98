import React, { useState, useEffect} from 'react';
import './Tilt.css';

function Tilt() {
  
  const [absolute, setAbsolute] = useState(0);
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);
  
  const handleOrientation = (e) => {
    setAlpha(e.alpha.toFixed(0));
    setBeta(e.beta.toFixed(0));
    setGamma(e.gamma);
  }
  
  let screenWidth = window.innerWidth;
  let moveableWidth = screenWidth - 30;
  
  let screenHeight = window.innerHeight;
  let moveableHeight = screenHeight - 30;
  
  let y_value = beta;
  if (beta < 0) {
    y_value = 0;
  } else if (beta > 50) {
    y_value = 50;
  }
  
  let x_value = gamma;
  
  if (gamma < -20) {
    x_value = -20;
  } else if (gamma > 20) {
    x_value = 20;
  }
  
  let y = y_value * 2 + "%";
  let x = ((x_value ** 2) / 400) * 100 + '%';
   
  window.addEventListener("deviceorientation", handleOrientation, true);
  
return(
  <div className="tilt-container" style={{
    height: screenHeight,
    maxWidth: window.innerWidth
  }}>
    <div className='tilt-object' style={{
      top: y,
      left: x
    }}>
       <div>
       </div>
    </div>
    <h1 className='tilt-text'>Tilt your phone to move the glowing ball</h1> 
    <h1>Beta Value (Y): {y_value}</h1> 
    <h1>Gamma Value (x): {x_value.toFixed(0)}</h1> 
  </div>
  )
}

export default Tilt;