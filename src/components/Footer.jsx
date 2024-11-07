import React from "react";
import rocket from "../assets/rocket.png"
import twitter from '../assets/fa-twitter.png';
import facebook from '../assets/fa-facebook-square.png';
import google from '../assets/fa-google-plus.png';

const Footer = () => {
    return (
        <div className="bg-black py-12">
            <div className="flex lg:flex-row flex-col justify-between items-center items-start sm:px-28 px-10 w-full">
                <div className="flex items-start text-white text-lg mb-6 lg:mb-0">
                    <img src={rocket} alt="" />
                    <div className="flex flex-col justify-center ml-4">
                        <h1 className="tracking-wide text-white transition-transform duration-700 transform hover:translate-x-1 text-left">
                            Pinnacle Route
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base text-left">
                            Achieve Digital Excellence
                        </p>
                    </div>
                </div>
                <div className="text-white text-xl flex sm:flex-row flex-col items-center">
                    <a href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    <a className="sm:ml-10 ml-0 sm:mt-0 mt-1" href="http://" target="_blank" rel="noopener noreferrer">Terms</a>
                    <div className="flex items-center sm:mt-0 mt-4">
                        <a className="sm:ml-10 ml-0" href="http://" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" srcset="" /></a>
                        <a className="ml-10" href="http://" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" srcset="" /></a>
                        <a className="ml-10" href="http://" target="_blank" rel="noopener noreferrer"><img src={google} alt="" srcset="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer