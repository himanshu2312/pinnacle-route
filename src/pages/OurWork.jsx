import React from 'react';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import { useSelector } from 'react-redux';
import classes from './conf/workClasses.json';
import { GoArrowUpRight } from 'react-icons/go';

const OurWork = () => {
    const works = useSelector(state => state.works); 

    return (
        <div className='bg-white'>
            <Navbar />
            <div className='py-24 flex flex-col items-center'>
                <div className='flex flex-col items-center w-[45%] mb-8'>
                    <div className='text-4xl font-bold'>Lorem ipsum dolor sit amet consectetur.</div>
                    <div className='text-xl mt-4'>Lorem ipsum dolor sit amet consectetur. Imperdiet neque pellentesque ut volutpat in eget nulla sit. Parturient auctor tristique volutpat odio massa fringilla ullamcorper adipiscing. Urna ullamcorper odio adipiscing sagittis.</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-12">
                    {works?.map((item, i) => (
                        <div key={item.id} className={`flex flex-col items-center ${classes[Math.floor(Math.random() * classes.length)]} rounded-xl`}>
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
