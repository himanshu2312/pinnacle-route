import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import img from '../assets/contact-us.png'
import { GoArrowUpRight } from 'react-icons/go';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const AboutUs = () => {

    return (
        <div className='bg-white flex flex-col justify-between'>
            <Navbar />
            <div className='w-full flex flex-col justify-center items-center gap-8 lg:gap-0 lg:flex-row py-16'>
                <div className='w-[95%] lg:w-[50%] flex justify-center'>
                    <div className='w-[100%] md:max-w-[60%] h-[520px] border border-[rgba(0,0,0,0.2)] rounded-xl p-6 flex flex-col justify-between'>
                        <input className='w-full rounded-xl bg-gray-200 h-[40px] px-4' type="text" placeholder='Enter Name' name="" id="" />
                        <input className='w-full rounded-xl bg-gray-200 h-[40px] px-4' type="text" placeholder='Enter Email' name="" id="" />
                        <input className='w-full rounded-xl bg-gray-200 h-[40px] px-4' type="text" placeholder='Enter Phone Number' name="" id="" />
                        <textarea rows="8" className='w-full rounded-xl bg-gray-200 px-4 py-2' type="text" placeholder='Please type your message here....' name="" id="" />
                        <a className="w-full text-[16px] bg-black bg-gradient-to-tr from-yellow-400 to-fuchsia-600 text-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center rounded-xl">
                            <div className='w-full flex justify-center text-center'>
                                Send Messages
                            </div>
                        </a>
                    </div>
                </div>
                <div className='w-[95%] lg:w-[50%] flex justify-center'>
                    <div className='w-[100%] md:max-w-[70%]'>
                        <div className='font-semibold text-[18px] text-gray-400'>CONTACT US</div>
                        <div className='font-semibold text-5xl mb-4'>Get in touch today</div>
                        <div className='text-[20px] mb-16'>Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.</div>
                        <div className='max-w-[50%] text-[20px] flex flex-col gap-4'>
                            <div>
                                <div>contact@company.com</div>
                            </div>
                            <div>
                                <div>(123) 456 - 789</div>
                            </div>
                            <div>
                                <div>794 Mcallister St San Francisco, 94102</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;
