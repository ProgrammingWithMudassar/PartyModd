import Crousal from '../components/EventDescriptions/Crousal'
import EventsCards from '../components/Events/EventsCards'
import Footer from '../components/General/Footer'
import Button from '../components/General/Button'
import SearchBar from '../components/General/SearchBar'
import { Link } from "react-router-dom"
import LazyImage from '../components/General/LazyImage'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import './Style.css'

import { ToastContainer } from 'react-toastify';

type Props = {}

export const data = [
    {
        image: "./image1.png",
        imageWidth: "20.576368876080693vw",
        title: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./image2.png",
        imageWidth: "20.576368876080693vw",
        title: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./image3.png",
        imageWidth: "20.576368876080693vw",
        title: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./image4.png",
        imageWidth: "20.576368876080693vw",
        title: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./image2.png",
        imageWidth: "20.576368876080693vw",
        title: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
]

export const data1 = [
    [{
        image: "./festival1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./festival2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./festival3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./festival2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./festival4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },],
    [{
        image: "./electronic1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./electronic2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./electronic3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./electronic2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./electronic4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },],
    [{
        image: "./pop1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./pop2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./pop3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./pop4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./pop3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    ],
    [{
        image: "./music1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./music2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./music3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./music4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./music3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    ],
    [{
        image: "./comedy1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./comedy2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./comedy3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./comedy4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./comedy3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    ],
    [{
        image: "./miami1.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./miami2.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./miami3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./miami4.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    {
        image: "./miami3.png",
        imageWidth: "20.576368876080693vw",
        text: "Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.",
        description: "Thurs Oct 13 at 7:00pm EDT"
    },
    ],
]


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
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

let crousalData = [
    {
        id: "1",
        image: "./EventCrousal1.png",
    },
    {
        id: "2",
        image: "./EventCrousal2.png",
    },
    {
        id: "3",
        image: "./EventCrousal1 copy.png",
    },
]

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
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

const Style = {
    button: {

    }
}

interface User {

}

declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;

interface RequestInit {
  headers?: HeadersInit;
  // other options
}

type HeadersInit = Headers | string[][] | Record<string, string>;

export default function Events({ }: Props) {

    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);


  

    return (
        <>
        <ToastContainer/>
        
        <div className='w-[calc(100vw - 100%)] ' >
            <nav className='fixed z-[1000] bg-[white] flex justify-between items-center w-[100%] xsm:flex-col' style={{ boxShadow: '0 0 5px 1px #919191', padding: '0 35px' }} >
                <div className='flex items-center gap-[3.28vw] xsm:justify-between sm:justify-between xsm:w-full sm:w-full'>
                    <Link to="/">
                        <img src='./Logo.png' className='ml-[8px] min-w-[80px]' alt='' style={{ width: '20px' }} />
                    </Link>
                    <SearchBar whileHover={{ scale: 1.03 }} style={{ flex: "1" }} />
                    <div onClick={() => setShowMobileNav(!showMobileNav)} className='xsm:flex sm:flex cursor-pointer hidden flex-col items-center gap-[5px] mr-[10px]'>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                    </div>
                </div>

                <div className='forMobile'>
                    <ul className='xsm:hidden sm:hidden text-[#493c3c] text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[3.8vw]' style={{ display: 'flex', alignItems: "center" }}>
                        <Link to={"/help-sub"}>
                            <motion.li whileHover={{ color: "#FB4A04" }}>Live Stream</motion.li>
                        </Link>
                        <Link to={"/subscription-and-pricing"}>
                            <motion.li whileHover={{ color: "#FB4A04" }}>Pricing</motion.li>
                        </Link>
                        <Link to={"/contact-us"}>
                            <motion.li whileHover={{ color: "#FB4A04" }}>Help</motion.li>
                        </Link>
                        <Link to="/login">
                            <motion.li whileHover={{ color: "#FB4A04" }}>Log In</motion.li>
                        </Link>
                        <Link to="/signup">
                            <button
                                className="SignInBtn"
                            >
                                {/* <motion.li whileHover={{ color: "#473a3a" }} className='text-[#FB4A04]'></motion.li> */}
                                Sign Up
                            </button>
                        </Link>
                    </ul>
                </div>
            </nav>
            {showMobileNav &&
                <ul style={showMobileNav ? { maxHeight: "1000px" } : { maxHeight: "0px", overflow: "hidden" }} className='transition-all xsm:flex sm:flex flex-col hidden text-[#493c3c] py-[10px] items-center text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] gap-[5.244vw] relative top-[88px]'>
                    <Link to={"/help-sub"}>
                        <motion.li whileHover={{ color: "#FB4A04" }}>Live Stream</motion.li>
                    </Link>
                    <Link to={"/subscription-and-pricing"}>
                        <motion.li whileHover={{ color: "#FB4A04" }}>Pricing</motion.li>
                    </Link>
                    <Link to={"/contact-us"}>
                        <motion.li whileHover={{ color: "#FB4A04" }}>Help</motion.li>
                    </Link>
                    <Link to="/login">
                        <motion.li whileHover={{ color: "#FB4A04" }}>Log In</motion.li>
                    </Link>
                    <Link to="/signup">
                        {/* <motion.li whileHover={{ color: "#473a3a" }} className='text-[#FB4A04]'>Sign Up</motion.li> */}
                        <button
                        >
                            Sign Up
                        </button>
                    </Link>
                </ul>
            }

            <div className='relative top-[85px]'>
                <section className='eventsMainBackground h-[778px] w-[100%] flex relative '>
                    <div className='flex flex-col justify-center absolute top-[39%] left-[65.24495677233429vw] xsm:left-[10vw] sm:left-[50vw]'>
                        <h1 className="mb-[23px] eventTextFont w-[28.587896253602306vw] min-w-[260px] font-[400] text-[clamp(48px,5.53314121037464vw,96px)] xsm:leading-[45px] sm:leading-[45px] leading-[113px] text-[#ffffff]">NOW <span className='eventTextFont text-[clamp(32px,3.6887608069164264vw,64px)]'>IS YOUR</span> TIME</h1>
                        <Link to='/community'>
                            <Button initial={{ scale: 1, backgroundColor: '#FB4A04', color: "#fff" }} whileHover={{ scale: 1.02, backgroundColor: "#ffffff", border: "3px solid #FB4A04", color: "#FB4A04" }} width={"17.75vw"} height={"61px"} text={"Find your next Event"} style={{ minWidth: "240px" }} />
                        </Link>
                    </div>
                </section>

                {/* <div className='bg-white relative top-[-28px] p-[14px] eventDivBoxShadow w-[85.76368876080691vw] m-auto'>
                    <div className='pt-[5px] pb-[18px] pl-[10px] border-l-[2px] border-[#FB4A04]'>
                        <h2 className='mb-[8px] font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[40px] text-[#473a3a]'>Do events help you find connection?</h2>
                        <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] w-[100%] leading-[26px] text-[#473a3a]'>Help us understand how attending events contributes to building social connection by taking a short survey before and after your next event.</p>
                    </div>
                </div> */}

                <section id='checkin' style={{ marginTop: "40px" }}>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className="font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-[#473a3a]">Check out trending categories</h2>
                        <hr className='mt-[23px] w-[232px] !h-[2px] border-[#FB4A04] !p-0'></hr>
                    </div>
                </section>

                <section className='mt-[160px] xsm:w-full sm:w-full md:w-full lg:w-full m-auto w-full'>
                    <EventsCards mainText='Christmas🎅' data={data} />
                </section>

                <section className='mt-[93px] xsm:w-full sm:w-full md:w-full lg:w-full m-auto w-full'>
                    <EventsCards mainText='Festivals' data={data1[0]} />
                </section>

                <section className='mt-[93px] xsm:w-full sm:w-full md:w-full lg:w-full m-auto w-full'>
                    <EventsCards mainText='Electronic' data={data1[1]} />
                </section>

                <section className='mt-[93px] xsm:w-full sm:w-full md:w-full lg:w-full m-auto w-full'>
                    <EventsCards mainText='Pop Culture' data={data1[2]} />
                </section>

                <section className='mt-[93px] xsm:w-full sm:w-full md:w-full lg:w-full m-auto w-full'>
                    <EventsCards mainText='Music Venues' data={data1[3]} />
                </section>

                <section className='mt-[93px] xsm:w-full sm:w-full md:w-full lg:w-full m-auto w-full'>
                    <EventsCards mainText='Music Venues' data={data1[4]} />
                </section>

                <section className='mt-[93px] xsm:w-full sm:w-full md:w-full lg:w-full m-auto w-full'>
                    <EventsCards mainText='Miami' data={data1[5]} />
                </section>

                <section className='mb-[216px]'>
                    <div className='mb-[45px] mt-[60px]     w-[86.1671469740634vw] m-auto'>
                        <h2 className='font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58.64px] text-[#473a3a]'>Other Categories</h2>
                    </div>
                    <div className='overflow-hidden'>
                        <Crousal maxWidth={'728px'} width={"41.95965417867435vw"} settings={settings} crousalData={crousalData} classes="min-w-[280px]" />
                    </div>
                    <div className='w-[86.1671469740634vw] m-auto'>
                        <hr className='mt-[23px] w-[119px] !h-[2px] border-[#FB4A04] !p-0'></hr>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
        </>
    )
}