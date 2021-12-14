import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import img1 from './Images/pixel1.jpeg';
import img2 from './Images/pixel2.jpeg';
import img3 from './Images/pixel3.jpeg';
import img4 from './Images/pixel4.jpeg';
import img5 from './Images/pixel5.jpeg';
import img6 from './Images/pixel6.jpeg';

function ImageCarousel() {
  const images = [
    {
      id: 0,
      img:img1
    },
    {
      id: 1,
      img:img2
    },
    {
      id: 2,
      img:img3
    },
    {
      id: 3,
      img:img4
    },
    {
      id: 4,
      img:img5
    },
    {
      id: 5,
      img:img6
    }
    ];
  const img_length = images.length - 1;
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(images[0]);
  
  const imageChange = (btn) => {
    if (btn === "next") {
      if (count === img_length) {
        setCount(0);
      } else {
        setCount(prev => prev + 1);
      }
    }
    else {
      if (count === 0) {
        setCount(img_length);
      } else {
        setCount(prev => prev - 1);
      }
    }
  }
  
  useEffect (() => {
    setImage(images[count].img);
  }, [count]);
  
  return(
    <>
    <div className="image-carousel-container">
      <div className="image-carousel-box">
        <img src={image} />
        <button className="image-carousel-btn" onClick={() => imageChange("next")}>&#8827;</button>
        <button className="image-carousel-btn" onClick={() => imageChange("prev")}>&#8826;</button>
      </div>
      <div className="carousel-container">
        {
          images.map((carousel, index, arr) => {
            let sty = {
              width: '20px',
              height: '20px',
              margin: '5px',
              border: '1px solid',
              borderColor: 'rgba(0,0,0,0.1)',
              borderRadius: '50%',
              backgroundColor: ""
            }
            if (carousel.id === count) {
              sty = {...sty, backgroundColor: "rgba(0,0,0,0.2)"}
            }
            return <div style={sty} key={carousel.id}></div>
          })
        }
      </div>
    </div>
    </>
    ) 
}

export default ImageCarousel;