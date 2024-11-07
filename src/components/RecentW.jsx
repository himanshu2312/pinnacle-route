import React, { useState } from 'react';
import background2 from "../assets/backcolor2.png";
import image from "../assets/Ellipse.png";
import frame from '../assets/Frame.png';
import phone from '../assets/phone.png';
import sign from "../assets/sign.png";
import laptop from "../assets/laptop.png"

const RecentW = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='mt-20 px-4 lg:px-12 py-7 relative w-full max-w-screen-xl mx-auto'>
      <h1 className='text-left font-bold text-3xl md:text-5xl'>Recent Work</h1>

      <div className='flex flex-col lg:flex-row items-center lg:justify-between mt-10 w-full'>

        {/* Phone and Sign Images */}
        <div className='relative flex flex-col items-center lg:items-start'>
          <div className="relative">
            <img src={phone} alt="Phone" className='h-48 w-48 md:h-80 md:w-80 lg:h-96 lg:w-96' />
            <img src={sign} alt="Sign" className='absolute top-36 right-2 md:top-72 md:right-52 lg:top-52 lg:right-6 h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20' />
          </div>
          <div className='flex gap-4 md:gap-8 mt-4 lg:mt-6 items-center'>
            <p onClick={() => setActiveIndex(0)} className={`font-semibold text-sm md:text-lg ${activeIndex === 0 ? 'border-b-4 border-blue-500' : ''}`}>
              Lorem ipsum dolor
            </p>
            <p onClick={() => setActiveIndex(1)} className={`text-sm md:text-lg text-gray-400 ${activeIndex === 1 ? 'border-b-4 border-blue-100' : ''}`}>
              Website and Mobile App
            </p>
          </div>
        </div>

        {/* Background, Image, and Frame */}
        <div className='new relative flex flex-col items-center mt-6 lg:mt-0 md:mb-28 '>
          <img src={background2} alt="Background" className="absolute w-64 bottom-1 md:w-full lg:w-full h-auto object-cover pointer-events-none z-0" />
          <div className="relative z-10 flex flex-col items-center mt-14  lg:mt-0 w-full">
            <img src={image} className="h-28 w-28 md:h-32 md:w-32 lg:h-32 lg:w-32 translate-y-2" alt="Ellipse" />
            <img src={frame} className="absolute h-38 w-40 md:h-40 pl-6 md:w-40 lg:h-40 lg:w-40 translate-x-5 lg:translate-x-10 circle-frame mb-18" alt="Frame" />
          </div>
          <p className='text-right mr-0 px-4 py-7 mt-6 lg:mt-10 z-10 block  text-sm md:text-lg lg:text-right lg:ml-auto'>
            Molding vision, embodying the brand,<span className='text-gray-500 block'>and generating exceptional experiences.</span>
          </p>
        </div>
      </div>
      <div className='relative p-3 md:p-6 flex flex-col items-center mt-6 max-w-screen-2xl mx-auto gap-10 md:gap-20 lg:gap-44'>
  {/* Background Image */}
  <img 
    src={background2} 
    className='absolute inset-y-0 left-0 md:w-1/2 w-full object-cover z-0' 
    alt="Background" 
  />

  {/* Overlay Content */}
  <div className='relative md:pl-9 md:ml-28 z-10 flex flex-col md:flex-row justify-between items-center w-full md:w-[1400px] lg-[500px] gap-5 md:gap-0'>
    
    {/* Experience & Project Done Info */}
    <div className='new md:pl-8 flex items-center gap-10 w-full md:w-auto justify-center lg:justify-between md:justify-center md:mb-14 md:pb-6'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>10</p>
        <p className='text-gray-300 text-center md:text-left'>Years of Experience</p>
      </div>
      <div className='flex flex-col items-center md:items-start gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>113+</p>
        <p className='text-gray-300 text-center md:text-left'>Project Done</p>
      </div>
    </div>

    {/* Laptop Image */}
    <div className='mt-8 md:mt-0 flex flex-col items-center w-full md:w-auto md:justify-end md:bottom-28 relative'>
      <img src={laptop} alt="Laptop" className='w-72  sm:w-80 md:w-[600px]  lg:w-[800px] xl:w-[700px] md:h-[500px]' />

      {/* Tag Section */}
      <div className='tag w-4/3 md:w-[600px] lg:w-[600px] xl:w-[700px] mt-5 md:mt-4 flex justify-between text-center text-sm md:text-base gap-7 '>
        <p className='text-gray-100 font-bold md:text-xl'>Lorem ipsum dolor</p>
        <p className='text-gray-500 md:text-xl'>Website and Tablet</p>
      </div>
    </div>
  </div>
</div>




    </div>
  );
}

export default RecentW;
