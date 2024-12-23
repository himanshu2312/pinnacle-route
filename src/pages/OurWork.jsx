import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import { GoArrowUpRight } from 'react-icons/go';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const OurWork = () => {

    const gridData = [
        { id: 1, imgSrc: img1, text: 'Lorem ipsum dolor sit amet consectetur. Nulla.', class: "bg-[#C0EEE1] text-black" },
        { id: 2, imgSrc: img2, text: 'Lorem ipsum dolor sit amet consectetur. Nulla.', class: "bg-[#1777F7] text-white" },
        { id: 3, imgSrc: img3, text: 'Lorem ipsum dolor sit amet consectetur. Nulla.', class: "bg-[#A195D3] text-white" },
        { id: 4, imgSrc: img4, text: 'Lorem ipsum dolor sit amet consectetur. Nulla.', class: "bg-[#030506] text-white" },
        { id: 5, imgSrc: img5, text: 'Lorem ipsum dolor sit amet consectetur. Nulla.', class: "bg-[#EF5844] text-white" },
        { id: 6, imgSrc: img6, text: 'Lorem ipsum dolor sit amet consectetur. Nulla.', class: "bg-[#161616] text-white" },
    ];

    return (
        <div className='bg-white'>
            <Navbar />
            <div className='py-24 flex flex-col items-center'>
                <div className='flex flex-col items-center w-[45%] mb-8'>
                    <div className='text-4xl font-bold'>Lorem ipsum dolor sit amet consectetur.</div>
                    <div className='text-xl mt-4'>Lorem ipsum dolor sit amet consectetur. Imperdiet neque pellentesque ut volutpat in eget nulla sit. Parturient auctor tristique volutpat odio massa fringilla ullamcorper adipiscing. Urna ullamcorper odio adipiscing sagittis.</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-12">
                    {gridData.map((item, i) => (
                        <div key={item.id} className={`flex flex-col items-center ${item.class} rounded-xl`}>
                            <img
                                src={item.imgSrc}
                                alt={item.text}
                                className="w-[100%] rounded-md"
                            />
                            <div className='flex items-end w-full h-full px-8 pb-8'>
                                <div>
                                    <p className="md:text-4xl sm-text-3xl text-2xl font-medium mb-8">{item.text}</p>
                                    <div className={`border ${i===0 ? "border-black" : "border-white"} h-[1px] w-[50px]`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full flex justify-center mt-12'>
                    <a href="/contact-us" className="text-xl bg-black bg-gradient-to-tr from-yellow-400 to-fuchsia-600 text-white px-5 rounded-lg py-3 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center">
                        <div>
                            Contact Us
                        </div>
                        <GoArrowUpRight className="ml-1" />
                    </a>
                </div>
            </div>
            <FAQ />
            <Footer />
        </div>
    );
}

export default OurWork;
