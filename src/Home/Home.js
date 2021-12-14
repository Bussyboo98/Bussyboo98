import React, { useState, useEffect, useCallback } from 'react';
import "./Home.css";
import img1 from './Images/Ball.gif';
import img2 from './Images/Bird.png';
import img3 from './Images/Cartoon.png';
import img4 from './Images/CSS3.png';
import img5 from './Images/Galaxy1.png';
import img6 from './Images/Galaxy2.png';
import img7 from './Images/Galaxy3.png';
import img8 from './Images/Galaxy4.png';
import img9 from './Images/HTML5.png';
import img10 from './Images/Rocket.png';
import img11 from './Images/Shooting_Star.png';
import img12 from './Images/Colors.png';
import img13 from './Images/Image.png';
import img14 from './Images/Pixel.png';
import img15 from './Images/Tilt.png';
import img16 from './Images/Calculator.png';
import img17 from './Images/Galaxy5.webp';
import img18 from './Images/Galaxy6.webp';
import img19 from './Images/Galaxy7.webp';

function Home({func1, func2, func3, func4, func5, func6, func7}) {
  let width = window.innerHeight;
  
  return (
    <div className="home-container">
      
      <div className="home-slide-1 home-slide">
        <img src={img10} className="home-rocket"/>
        <img src={img10} className="home-rocket"/>
        <img src={img10} className="home-rocket"/>
        <img src={img10} className="home-rocket"/>
        <img src={img5} className="home-background" /> 
        <p>Hola! My name is Nnamdi</p>
        <p className="home-intro">and I'm a Junior Designer & Web Developer from Nigeria and this is my portfolio website.</p>
      </div>
      
      <div className="home-slide-2 home-slide">
         <img src={img6} />
         <img src={img11} className="home-star"/>
         <div>
            <p>I design websites, logos, banners, UI/UX development for mobile apps, responsive websites etc. I have been coding and learning graphics design for a few months now and my key strengths are currently in working with HTML, CSS, JavaScript, React and Figma (for UI/UX). Other technologies and softwares I can work with are Adobe Illustrator, Vectary 3D & Gatsby</p>
         </div>
      </div>
      
      <div className="home-slide-3 home-slide">
        <img src={img6} className="home-background" />
        <p>Core Technologies</p>
        <div>
          <img src={img4} className="home-html-css-js" alt="HTML/CSS/JavaScript"/>
        </div>
        <div className="home-react-gatsby">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="50px" height="50px" className="react-svg"><circle cx="78" cy="14" r="1" fill="#f1bc19"/><circle cx="50" cy="50" r="38" fill="#f9dbd2"/><circle cx="84" cy="16" r="4" fill="#f1bc19"/><circle cx="14" cy="26" r="2" fill="#ee3e54"/><circle cx="78" cy="77" r="2" fill="#fbcd59"/><circle cx="17" cy="78" r="4" fill="#fbcd59"/><circle cx="24" cy="83" r="2" fill="#ee3e54"/><circle cx="66.5" cy="78.5" r="2.5" fill="#fff"/><circle cx="16" cy="48" r="1" fill="#fff"/><circle cx="86" cy="31" r="1" fill="#f1bc19"/><circle cx="80" cy="66" r="2" fill="#fff"/><path fill="#77cbd2" d="M50,63c-16,0-28-5.6-28-13s12-13,28-13c16,0,28,5.6,28,13S66,63,50,63z M50,40.9c-14.3,0-24.3,4.8-24.3,9.1 s10,9.1,24.3,9.1s24.3-4.8,24.3-9.1S64.3,40.9,50,40.9z"/><path fill="#472b29" d="M50,63.7c-16.4,0-28.7-5.9-28.7-13.7S33.6,36.3,50,36.3c16.4,0,28.7,5.9,28.7,13.7S66.4,63.7,50,63.7z M50,37.7C34.4,37.7,22.7,43,22.7,50S34.4,62.3,50,62.3S77.3,57,77.3,50S65.6,37.7,50,37.7z M50,59.8c-14.9,0-25-5.1-25-9.8 s10-9.8,25-9.8s25,5.1,25,9.8S64.9,59.8,50,59.8z M50,41.6c-14.6,0-23.6,4.9-23.6,8.4s9,8.4,23.6,8.4s23.6-4.9,23.6-8.4 S64.6,41.6,50,41.6z"/><path fill="#77cbd2" d="M39.5,75.2c-1.3,0-2.4-0.3-3.4-0.9c-6.1-3.6-4.8-16.7,3.1-30.6c5.5-9.7,12.9-17,18.9-18.6 c2.2-0.6,4.2-0.4,5.8,0.5c6.1,3.6,4.8,16.7-3.1,30.6c-5.5,9.7-12.9,17-18.9,18.6C41.1,75.1,40.3,75.2,39.5,75.2z M60.5,28.5 c-0.4,0-0.9,0.1-1.5,0.2c-4.9,1.3-11.6,8.1-16.6,16.8c-6.9,12.1-8,23.4-4.5,25.5c0.7,0.4,1.7,0.5,3,0.2c4.9-1.3,11.6-8.1,16.6-16.8 c6.9-12.1,8-23.4,4.5-25.5C61.6,28.7,61.1,28.5,60.5,28.5z"/><path fill="#472b29" d="M39.5,75.9c-1.4,0-2.7-0.3-3.8-1c-6.5-3.8-5.3-17.4,2.8-31.6c5.6-9.9,13.2-17.3,19.3-18.9 c2.4-0.6,4.6-0.4,6.4,0.6c6.5,3.8,5.3,17.4-2.8,31.6c-5.6,9.9-13.2,17.3-19.3,18.9C41.2,75.8,40.4,75.9,39.5,75.9z M60.5,25.5 c-0.7,0-1.5,0.1-2.2,0.3c-5.8,1.5-13,8.7-18.4,18.2c-7.6,13.3-9,26.3-3.3,29.7c1.4,0.8,3.3,1,5.3,0.5c5.8-1.5,13-8.7,18.4-18.2 c7.6-13.3,9.1-26.3,3.3-29.6C62.6,25.8,61.6,25.5,60.5,25.5z M39.5,72.2c-0.7,0-1.3-0.2-1.9-0.5c-4.4-2.5-2.4-14.9,4.2-26.5 c5.1-8.9,11.9-15.8,17-17.1c1.4-0.4,2.6-0.3,3.5,0.2c4.4,2.5,2.4,14.9-4.2,26.5c-5.1,8.9-11.9,15.8-17,17.1 C40.6,72.1,40,72.2,39.5,72.2z M60.5,29.2c-0.4,0-0.8,0.1-1.3,0.2c-4.8,1.3-11.3,7.9-16.2,16.5c-7.1,12.5-7.6,22.9-4.7,24.6 c0.6,0.3,1.4,0.4,2.4,0.1c4.8-1.3,11.3-7.9,16.2-16.5c7.1-12.5,7.6-22.9,4.7-24.6C61.3,29.3,60.9,29.2,60.5,29.2z"/><path fill="#77cbd2" d="M60.5,75.2c-0.8,0-1.6-0.1-2.4-0.3c-5.9-1.6-13.3-8.9-18.9-18.6c-7.9-13.9-9.2-27-3.1-30.6	c1.6-0.9,3.6-1.1,5.8-0.5c5.9,1.6,13.3,8.9,18.9,18.6c7.9,13.9,9.2,27,3.1,30.6C62.9,74.9,61.7,75.2,60.5,75.2z M39.5,28.5	c-0.6,0-1.1,0.1-1.5,0.4c-3.6,2.1-2.4,13.5,4.5,25.5c5,8.7,11.6,15.5,16.6,16.8c1.2,0.3,2.2,0.3,3-0.2c3.6-2.1,2.4-13.5-4.5-25.5	c-5-8.7-11.6-15.5-16.6-16.8C40.4,28.6,40,28.5,39.5,28.5z"/><path fill="#472b29" d="M60.5,75.9c-0.8,0-1.7-0.1-2.6-0.4c-6.1-1.6-13.7-9.1-19.3-18.9c-8.1-14.2-9.3-27.8-2.8-31.6	c1.8-1,4-1.3,6.4-0.6c6.1,1.6,13.7,9.1,19.3,18.9c8.1,14.2,9.3,27.8,2.8,31.6C63.1,75.6,61.9,75.9,60.5,75.9z M39.5,25.5	c-1.1,0-2.2,0.3-3.1,0.8c-5.7,3.3-4.2,16.4,3.3,29.6c5.4,9.5,12.7,16.7,18.4,18.2c2,0.5,3.8,0.4,5.3-0.5c5.7-3.3,4.2-16.4-3.3-29.7	c-5.4-9.5-12.7-16.7-18.4-18.2C41,25.6,40.2,25.5,39.5,25.5z M60.5,72.2c-0.5,0-1-0.1-1.6-0.2c-5.1-1.4-11.9-8.3-17-17.1	c-6.6-11.6-8.6-23.9-4.2-26.5c0.9-0.5,2.1-0.6,3.5-0.2c5.1,1.4,11.9,8.3,17,17.1c6.6,11.6,8.6,23.9,4.2,26.5	C61.8,72,61.2,72.2,60.5,72.2z M39.5,29.2c-0.5,0-0.9,0.1-1.2,0.3c-2.8,1.7-2.4,12.1,4.7,24.6c4.9,8.6,11.4,15.2,16.2,16.5	c1,0.3,1.9,0.2,2.4-0.1c2.8-1.7,2.4-12.1-4.7-24.6C52,37.3,45.6,30.7,40.8,29.4C40.3,29.3,39.9,29.2,39.5,29.2z"/><g><circle cx="50" cy="50" r="5.5" fill="#77cbd2"/><path fill="#472b29" d="M50,56c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S53.3,56,50,56z M50,45c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5 S52.8,45,50,45z"/></g><g><path fill="#472b29" d="M50,53.8c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3c0.4,0,0.7-0.1,1.1-0.2c0.5-0.2,0.9-0.5,1.3-0.8 c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4c-0.4,0.4-0.9,0.8-1.5,1C50.9,53.7,50.4,53.8,50,53.8z"/></g><g><path fill="#472b29" d="M53.1,51.8c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.1-0.3c0.2-0.4,0.3-0.9,0.3-1.4c0-1.3-0.7-2.4-1.8-2.9 c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1c1.3,0.6,2.1,1.9,2.1,3.4c0,0.6-0.1,1.1-0.4,1.7C53.3,51.7,53.2,51.8,53.1,51.8z"/></g><g><path fill="#472b29" d="M48.1,47.3c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1,0-0.3,0.1-0.3c0.6-0.4,1.3-0.6,2-0.6c0.1,0,0.3,0.1,0.3,0.3 s-0.1,0.3-0.3,0.3c-0.6,0-1.2,0.2-1.8,0.5C48.2,47.3,48.2,47.3,48.1,47.3z"/></g><g><path fill="#472b29" d="M53.5,36.8c-0.1,0-0.1,0-0.2-0.1c-3.7-4.6-7.2-7.6-10.4-8.9c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1 c3.3,1.4,6.8,4.5,10.6,9.1c0.1,0.1,0.1,0.3,0,0.4C53.6,36.7,53.6,36.8,53.5,36.8z"/></g><g><path fill="#472b29" d="M36.5,27.8c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c0.3-0.2,1.9-1.3,4.8-0.7c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.2,0.2-0.3,0.2c-2.7-0.6-4.1,0.4-4.3,0.6C36.6,27.7,36.6,27.8,36.5,27.8z"/></g><g><path fill="#472b29" d="M73.3,55.5c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c2.3-1.9,3.2-4.1,2.7-6.6c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,2.6-0.4,5.1-2.9,7.1C73.4,55.5,73.3,55.5,73.3,55.5z"/></g><g><path fill="#472b29" d="M69,57.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.3,0.2-0.3c0,0,1.4-0.5,2.9-1.4c0.1-0.1,0.3,0,0.3,0.1 c0.1,0.1,0,0.3-0.1,0.3C70.5,57.4,69.1,57.8,69,57.9C69,57.9,69,57.9,69,57.9z"/></g><g><path fill="#472b29" d="M39.1,73.6C39.1,73.6,39.1,73.6,39.1,73.6c-2.7-0.1-4.4-2.1-5-5.7c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,3.4,2.1,5.2,4.5,5.3c0.1,0,0.2,0.1,0.2,0.3C39.4,73.5,39.3,73.6,39.1,73.6z"/></g><g><path fill="#472b29" d="M34.1,65.7c-0.1,0-0.2-0.1-0.3-0.2c-0.1-2.3,0.2-4.3,0.3-4.6c0-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.4,2.1-0.3,4.4C34.4,65.6,34.3,65.7,34.1,65.7C34.1,65.7,34.1,65.7,34.1,65.7z"/></g></svg>
          <svg width="256px" height="256px" viewBox="0 0 256 256" className="gatsby-svg">
            <g>
              <path d="M128,0 C57.3075981,0 0,57.307374 0,128 C0,198.69285 57.3078221,256 128,256 C198.69285,256 256,198.692626 256,128 C256,57.307374 198.69285,0 128,0 Z M27.503973,129.334313 L126.665463,228.496027 C72.2144512,227.786305 28.2134711,183.785325 27.503973,129.334313 Z M150.496265,225.983324 L30.0166761,105.503735 C40.2328216,60.8232766 80.2223482,27.4871709 128,27.4871709 C161.397489,27.4871709 190.984927,43.7800881 209.262736,68.8464075 L195.346089,81.125855 C180.519662,59.8637627 155.886614,45.9486835 128,45.9486835 C92.4948508,45.9486835 62.259523,68.5011796 50.8311596,100.061636 L155.938588,205.169064 C181.463942,195.925651 201.095107,174.378594 207.669894,147.692325 L164.102633,147.692325 L164.102633,128.000224 L210.051317,128.000224 L210.051317,127.999776 L228.512829,127.999776 L228.512829,128 C228.512829,175.777652 195.176947,215.767178 150.496265,225.983324 Z" fill="#744C9E" fill-rule="nonzero"></path>
              </g>
            </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" className="figma-svg"><path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"/><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"/><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"/><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"/><circle cx="32" cy="24" r="7" fill="#29b6f6"/></svg>
        </div>
      </div>
      
      <div className="home-slide-4 home-slide">
        <img src={img6} className="home-background"/>
        <img src={img5} className="home-background" />
        <p className="home-slide-4-intro">Here are some beginner projects I have done</p>
        <div className="home-projects">
          <a onClick={func1} >
            <img src={img12} alt="Background Colour Change"/>
            <p>Background Colour Change</p>
          </a>
          <a onClick={func2}>
            <img src={img13} alt="Image Carousel"/>
            <p>Image Carousel</p>
          </a>
          <a onClick={func3}>
            <img src={img3} alt="Reminder"/>
            <p>Todo List</p>
          </a>
          <a onClick={func4}>
            <img src={img14} alt="JavaScript Scroll"/>
            <p>JavaScript Background Scroll Effect</p>
          </a>
          <a onClick={func5}>
            <img src={img15} alt="JavaScript tilt"/>
            <p>Tilting with JavaScript</p>
          </a>
          <a onClick={func7}>
            <img src={img16} alt="Calculator"/>
            <p>Calculator</p>
          </a>
        </div>
      </div>
      
      <div className="home-slide-5 home-slide">
        <img src={img19} className="home-slide-5-background" />
        <img src={img5} className="home-background" />
        <p className="home-contact">Contacts</p>
        <p className="home-phone">Phone Line: +234-9071024709</p>
        <p className="home-email">Email: nnamdijonathan04@gmail.com</p>
      </div>
    </div>
    )
}

export default Home
