import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import hero from '../assets/hero banner.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
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
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSwiper = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const reviews = [
        {
            id: 1,
            name: 'Matt Cannon',
            designation: "Lead Developer",
            review: '“Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu.”',
            rating: 5,
        },
        {
            id: 2,
            name: 'Matt Cannon',
            designation: "Lead Developer",
            review: '“Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu.”',
            rating: 5,
        },
        {
            id: 3,
            name: 'Matt Cannon',
            designation: "Lead Developer",
            review: '“Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu.”',
            rating: 5,
        },
        {
            id: 4,
            name: 'Matt Cannon',
            designation: "Lead Developer",
            review: '“Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu.”',
            rating: 5,
        },
        {
            id: 5,
            name: 'Matt Cannon',
            designation: "Lead Developer",
            review: '“Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu.”',
            rating: 5,
        },
        {
            id: 6,
            name: 'Matt Cannon',
            designation: "Lead Developer",
            review: '“Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu.”',
            rating: 5,
        },
    ];

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
                        Our Technology Stack & offering
                    </div>
                    <div className='flex flex-col sm:max-w-[35%] max-w-[90%]'>
                        <div className='mb-10'>
                            Lorem ipsum dolor sit amet consectetur. Sem egestas nulla fames luctus laoreet nunc. Feugiat orci accumsan tortor nunc rhoncus pellentesque nunc tincidunt eu. In ipsum nec pharetra nisi lectus porttitor sed felis.
                        </div>
                        <div>
                            <a href="/contact-us" className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center">
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
            <div>
                <div className='flex flex-col md:flex-row sm:justify-between sm:items-center px-8 mb-4'>
                    <div className="relative lg:w-[40%] sm:w-[50%] w-[80%] lg:mt-0 mt-12 pb-16 pt-8 md:pt-[90px]">
                        {/* Background Image */}
                        <img
                            src={bgBubble}
                            alt="Background"
                            className="absolute w-full left-0 md:left-[-90px] top-[-20px] lg:top-[-20px] xl:top-[-60px] 2xl:top-[-120px] z-0"
                        />
                        <div className="relative z-10 w-full text-white text-4xl font-semibold mb-2">
                            What our client say
                        </div>
                        <div className="relative z-10 w-full text-white text-[15px]">
                            Lorem ipsum dolor sit amet consectetur. Sem egestas nulla fames luctus laoreet nunc. Feugiat orci accumsan tortor nunc rhoncus pellentesqu.
                        </div>
                    </div>
                    <div className='flex items-center gap-4 '>
                        <a href="/contact-us" className="text-xl bg-black bg-gradient-to-tr from-yellow-400 to-fuchsia-600 text-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center">
                            <div>
                                Contact Us
                            </div>
                            <GoArrowUpRight className="ml-1" />
                        </a>
                        <a href="#contact" className="border border-white text-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-700 inline-flex items-center">
                                <div>
                                    Request a Project
                                </div>
                                <GoArrowUpRight className="ml-1" />
                            </a>
                    </div>
                </div>
                <div style={{ position: 'relative', padding: '20px' }}>
                    {/* Swiper Carousel */}
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: '.custom-next', // Custom Next button
                            prevEl: '.custom-prev', // Custom Prev button
                        }}
                        onSlideChange={(swiper) => handleSwiper(swiper)}
                        onSwiper={(swiper) => handleSwiper(swiper)}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div
                                    style={{
                                        padding: '35px 25px',
                                        border: '1px solid #ddd',
                                        borderRadius: '8px',
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    <div className='flex gap-2 mb-4'>
                                        {Array.from({ length: review.rating }, (_, index) => (
                                            <svg width="21" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.6078 25.3567C15.2179 24.9884 15.9819 24.9884 16.5921 25.3567L22.8679 29.1446C24.3219 30.0222 26.1157 28.7185 25.7298 27.0645L24.0642 19.9262C23.9022 19.2321 24.1381 18.5054 24.6768 18.0387L30.2241 13.2332C31.5079 12.1211 30.8216 10.0124 29.1292 9.86885L21.8297 9.24977C21.1201 9.18959 20.5021 8.74159 20.2242 8.08591L17.3677 1.34647C16.7061 -0.214495 14.4938 -0.214494 13.8322 1.34648L10.9756 8.08591C10.6977 8.74159 10.0797 9.18959 9.37011 9.24977L2.0706 9.86885C0.378226 10.0124 -0.308036 12.1211 0.975713 13.2332L6.52303 18.0387C7.06174 18.5054 7.29761 19.2321 7.13565 19.9262L5.47005 27.0645C5.08412 28.7185 6.87789 30.0222 8.33197 29.1446L14.6078 25.3567Z" fill="#FFC700" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className='mb-4'>{review.review}</p>
                                    <h3 className='text-blue-500 font-semibold'>{review.name}</h3>
                                    <h3 className='mt-2'>{review.designation}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        className="custom-prev bg-gradient-to-tr from-yellow-400 to-fuchsia-600 text-white"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '10px',
                            transform: 'translateY(-50%)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            visibility: isBeginning ? "hidden" : "visible",
                            zIndex: 100
                        }}
                    >
                        &#8249;
                    </button>
                    <button
                        className="custom-next bg-gradient-to-tr from-yellow-400 to-fuchsia-600 text-white"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '10px',
                            transform: 'translateY(-50%)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            visibility: isEnd ? "hidden" : "visible",
                            zIndex: 100
                        }}
                    >
                        &#8250;
                    </button>
                </div>
            </div>
            <FAQ />
            <Footer />
        </div>
    );
}

export default Home;
