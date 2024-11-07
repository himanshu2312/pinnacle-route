import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import hero from '../assets/hero banner.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import bgBubble from '../assets/bg-bubble.png'
import Showchar from '../components/Showchar';
import logo from '../assets/logos.png';
import { GoArrowUpRight } from 'react-icons/go';
import laptop from '../assets/laptop.png';
import laptop2 from '../assets/laptop2.png';
import phone from '../assets/phone.png';
import bg from '../assets/bg.png';
import icon from '../assets/icon.png';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const Home = () => {
    const data = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur. Nulla.",
            description: "Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum nec et sed aliquet. Leo amet tellus nec sit nunc phasellus netus aliquam. Vitae scelerisque nec at ultricies arcu sed maecenas. Ac et quam. Vitae scelerisque nec at’",
            imageUrl: phone, // Replace with your image URL
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur. Nulla.",
            description: "Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum nec et sed aliquet. Leo amet tellus nec sit nunc phasellus netus aliquam. Vitae scelerisque nec at ultricies arcu sed maecenas. Ac et quam. Vitae scelerisque nec at’",
            imageUrl: laptop, // Replace with your image URL
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur. Nulla.",
            description: "Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum nec et sed aliquet. Leo amet tellus nec sit nunc phasellus netus aliquam. Vitae scelerisque nec at ultricies arcu sed maecenas. Ac et quam. Vitae scelerisque nec at’",
            imageUrl: laptop2, // Replace with your image URL
        },
    ];

    const gridData = [
        {
            id: 1,
            title: "Design Services",
            description: "Lorem ipsum dolor sit amet consectetur. Ut massa turpis non sem semper euismod tortor rhoncus. Molestie quis sit ligula lectus urna sed vitae tempor.",
            imageUrl: icon, // Replace with your image URL
        },
        {
            id: 2,
            title: "Design Services",
            description: "Lorem ipsum dolor sit amet consectetur. Ut massa turpis non sem semper euismod tortor rhoncus. Molestie quis sit ligula lectus urna sed vitae tempor.",
            imageUrl: icon, // Replace with your image URL
        },
        {
            id: 3,
            title: "Design Services",
            description: "Lorem ipsum dolor sit amet consectetur. Ut massa turpis non sem semper euismod tortor rhoncus. Molestie quis sit ligula lectus urna sed vitae tempor.",
            imageUrl: icon, // Replace with your image URL
        },
        {
            id: 4,
            title: "Design Services",
            description: "Lorem ipsum dolor sit amet consectetur. Ut massa turpis non sem semper euismod tortor rhoncus. Molestie quis sit ligula lectus urna sed vitae tempor.",
            imageUrl: icon, // Replace with your image URL
        },
        {
            id: 5,
            title: "Design Services",
            description: "Lorem ipsum dolor sit amet consectetur. Ut massa turpis non sem semper euismod tortor rhoncus. Molestie quis sit ligula lectus urna sed vitae tempor.",
            imageUrl: icon, // Replace with your image URL
        },
        {
            id: 6,
            title: "Design Services",
            description: "Lorem ipsum dolor sit amet consectetur. Ut massa turpis non sem semper euismod tortor rhoncus. Molestie quis sit ligula lectus urna sed vitae tempor.",
            imageUrl: icon, // Replace with your image URL
        }
    ];

    return (
        <div className='bg-black'>
            <Navbar />
            <img className="mt-4" src={hero} alt="" srcset="" />
            <Showchar />
            <div className='bg-black pt-24 pb-8 text-white flex flex-col items-center'>
                <p className='text-3xl text-center font-semibold'>
                    We collaborate with <span className='text-blue-600'>250+ leading companies</span>
                </p>
                <img src={logo} alt="" className='mt-12 h-20' />
            </div>
            {/* <img src={hero2} alt="" srcset="" /> */}
            <div className='w-full flex lg:flex-row flex-col justify-between items-center bg-white md:px-12 px-6 pt-24 md:pb-28 pb-12 text-blue-600'>
                <div className='lg:max-w-[50%] w-full lg:text-5xl sm:text-4xl text-3xl font-bold'>
                    We thrive at transforming product ideas into digital life
                </div>
                <div className="relative flex justify-around items-center lg:w-[40%] sm:w-[50%] w-[80%] lg:mt-0 mt-12 lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-bold">
                    {/* Background Image */}
                    <img
                        src={bgBubble}
                        alt="Background"
                        className="absolute w-full left-0 z-0"
                    />

                    {/* Content Layer */}
                    <div className="relative z-10 flex justify-around items-center w-full">
                        <div>10</div>
                        <div>113+</div>
                    </div>
                </div>
            </div>
            <div className="w-full px-16 pb-16 bg-white z-10">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-12 items-center"
                    >
                        {/* Conditional Rendering for Alternating Layout */}
                        {index % 2 === 0 ? (
                            <>
                                {/* Text on Left, Image on Right */}
                                <div className="order-1 md:order-none">
                                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                                    <p className="text-gray-700 text-xl">{item.description}</p>
                                </div>
                                <div className="order-2 md:order-none">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Image on Left, Text on Right */}
                                <div className="order-2 md:order-none">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="order-1 md:order-none">
                                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                                    <p className="text-gray-700 text-xl">{item.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
                <div className='w-full flex justify-center mt-16'>
                    <a href="#contact" className="border border-blue-600 text-blue-600 px-4 py-2 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center">
                        <div>
                            Know More
                        </div>
                        <GoArrowUpRight className="ml-1" />
                    </a>
                </div>
            </div>
            {/* <div className='flex justify-between bg-black pt-24 pb-12'>
                <div className='w-[50%] flex flex-col justify-center'>
                    <img src={hero4} alt="" srcset="" />
                    <div className='ml-16 mt-6'>
                        <a href="#contact" className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center">
                            <div>
                                Know More About Us
                            </div>
                            <GoArrowUpRight className="ml-1" />
                        </a>
                    </div>
                </div>
                <img src={hero3} className='w-[50%]' alt="" srcset="" />
            </div> */}
            <div className='py-16'
                style={{ backgroundImage: `url('${bg}')` }}
            >
                <div className='w-full flex sm:pl-0 pl-4 sm:flex-row flex-col justify-around text-white'>
                    <div className='sm:max-w-[35%] max-w-[90%] sm:mb-0 mb-6 text-6xl font-semibold'>
                        Out Technology Stack & offering
                    </div>
                    <div className='flex flex-col sm:max-w-[35%] max-w-[90%]'>
                        <div className='mb-10'>
                            Lorem ipsum dolor sit amet consectetur. Sem egestas nulla fames luctus laoreet nunc. Feugiat orci accumsan tortor nunc rhoncus pellentesque nunc tincidunt eu. In ipsum nec pharetra nisi lectus porttitor sed felis.
                        </div>
                        <div>
                            <a href="#contact" className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center">
                                <div>
                                    Request a Project
                                </div>
                                <GoArrowUpRight className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 xl:px-28 lg:px-12 md:px-8 px-4 mt-16">
                    {gridData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-lg rounded-xl p-12 flex flex-col"
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-14 h-14 object-cover rounded-full mb-4"
                            />
                            <h3 className="text-4xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-gray-600 text-[14px]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <FAQ />
            <Footer />
        </div>
    );
}

export default Home;
