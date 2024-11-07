import React, { useState, useEffect } from 'react';
import image from "../assets/Ellipse.png";
import Showchar from './Showchar';
import frame from '../assets/Frame.png';
import logo from '../assets/logos.png';
import background from '../assets/backcolor.png';

const HomePageConten = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Check on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      
      <div className="container w-full p-3 pt-24 md:pb-44 w-full">
        
        {screenSize < 768 ? <MobileLayout /> : screenSize < 1208 ? <TabletLayout /> : <LaptopLayout />}
      </div>
    </div>
  );
};

const ImageOverlay = () => (
  <div className="relative mt-7">
    <img
      src={image}
      className="h-32 w-32 mt-4 object-cover"
      alt="Ellipse"
    />
    <img
      src={frame}
      className="absolute h-40 w-40 top-0 bottom-10 left-7 object-cover"
      alt="Frame"
    />
  </div>
);

const LaptopLayout = () => (
  <div className="relative flex flex-col items-center md:pr-4 md:pr-7 md:pb-20 z-0 w-full">
    <img 
      src={background} 
      alt="" 
      className="absolute w-4/5 top-[-40px] right-0 object-cover z-0" 
      style={{ pointerEvents: "none", top: '-40px' }} // Adjust the top position
    />
    
    <div className="relative z-10 text-center flex flex-col items-center bg-transparent">
      <h1 className="text-9xl font-semibold z-20">
        Digital Marketing
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-7 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 mt-4">
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-9xl font-semibold">
          Agency
        </span>
        <div className="flex flex-col-reverse items-center md:flex-row md:items-start gap-6 md:gap-20">
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-xl max-w-xs sm:max-w-md md:max-w-lg text-justify leading-tight font-light md:mt-12 flex flex-col justify-center">
            <span className="block indent-0">Building Digital Products</span>
            <span className="block">Through Long-Term Partnerships</span>
          </p>
          <ImageOverlay />
        </div>
      </div>
      <p className="text-gray-300 font-light mt-20 text-2xl text-left w-full max-w-lg mx-auto md:ml-28 md:self-start">
        you are <br /> on top
      </p>
      <Showchar />
      <p className='text-3xl mt-16 text-center'>
        We collaborate with <span className='text-blue-600'>250+ leading companies</span>
      </p>
      <img src={logo} alt="" className='mt-16 h-20 ml-10' />
    </div>
  </div>
);

const TabletLayout = () => (
  <div className="relative flex flex-col items-center py-6 px-8 text-center z-0">
    <img 
      src={background} 
      alt="" 
      className="absolute w-4/5 bottom-96 left-96 object-cover z-0" 
      style={{ pointerEvents: "none", top: '-40px' }} // Adjust the top position
    />
    <h1 className="text-5xl sm:text-7xl mt-10 mb-2 font-semibold">Digital Marketing</h1>
    <span className="text-5xl sm:text-7xl mt-0 font-semibold">Agency</span>
    <div className="flex flex-col items-center mt-6">
      <p className="text-gray-300 text-base sm:text-lg text-center leading-tight font-light">
        <span className="block indent-0">Building Digital Products</span>
        <span className="block">Through Long-Term Partnerships</span>
      </p>
      <ImageOverlay />
    </div>
    <p className="text-gray-300 font-light mt-4">you are on top</p>
    <Showchar />
    <p className='text-2xl mt-4 text-center'>We collaborate with <span className='text-blue-600'>250+ leading companies</span></p>
    <img src={logo} alt="" className='mt-7 h-16' />
  </div>
);

const MobileLayout = () => (
  <div className="relative flex flex-col items-center ">
    <img 
      src={background} 
      alt="" 
      className="absolute w-full object-cover z-0" 
      style={{ pointerEvents: "none", top: '-40px' }} // Adjust the top position
    />
    <h1 className="text-4xl sm:text-5xl mt-28 mb-2 font-semibold z-10 ">Digital Marketing</h1>
    <span className="text-4xl sm:text-5xl mt-0 font-semibold z-10">Agency</span>
    <div className="flex flex-col items-center mt-6">
      <p className="text-gray-300 text-sm sm:text-base text-center leading-tight font-light">
        <span className="block indent-0">Building Digital Products</span>
        <span className="block">Through Long-Term Partnerships</span>
      </p>
      <ImageOverlay />
    </div>
    <p className="text-gray-300 font-light mt-4">you are on top</p>
    <Showchar />
    <p className='text-xl mt-12 text-center'>We collaborate with <span className='text-blue-600'>250+ leading companies</span></p>
    <img src={logo} alt="" className='mt-7 h-16' />
  </div>
);

export default HomePageConten;
