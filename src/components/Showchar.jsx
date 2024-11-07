import React from 'react';

const Showchar = () => {
  return (
    <div className="container mx-auto px-8 md:w-full text-white bg-black py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 justify-items-center flex-wrap md:w-full">
        <div className="w-full max-w-xs flex flex-col items-center justify-center">
          <p className="text-6xl font-semibold leading-none flex items-center">
            <span>2000</span><span className="text-yellow-500 ml-1">+</span>
          </p>
          <p className="text-2xl font-light text-center mt-2">Company</p>
        </div>


        {/* Experience */}
        <div className="w-full max-w-xs flex flex-col items-center justify-center">
          <p className="text-6xl font-semibold leading-none"><span>10</span><span className="text-yellow-500">+</span></p>
          <p className="text-2xl font-light text-center mt-2">Years Exp</p>
        </div>

        {/* Hours Of Digital */}
        <div className="w-full max-w-xs flex flex-col items-center justify-center">
          <p className="text-6xl font-semibold leading-none"><span>800</span><span className="text-yellow-500">+</span></p>
          <p className="text-2xl font-light text-center mt-2">Hours Of Digital</p>
        </div>

        {/* Tracked Revenue */}
        <div className="w-full max-w-xs flex flex-col items-center justify-center">
          <p className="text-6xl font-semibold leading-none"><spav>150M</spav><span className="text-yellow-500">+</span></p>
          <p className="text-2xl font-light text-center mt-2">In Tracked Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default Showchar;
