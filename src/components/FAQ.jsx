import hero5 from '../assets/hero5.jpg'
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Accordion from '@mui/material/Accordion';
import opened from '../assets/Open Question.png';
import closed from '../assets/Closed Question.png';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const FAQ = () => {
    const [expanded, setExpanded] = useState(null);
    const faqs = useSelector(state => state.faqs);

    return (
        <div className="container mx-auto py-8 bg-black flex flex-col items-center">
            <div className='w-full overflow-hidden flex justify-center items-center'>
                <img className='lg:min-w-full md:min-w-[160%] w-[200%] max-w-[200%]' src={hero5} alt="" srcSet="" />
            </div>
            <div className="max-w-[70%]">
                {faqs?.map((item, index) => (
                    <Accordion
                        key={item.id}
                        expanded={expanded === item.id}
                        onChange={() => setExpanded(expanded === item.id ? null : item.id)}
                        sx={{
                            backgroundColor: "black",
                            boxShadow: "none",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.7)",
                            marginBottom: "16px",
                            paddingTop: index === 0 ? 0 : "1.2rem",
                            paddingBottom: "2rem"
                        }}
                    >
                        <AccordionSummary
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            <div className="w-full flex justify-between items-center sm:text-2xl text-md">
                                <div className="max-w-[90%]">
                                    {item.title}
                                </div>
                                <img className="h-[30px] w-[30px]" src={expanded === item.id ? opened : closed} alt="" />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "white" }}>
                            <div className="text-xl">{item.content}</div>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}

export default FAQ;