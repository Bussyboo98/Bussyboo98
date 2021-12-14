import React, {useState, useEffect} from 'react';
import Colors from './Colors/Colors';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import Reminder from './Reminder/Reminder';
import PixelExperience from './PixelExperience/PixelExperience';
import Tilt from './Tilt/Tilt';
import Home from './Home/Home';
import Calculator from './Calculator/Calculator';
import Menu from './Menu';

function App() {
  const [colors, setColors] = useState(false);
  const [imageCarousel, setImageCarousel] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [pixel, setPixel] = useState(false);
  const [tilt, setTilt] = useState(false);
  const [home, setHome] = useState(true);
  const [calculator, setCalculator] = useState(false);
  const [menu, setMenu] = useState(true);
  const [Col, setCol] = useState("black");
  
    const colorfunc = () => {
      setColors(true);
      setImageCarousel(false);
      setReminder(false);
      setPixel(false);
      setTilt(false);
      setHome(false);
      setCalculator(false);
    }
    const imagefunc = () => {
      setColors(false);
      setImageCarousel(true);
      setReminder(false);
      setPixel(false);
      setTilt(false);
      setHome(false);
      setCalculator(false);
    }
    const reminderfunc = () => {
      setColors(false);
      setImageCarousel(false);
      setReminder(true);
      setPixel(false);
      setTilt(false);
      setHome(false);
      setCalculator(false);
    }
    const pixelfunc = () => {
      setColors(false);
      setImageCarousel(false);
      setReminder(false);
      setPixel(true);
      setTilt(false);
      setHome(false);
      setCalculator(false);
      setMenu(false);
    }
    const tiltfunc = () => {
      setColors(false);
      setImageCarousel(false);
      setReminder(false);
      setPixel(false);
      setTilt(true);
      setHome(false);
      setCalculator(false);
    }
    const homefunc = () => {
      setColors(false);
      setImageCarousel(false);
      setReminder(false);
      setPixel(false);
      setTilt(false);
      setHome(true);
      setCalculator(false);
    }
    const calculatorfunc = () => {
      setColors(false);
      setImageCarousel(false);
      setReminder(false);
      setPixel(false);
      setTilt(false);
      setHome(false);
      setCalculator(true);
    }
    
  useEffect(() => {
    if (pixel === false) setMenu(true);
    (colors === true || tilt === true || home === true) ? setCol("white") : setCol("black");
    
  }, [pixel, colors, tilt, home]);
    
  return (
    <>
     {menu && <Menu col={Col} func1={colorfunc} func2={imagefunc} func3 ={reminderfunc} func4={pixelfunc} func5={tiltfunc} func6={homefunc} func7={calculatorfunc}/>}
     {colors && <Colors func={colorfunc} />}
     {imageCarousel && <ImageCarousel />}
     {reminder && <Reminder />}
     {pixel && <PixelExperience func1={colorfunc} func2={imagefunc} func3 ={reminderfunc} func4={pixelfunc} func5={tiltfunc} func6={homefunc} func7={calculatorfunc} />}
     {tilt && <Tilt />}
     {home && <Home func1={colorfunc} func2={imagefunc} func3 ={reminderfunc} func4={pixelfunc} func5={tiltfunc} func6={homefunc} func7={calculatorfunc} />}
     {calculator && <Calculator />} 
   </>
    );
}

export default App;