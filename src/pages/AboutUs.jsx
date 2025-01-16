import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import about1 from '../assets/about-us-1.png'
import about2 from '../assets/about-us-2.png'
import team from '../assets/Rectangle 24.png'
import { GoArrowUpRight } from 'react-icons/go';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const AboutUs = () => {
    const [selected, setSelected] = useState(0);

    const data = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur. Nulla.",
            description: "Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum nec et sed aliquet. Leo amet tellus nec sit nunc phasellus netus aliquam. Vitae scelerisque nec at ultricies arcu sed maecenas. Ac et quam. Vitae scelerisque nec at’",
            imageUrl: about1, // Replace with your image URL
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur. Nulla.",
            description: "Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum nec et sed aliquet. Leo amet tellus nec sit nunc phasellus netus aliquam. Vitae scelerisque nec at ultricies arcu sed maecenas. Ac et quam. Vitae scelerisque nec at’",
            imageUrl: about2, // Replace with your image URL
        },
    ];

    const manifestoData = [
        {
            id: 1,
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum nec et sed aliquet. Leo amet tellus nec sit nunc phasellus netus aliquam. Vitae scelerisque nec at ultricies arcu sed maecenas. Ac et quam. Vitae scelerisque nec at’",
            imageUrl: about1, // Replace with your image URL
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur. Nulla.",
            description: "Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum nec et sed aliquet. Leo amet tellus nec sit nunc phasellus netus aliquam. Vitae scelerisque nec at ultricies arcu sed maecenas. Ac et quam. Vitae scelerisque nec at’",
            imageUrl: about2, // Replace with your image URL
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur. Nulla.",
            description: "Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum nec et sed aliquet. Leo amet tellus nec sit nunc phasellus netus aliquam. Vitae scelerisque nec at ultricies arcu sed maecenas. Ac et quam. Vitae scelerisque nec at’",
            imageUrl: about2, // Replace with your image URL
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur. Nulla.",
            description: "Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum nec et sed aliquet. Leo amet tellus nec sit nunc phasellus netus aliquam. Vitae scelerisque nec at ultricies arcu sed maecenas. Ac et quam. Vitae scelerisque nec at’",
            imageUrl: about2, // Replace with your image URL
        },
        {
            id: 5,
            title: "Lorem ipsum dolor sit amet consectetur. Nulla.",
            description: "Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum nec et sed aliquet. Leo amet tellus nec sit nunc phasellus netus aliquam. Vitae scelerisque nec at ultricies arcu sed maecenas. Ac et quam. Vitae scelerisque nec at’",
            imageUrl: about2, // Replace with your image URL
        }
    ];

    const teamData = [
        {
            id: 1,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 2,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 3,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 4,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 1,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 2,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 3,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        },
        {
            id: 4,
            name: "David Cohen",
            designation: "CEO & Co-Founder",
            imageUrl: team
        }
    ];

    return (
        <div className='bg-black'>
            <Navbar />
            <div className='py-24 flex flex-col items-center'>
                <div className='flex flex-col items-center w-[70%] md:w-[45%] mb-8 text-white'>
                    <div className='text-4xl font-bold'>Lorem ipsum dolor sit amet consectetur.</div>
                    <div className='text-4xl font-bold mt-2'>Nibh ornare netus posuere eununc.</div>
                </div>
            </div>
            <div className="w-full px-4 md:px-16 pb-16 z-10 text-white">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-24 mb-12 items-center"
                    >
                        {/* Conditional Rendering for Alternating Layout */}
                        {index % 2 === 0 ? (
                            <>
                                {/* Text on Left, Image on Right */}
                                <div className="order-1 md:order-none lg:col-span-2">
                                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                                    <p className="text-gray-400 text-xl">{item.description}</p>
                                </div>
                                <div className="order-2 md:order-none lg:col-span-3">
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
                                <div className="order-2 md:order-none lg:col-span-3">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="order-1 md:order-none lg:col-span-2">
                                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                                    <p className="text-gray-400 text-xl">{item.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className='w-full flex justify-center pb-28'>
                <div className='flex flex-col gap-8 max-w-[90%]'>
                    <div className='text-white text-[30px] font-medium'>
                        <div>
                            OUR
                        </div>
                        <div>
                            MANIFESTO
                        </div>
                    </div>
                    <div className='h-[2px] bg-gray-600 w-[60px]'></div>
                    <div className='flex flex-col gap-4'>
                        {manifestoData.map((data, index) => {
                            return (
                                <div onMouseEnter={() => setSelected(index)} className='flex items-start gap-6 cursor-pointer'>
                                    <div className={`text-7xl font-bold ${selected === index ? "text-blue-600" : "text-gray-800"}`}>{Math.abs(index) < 9 ? `0${index + 1}` : index + 1}</div>
                                    <div>
                                        <div className={`text-[22px] mb-2 ${selected === index ? "text-white" : "text-gray-900"}`}>{data.title}</div>
                                        <div className={`max-w-[620px] text-[16px] ${selected === index ? "text-gray-300" : "text-gray-900"}`}>{data.description}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="flex justify-center px-12 lg:px-32 bg-white text-black w-full py-28">
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col lg:flex-row gap-6 lg:gap-28 lg:px-28'>
                        <div className='text-black text-[34px] font-medium'>
                            <div>
                                LEADERSHIP
                            </div>
                            <div>
                                TEAM
                            </div>
                            <div className='h-[2px] bg-gray-600 w-[80px] my-6'></div>
                        </div>
                        <div className='text-[22px]'>
                            Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum
                            nec et sed aliquet. Leo amet tellus nec sit nunc phasellus netus aliquam.
                            Vitae scelerisque nec at ultricies arcu sed maecenas. Ac et quam.
                            Vitae scelerisque nec at’
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {teamData.map((item) => (
                            <div
                                key={item.id}
                            >
                                <div className='mb-4'>
                                    <img src={item.imageUrl} alt="" srcset="" />
                                </div>
                                <div className='px-8 text-[14px]'>
                                    <div className='font-medium mb-2'>{item.name}</div>
                                    <div className='mb-3.5'>{item.designation}</div>
                                    <div className='h-[2px] bg-gray-400 w-[70px]'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FAQ />
            <Footer />
        </div>
    );
}

export default AboutUs;
