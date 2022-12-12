import React, { useState } from 'react'
import Footer from '../components/General/Footer'
import LazyImage from '../components/General/LazyImage'
import SearchBar from '../components/General/SearchBar'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

type Props = {}

export default function ({ }: Props) {

    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

    return (
        <div>
            <nav className='flex justify-between items-center w-[100%]'>
                <div className='flex items-center gap-[3.28vw] xsm:justify-between sm:justify-between xsm:w-full sm:w-full'>

                    <Link to="/">
                        <img src='./Logo.png' className='ml-[8px] min-w-[80px]' alt='' />
                    </Link>
                    <SearchBar whileHover={{ scale: 1.03 }} style={{ flex: "1" }} />
                    <div onClick={() => setShowMobileNav(!showMobileNav)} className='xsm:flex sm:flex cursor-pointer hidden flex-col items-center gap-[5px] mr-[10px]'>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                    </div>
                </div>

                <ul className='text-[#493c3c] xsm:hidden sm:hidden text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[31px] mr-[7.37vw] items-center'>
                    <Link to="/dashboard">
                        <motion.li className='flex items-center gap-[8px]'>
                            <motion.p whileHover={{ color: "#FB4A04" }} className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>Back</motion.p>
                        </motion.li>
                    </Link>
                    <motion.li className='flex items-center gap-[8px]'>
                        <img src='./profile.png' alt='' />
                        <motion.p whileHover={{ color: "#FB4A04" }} className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>partymode@gmail.com</motion.p>
                    </motion.li>
                </ul>
            </nav>

            {showMobileNav &&
                <ul style={showMobileNav ? { maxHeight: "1000px" } : { maxHeight: "0px", overflow: "hidden" }} className='flex-col-reverse transition-all xsm:flex sm:flex hidden text-[#493c3c] py-[10px] items-center text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] gap-[5.244vw]'>
                    <Link to="/dashboard">
                        <motion.li className='flex items-center gap-[8px]'>
                            <motion.p whileHover={{ color: "#FB4A04" }} className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>Back</motion.p>
                        </motion.li>
                    </Link>
                    <motion.li className='flex items-center gap-[8px]'>
                        <img src='./profile.png' alt='' />
                        <motion.p whileHover={{ color: "#FB4A04" }} className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>partymode@gmail.com</motion.p>
                    </motion.li>
                </ul>
            }

            <div className='mt-[100px] ml-[14.351585014409222vw] xsm:ml-[12vw]'>
                <h1 className='font-[700] text-[48px] leading-[78px] text-[#FB4A04] self-start '>Likes</h1>

                <div className='flex gap-[20px] mt-[26px] xsm:flex-col-reverse'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] w-[40.80691642651297vw] xsm:w-[80%]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                        <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#FB4A0483]'>Thurs Oct 13 at 7:00pm EDT</p>
                        <div className='flex items-center gap-[23px]'>
                            <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#473a3a]'>Free</p>
                            <img src='./download.png' alt='' />
                        </div>
                    </div>
                    <motion.div className='' whileHover={{ scale: 1.03 }} initial={{ opacity: 0, scale: 0.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>

                        <LazyImage src='./likes1.png' classes='shadow-xl w-[22.01729106628242vw] min-w-[260px] xsm:w-[80%]' />
                    </motion.div>
                </div>

                <div className='max-w-[63.976945244956774vw] min-h-[2px] bg-[#D9D9D9] my-[55px]'></div>

                <div className='flex gap-[20px] xsm:flex-col-reverse'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] w-[40.80691642651297vw] xsm:w-[80%]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                        <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#FB4A0483]'>Thurs Oct 13 at 7:00pm EDT</p>
                        <div className='flex items-center gap-[23px]'>
                            <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#473a3a]'>Free</p>
                            <img src='./download.png' alt='' />
                        </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.03 }} initial={{ opacity: 0, scale: 0.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <LazyImage src='./likes2.png' classes='shadow-xl w-[22.01729106628242vw] min-w-[260px] xsm:w-[80%]' />
                    </motion.div>
                </div>
            </div>
            <div className='mt-[219px]'>
                <Footer showFooterHeaders={false} />
            </div>
        </div>
    )
}