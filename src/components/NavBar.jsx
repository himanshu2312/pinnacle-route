import React, { useState } from 'react';
import rocket from "../assets/rocket.png"
import rocketBlack from "../assets/rocketBlack.png"
import { GoArrowUpRight } from "react-icons/go";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`sticky top-0 z-50 shadow-lg border-b border-gray-500 h-auto py-1 md:py-3 ${location.pathname === '/' ? "bg-black" : "bg-white"}`}> {/* Reduced padding for mobile */}
            <div className="container mx-auto lg:px-12 px-4 flex lg:flex-row md:flex-col flex-row flex-wrap items-center justify-between">
                <div className="flex items-start text-white text-lg mt-2 p-2 md:mt-0 md:w-auto">
                    <img src={location.pathname === '/' ? rocket : rocketBlack} alt="" />
                    <div className="flex flex-col justify-center ml-4">
                        <h1 className={`tracking-wide transition-transform duration-400 transform hover:translate-x-1 text-left ${location.pathname === '/' ? 'text-white' : 'text-black'}`}>
                            Pinnacle Route
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base text-left">
                            Achieve Digital Excellence
                        </p>
                    </div>
                </div>

                <div className={`hidden md:flex space-x-6 items-center md:gap-7 ${location.pathname === '/' ? 'text-white' : 'text-black'}`}>
                    <a href="/" className={`transition-all duration-400 hover:scale-105 ${location.pathname === '/' ? 'selected-tab' : ''} mt-4`}>Home</a>
                    <a href="/about-us" className={`transition-all duration-400 hover:scale-105 ${location.pathname === '/about-us' ? 'selected-tab' : ''} mt-4`}>About Us</a>
                    <a href="/services" className={`transition-all duration-400 hover:scale-105 ${location.pathname === '/services' ? 'selected-tab' : ''} mt-4`}>Services</a>
                    <a href="/our-work" className={`transition-all duration-400 hover:scale-105 ${location.pathname === '/our-work' ? 'selected-tab' : ''} mt-4`}>Our Work</a>
                    {/* <a href="/faq" className={`transition-all duration-400 hover:scale-105 ${location.pathname === '/faq' ? 'selected-tab' : ''} mt-4`}>FAQ</a> */}
                    <a href="/contact-us" className={`border ${location.pathname === '/' ? "border-white hover:bg-white hover:text-black" : "border-black hover:bg-black hover:text-white"} px-4 py-2 transition-all duration-400 inline-flex items-center ${location.pathname === '/contact-us' ? 'selected-tab' : ''} mt-4`}>
                        <div>Contact Us</div>
                        <GoArrowUpRight className="ml-1" />
                    </a>
                </div>

                <div className="md:hidden flex items-center ml-auto">
                    <button onClick={toggleMenu} className={`${location.pathname === '/' ? "text-white" : "text-black"} focus:outline-none`}>
                        <svg className="w-6 mb-2 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className={`md:hidden bg-transparent border-t border-gray-500 mr-auto ${location.pathname === '/' ? "text-white" : "text-black"}`}>
                    <a href="/" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-400">Home</a>
                    <a href="/about-us" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-400">About Us</a>
                    <a href="/services" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-400">Services</a>
                    <a href="/our-work" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-400">Our Work</a>
                    {/* <a href="/faq" className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-400">FAQ</a> */}
                    <a href="/contact-us" className="block border-t border-gray-500 px-4 py-2 hover:bg-gray-700 transition-colors duration-400">Contact Us</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;