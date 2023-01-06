import React from 'react'
import LazyImage from '../General/LazyImage'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import Slider from 'react-slick';

type Props = {
    mainText: string,
    data: {
        image: string,
        imageWidth: string,
        text: string,
        description: string,
    }[]
}

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 2000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1129,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 697,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
};

export default function EventsCards({ mainText, data }: Props) {
    const navigate = useNavigate();
    return (
        <div className='m-auto w-[86.1671469740634vw]'>
            <div className='flex justify-between'>
                <h3 className='font-[700] text-[clamp(22px,1.8443804034582132vw,32px)] leading-[52.13px] text-[#473a3a]'>{mainText}</h3>
                <motion.button initial={{ opacity: 0, scale: 0.1, backgroundColor: '#ffffff00' }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        delay: 0.1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} whileHover={{ scale: 1.09, backgroundColor: "#FB4A04", color: "#fff" }} className='w-[9.855907780979827vw] min-w-[120px] h-[53px] border-2 border-[#FB4A04] font-[400] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] text-[#473a3a]'>See More</motion.button>
            </div>
            <Slider {...settings} className='flex justify-between mt-[25px] flex-wrap xsm:justify-center sm:justify-center md:justify-center lg:justify-center xsm:gap-[5vw] sm:gap-[5vw] md:gap-[5vw] lg:gap-[5vw]'>
                {data.map((d, index) => {
                    return (
                        <motion.div onClick={() => navigate("/event-description")} whileHover={{ scale: 1.01 }} key={index} className="xsm:mb-[40px] cursor-pointer">
                            <div className='relative xsm:min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[320px] w-[20.576368876080693vw]'>
                                <motion.div initial={{ opacity: 0, scale: 0.1, backgroundColor: '#ffffff00' }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.1 + (index + 0.2) / 100,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}>
                                    <LazyImage alt="" src={d.image} width={d.imageWidth} classes="shadow-md rounded-[30px] xsm:min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[320px] w-[20.576368876080693vw]" />
                                </motion.div>
                                <motion.img whileHover={{ scale: 1.05 }} className='cursor-pointer absolute right-0 bottom-[3.2%] w-[48px]' src='./heartIcon.png' alt=''></motion.img>
                            </div>
                            <div>
                                <h3 className='w-[20.576368876080693vw] min-w-[280px] font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32.58px] text-[#473a3a]'>{d.text}</h3>
                                <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#473a3a]'>{d.description}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </Slider>
        </div>
    )
}