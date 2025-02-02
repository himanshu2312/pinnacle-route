import FAQ from '../components/FAQ';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import { useSelector } from 'react-redux';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const Services = () => {
    const [expanded, setExpanded] = useState(null);
    const services = useSelector(state => state.services);

    return (
        <div className='bg-black'>
            <Navbar />
            <div className='pb-16 pt-20 flex flex-col items-center bg-white'>
                <div className='flex flex-col items-center w-[70%] md:w-[45%] mb-8 text-black'>
                    <div className='text-4xl font-bold'>Elegant solutions built on proven methodologies</div>
                    <div className='text-xl mt-4'>Lorem ipsum dolor sit amet consectetur. A auctor purus fermentum nec et sed aliquet. Leo amet tellus nec sit nunc phasellus</div>
                </div>
            </div>
            <div className="w-full px-6 md:px-32 py-24 z-10 text-white">
                {services.map((item, index) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 mb-12 items-center"
                    >
                        {(
                            <>
                                <div className="order-1 md:order-none flex flex-col gap-6">
                                    <div className={`text-5xl font-medium text-gray-700`}>{Math.abs(index) < 9 ? `0${index + 1}` : index + 1}</div>
                                    <h2 className="text-4xl font-semibold">{item.title}</h2>
                                    <p className="text-gray-400 text-xl">{item.description}</p>
                                    {item?.pointers?.map((pointer) => {
                                        return (
                                            <Accordion
                                                key={pointer.id}
                                                expanded={expanded ===  pointer.id}
                                                onChange={() => setExpanded(expanded ===  pointer.id ? null :  pointer.id)}
                                                sx={{
                                                    backgroundColor: "black",
                                                    boxShadow: "none",
                                                    background: "#404040"
                                                }}
                                            >
                                                <AccordionSummary
                                                    sx={{
                                                        color: "white"
                                                    }}
                                                >
                                                    <div className="w-full flex justify-between items-center">
                                                        <div className="max-w-[90%]">
                                                            {pointer.title}
                                                        </div>
                                                        <div className='font-semibold'>{expanded === pointer.id ? "x" : "+"}</div>
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails sx={{ color: "white" }}>
                                                    <div className="text-xl">{pointer.description}</div>
                                                </AccordionDetails>
                                            </Accordion>
                                        )
                                    })}
                                </div>
                                <div className="order-2 md:order-none">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <FAQ />
            <Footer />
        </div>
    );
}

export default Services;
