import React, { useState, useRef } from 'react';
import "./PixelExperience.css";
import Image from './PixelImageComp';
import PixelIntro from './PixelIntroComp';
import PixelQuote from './PixelQuoteComp';
import PixelVideo from './PixelVideoComp';
import '../Menu.css';

import img1 from './PixelImages/Pixel1.jpeg';
import img2 from './PixelImages/Pixel2.jpeg';
import img3 from './PixelImages/Pixel3.jpeg';
import img4 from './PixelImages/Pixel4.jpeg';
import img5 from './PixelImages/Pixel5.jpeg';
import img6 from './PixelImages/Pixel6.jpeg';
import img7 from './PixelImages/Pixel7.gif';
import img8 from './PixelImages/Pixel8.png';
import img9 from './PixelImages/Pixel9.jpeg';
import img10 from './PixelImages/Pixel10.jpeg';
import img11 from './PixelImages/Pixel11.jpeg';
import img12 from './PixelImages/Pixel12.png';
import img13 from './PixelImages/Pixel13.jpg';
import img14 from './PixelImages/Pixel14.jpg';
import img15 from './PixelImages/Pixel15.jpg';
import img16 from './PixelImages/Pixel16.jpg';
import img17 from './PixelImages/Pixel17.jpg';
import img18 from './PixelImages/Pixel18.webp';
import img19 from './PixelImages/RickOsterloh.png';
import img20 from './PixelImages/IsabelleOlsson.png';
import img21 from './PixelImages/SabrinaEllis.png';
import img22 from './PixelImages/Brian.png';
import vid1 from './PixelVideos/Video1.mp4';
import vid2 from './PixelVideos/Video2.mp4';
import vid3 from './PixelVideos/Video3.mp4';
import vid4 from './PixelVideos/Video4.mp4';
import vid5 from './PixelVideos/Video5.mp4';
import vid6 from './PixelVideos/Video6.mp4';

function PixelExperience({func1, func2, func3, func4, func5, func6, func7}) {
  
  const [text, setText] = useState("EXPAND ALL");
  const [degree, setDegree] = useState(0);
  const [pageStyle, setPageStyle] = useState("pixel-image");
  const [status, setStatus] = useState(true);
  const [videoStyle, setVideoStyle] = useState("pixel-vid");
  const [cancelStyle, setCancelStyle] = useState("pixel-vid-cancel");
  
  const page1 = useRef("");
  const page2 = useRef("");
  const page3 = useRef("");
  const page4 = useRef("");
  const page5 = useRef("");
  
  const [col, setCol] = useState("hsl(65, 10%, 30%)");
  const [bg, setBg] = useState("hsl(65, 50%, 99%)");
  const [qbg, setqbg] = useState("hsl(0, 0%, 93%)");
  const [test, setTest] = useState(0);
  
  const change_text = () => {
    if (status) {
      setText("COLLAPSE");
      setStatus(false);
      setDegree(180);
      setPageStyle("pixel-page-height");
    } else {
      setText("EXPAND ALL");
      setStatus(true);
      setDegree(0);
      setPageStyle("pixel-images");
    }
  }
  
  const play_video = () => {
    if (videoStyle == "pixel-vid") {
      setVideoStyle("vid-visible");
      setCancelStyle("pixel-vid-cancel-visible");
    } else {
      setVideoStyle("pixel-vid");
      setCancelStyle("pixel-vid-cancel");
    }
  }
  const stop_video = () => {
    setVideoStyle("pixel-vid");
    setCancelStyle("pixel-vid-cancel");
  }
  
  let pagePos = page1.current.offsetTop;
  let screenHeight = window.innerHeight;
  
  let pageHeight1 = page1.current.offsetTop;
  let pageHeight2 = page2.current.offsetTop;
  let pageHeight3 = page3.current.offsetTop;
  let pageHeight4 = page4.current.offsetTop;
  let pageHeight5 = page5.current.offsetTop;
  
  let clip1 = pageHeight1 * (80/100);
  let clip2 = pageHeight2 * (92/100);
  let clip3 = pageHeight3 * (92/100);
  let clip4 = pageHeight4 * (92/100);
  let clip5 = pageHeight5 * (92/100);
  
  let changeColor = (e) => {
    let scrollValue = e.scrollTop;
    setTest(scrollValue);
    
    if(scrollValue >= clip1 && scrollValue < clip2) {
      setBg("hsl(25, 90%, 95%)");
      setCol("hsla(340, 90%, 25%, 0.8)");
    } else if(scrollValue >= clip2 && scrollValue < clip3) {
      setBg("hsl(70, 100%, 95%)");
      setCol("hsl(70, 30%, 20%)");
      setqbg("hsl(70, 30%, 90%)");
    } else if(scrollValue >= clip3 && scrollValue < clip4) {
      setBg("hsl(207, 100%, 94%)");
      setCol("hsl(207, 30%, 20%)");
      setqbg("hsl(207, 30%, 90%)");
    } else if(scrollValue >= clip4 && scrollValue < clip5) {
      setBg("hsl(270, 100%, 94%)");
      setCol("hsl(270, 30%, 20%)");
      setqbg("hsl(270, 30%, 82%)");
    } else if(scrollValue >= clip5) {
      setBg("hsl(207, 100%, 94%)");
      setCol("hsl(207, 30%, 20%)");
      setqbg("hsl(207, 30%, 90%)");
    } else {
      setBg("hsl(65, 50%, 99%)");
      setCol("hsl(65, 10%, 30%)");
      setqbg("hsl(0, 0%, 93%)");
    }
  }
  
  /* Menu List Control */
  const [displayStyle, setDisplayStyle] = useState("none");
  let menuListDisplay = () => {
    (displayStyle == "none") ? setDisplayStyle("block") : setDisplayStyle("none");
  }
  
  return (
    <div className="pixel-container" style={{
      color: col,
      backgroundColor: bg,
      transition: "background 2s, color 2s"
    }} onScroll={(e) => changeColor(e.target)} >
    
      <div className="pixel-nav">
        <div className="pixel-home">
          <img src={img8} alt="google logo" onClick={() => {func6(); setDisplayStyle("none");}}/>
          <p>Pixel Fall Launch</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" className="pixel-hamburger" viewBox="0 0 24 24" width="24px" onClick={() => menuListDisplay()} ><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </div>
      
      {/* Menu List */}
      <div className="menu-list" style={{display: displayStyle}}>
          <div className="menu-cancel-button" onClick={menuListDisplay}><p>×</p></div>
          <div onClick={() => {func1(); menuListDisplay();}}>Background Color Change</div>
          <div onClick={() => {func2(); menuListDisplay();}}>Image Carousel</div>
          <div onClick={() => {func3(); menuListDisplay();}}>Todo List</div>
          <div onClick={() => {func4(); menuListDisplay();}}>Pixel Experience</div>
          <div onClick={() => {func5(); menuListDisplay();}}>Tilting with JavaScript</div>
          <div onClick={() => {func7(); menuListDisplay();}}>Calculator</div>
      </div> 
      
      
      <div className="pixel-header">
        <p>Thanks for joining us</p>
        <p className="pixel-title">Here's a breakdown of everything we spoke about, or you can <a href="https://m.youtube.com/watch?v=WNarpiGz3Kk" style={{color: col}}>enjoy the whole show here</a>.</p>
        <div className="pixel-outline">
          <div></div>
          <p>SHAREABLE MOMENTS</p>
        </div>
        <p className="pixel-intro">Key information and assets from the show, ready to be downloaded or shared. You can also download all assets in high-resolution <a href="https://drive.google.com/drive/u/0/mobile/folders/1lW2Meof9QOooOcODZU2AKK4JSpu6on4i" style={{color: col}}>here</a>.
        </p>
      </div>
      
      <div className={pageStyle}>
        <Image img={img11} type="IMG" />
        <Image img={img7} type="GIF" />
        <Image img={img9} type="IMG" />
        <Image img={img10} type="IMG" />
        <Image img={img1} type="IMG" />
        <Image img={img2} type="IMG" />
        <Image img={img3} type="IMG" />
        <Image img={img4} type="IMG" />
        <Image img={img5} type="IMG" />
        <Image img={img6} type="IMG" />
        <Image img={img11} type="IMG" />
        <Image img={img18} type="IMG" />
       </div>
       
       <div className="pixel-img-expand" onClick={change_text}>
         <p>{text}</p>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className="pixel-expand-svg" style={{transform: "rotate("+degree+"deg) scale(1.8)"}}><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>
       </div>
       
       <div className="pixel-page">
         <PixelIntro header="Unboxing Pixel 6 for the first time" subheader="Rick Osterloh introduces Google’s groundbreaking new Pixel 6 and Pixel 6 Pro." />
         <PixelVideo videoStyle={videoStyle} video={vid1} cancelStyle={cancelStyle} cancelBtn={stop_video} image={img19} videoBtn={play_video} time="7:40" />
         <PixelQuote bgcolor={qbg} q="Now, this year is quite a bit different — we have state-of-the-art hardware, which means Pixel can deliver even more impressive real-world performance, as well as new AI-driven experiences that have never been possible before." p="RICK OSTERLOH" />
       </div>
       
       <div className="pixel-page" ref={page1}>
         <PixelIntro header="Design tour with Isabelle Olsson" subheader="Take a look at the new Pixel 6 and Pixel 6 Pro designs, starting with our advanced camera systems and the new colors available." />
         <PixelVideo videoStyle={videoStyle} video={vid2} cancelStyle={cancelStyle} cancelBtn={stop_video} image={img20} videoBtn={play_video} time="5:33" />
         <img src={img17} className="pixel-cases"/>
         <PixelIntro header="Pixel 6 Cases" subheader="Built to protect. Designed to accentuate the new colors of Pixel 6 and Pixel 6 Pro." />
         <a href="https://store.google.com/collection/accessories_wall?productType=Cases+%26+Sleeves&productType=Screen+Protectors&compatibilityCategory=Phone&utm_source=fall21_launchevent&utm_medium=google_oo&utm_campaign=GS106884" className="pixel-store" target="_blank">View on Google Store</a>
       </div>
       
       <div className="pixel-page" ref={page2}>
         <PixelIntro header="Android 12 and Material You with Sabrina Ellis" subheader="Deep dive into the new Android 12 OS featuring Material You, and discover how the Google Tensor security core and Titan M2 chip work together to protect Pixel owners." />
         <PixelVideo videoStyle={videoStyle} video={vid3} cancelStyle={cancelStyle} cancelBtn={stop_video} image={img21} videoBtn={play_video} time="6:13" />
         <img src={img13} className="pixel-phones"/>
         <PixelQuote bgcolor={qbg} top="70px" q="Android 12 looks especially stunning on Pixel 6. We designed it using our years of mobile OS experience, while keeping our own hardware in mind. So Pixel 6 is the best expression of Android." p="SABRINA ELLIS" />
       </div>
       
       <div className="pixel-page" ref={page3}>
         <PixelIntro header="Google Tensor with Rick Osterloh and Monika Gupta" subheader="Meet Google Tensor, the brand new chip designed by Google, custom-made for Pixel." />
         <PixelVideo videoStyle={videoStyle} video={vid4} cancelStyle={cancelStyle} cancelBtn={stop_video} image={img22} videoBtn={play_video} time="4:43" />
         <PixelQuote bgcolor={qbg} q="We’re fortunate to have great insights when it comes to ML and built our chip based on where ML models are heading, not where they are today." p="MONIKA GUPTA"/>
       </div>
       
       <div className="pixel-page" ref={page4}>
         <PixelIntro header="Magic Eraser with Hannah Beachler" subheader="Join Hannah Beachler, the production designer behind feature films Black Panther and Moonlight, for a demonstration of the newest Pixel camera editing feature, Magic Eraser." />
         <PixelVideo videoStyle={videoStyle} video={vid4} cancelStyle={cancelStyle} cancelBtn={stop_video} image={img15} videoBtn={play_video} time="4:43" />
         <PixelQuote bgcolor={qbg} q="We’re fortunate to have great insights when it comes to ML and built our chip based on where ML models are heading, not where they are today." p="MONIKA GUPTA"/>
       </div>
       
       <div className="pixel-page" ref={page5}>
         <PixelIntro header="Real Tone with Kennedi Carter, Vida Cornelius, and Florian Koenigsberger" subheader="With Pixel 6 and Pixel 6 Pro, we are improving camera and image tools for people of color. With Real Tone, the Pixel 6 camera sees you for all you are, representing the the nuances of all skin tones beautifully and accurately." />
         <PixelVideo videoStyle={videoStyle} video={vid4} cancelStyle={cancelStyle} cancelBtn={stop_video} image={img16} videoBtn={play_video} time="4:43" />
         <PixelQuote bgcolor={qbg} q="We’re fortunate to have great insights when it comes to ML and built our chip based on where ML models are heading, not where they are today." p="MONIKA GUPTA"/>
       </div>
      
       
       
       
       
       
     </div>
    )
}

export default PixelExperience