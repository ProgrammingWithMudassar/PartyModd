import React, { useState } from 'react'
import Footer from '../components/General/Footer'
import Button from '../components/General/Button'
import LazyImage from '../components/General/LazyImage'
import SearchBar from '../components/General/SearchBar'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

type Props = {}

export default function TicketVerifiedEmail({ }: Props) {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

    return (
        <div>
            <nav className='flex justify-between items-center w-[100%]'>
                <div className='flex items-center gap-[3.28vw] xsm:justify-between sm:justify-between xsm:w-full sm:w-full'>
                    <Link to="/">
                        <img alt="" src={"/Logo.png"} className='ml-[8px] min-w-[80px]' />
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


            <div className='flex gap-[48px] items-center ml-[6.916426512968299vw] mt-[100px] xsm:flex-col'>
                <motion.div whileHover={{ scale: 1.03 }} className='flex justify-center items-center w-[155px] h-[149px] rounded-full bg-[#F5F5F5]'>
                    <img src='./profile.svg' alt='' />
                </motion.div>
                <div>
                    <div className='flex gap-[12px] items-center'>
                        <h2 className='font-[700] text-[32px] leading-[52px] text-[#473a3a]'>Name & Surname</h2>
                        <motion.img whileHover={{ scale: 1.09 }} className="cursor-pointer" src='./editIcon.svg' alt='' />
                    </div>
                    <div className='flex'>
                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a]'>0 Orders Booked</p>
                        <pre className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a]'>{" . "}</pre>
                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a]'>2 likes</p>
                    </div>
                </div>
            </div>

            <div className='w-[42.70893371757925vw] xsm:w-[90%] sm:w-[80%] m-auto'>
                <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a] ml-[3%] mt-[85px] mb-[90px]'>Orders</h3>
                <div className='flex flex-col gap-[28px] items-center'>
                    <motion.div whileHover={{ scale: 1.03 }} className='shadow-sm flex gap-[20px] border-[1px] border-[#FB4A0424] w-[41.95965417867435vw] xsm:w-[90%] sm:w-[80%] xsm:flex-col sm:flex-col'>
                        <img className='w-[13.314121037463977vw] xsm:min-w-[100%] sm:min-w-[100%]' src='./verifiedTicket1.png' alt='' />
                        <div className='flex flex-col justify-start'>
                            <h2 className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] w-[20.403458213256485vw] xsm:w-[90%] sm:w-[80%]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                            <div className='flex items-center gap-[23px]'>
                                <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#F2141483]'>Thurs Oct 13 at 7:00pm EDT</p>
                                <img src='./download.png' alt='' />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.03 }} className='shadow-sm flex gap-[20px] border-[1px] border-[#FB4A0424] w-[41.95965417867435vw] xsm:flex-col sm:flex-col xsm:w-[90%] sm:w-[80%]'>
                        <img className='w-[13.314121037463977vw] xsm:min-w-[100%] sm:min-w-[100%]' src='./verifiedTicket2.png' alt='' />
                        <div className='flex flex-col justify-start'>
                            <h2 className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] w-[20.403458213256485vw] xsm:w-[90%] sm:w-[80%'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                            <div className='flex items-center gap-[23px]'>
                                <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#F2141483]'>Thurs Oct 13 at 7:00pm EDT</p>
                                <img src='./download.png' alt='' />
                            </div>
                        </div>
                    </motion.div>

                    <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#1977F3] mt-[63px] mb-[48px]'>See past orders</p>
                </div>
                <div className='w-full h-[2px] bg-[#D9D9D9] mb-[69px]'></div>

                <div>
                    <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a] mb-[49px] ml-[3%]'>Likes</h3>
                    <div className='flex gap-[20px] xsm:flex-col sm:flex-col'>

                        <div className='flex flex-col gap-[49px]'>
                            <motion.img whileHover={{ scale: 1.03 }} initial={{ opacity: 0, scale: 0.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }} className='shadow-xl w-[20.576368876080693vw] xsm:min-w-[100%] sm:min-w-[100%]' src='./likes1.png' alt='' />
                            <div className='flex flex-col justify-center'>
                                <h2 className='font-[700] xsm:min-w-[100%] sm:min-w-[100%] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] w-[20.403458213256485vw]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                                <div className='flex items-center gap-[23px]'>
                                    <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#F2141483]'>Thurs Oct 13 at 7:00pm EDT</p>
                                    <motion.img whileHover={{ scale: 1.09 }} className="cursor-pointer" src='./download.png' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[49px]'>
                            <motion.img whileHover={{ scale: 1.03 }} initial={{ opacity: 0, scale: 0.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }} className='shadow-xl w-[20.576368876080693vw] xsm:min-w-[100%] sm:min-w-[100%]' src='./likes2.png' alt='' />
                            <div className='flex flex-col justify-center'>
                                <h2 className='font-[700] xsm:min-w-[100%] sm:min-w-[100%] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] w-[20.403458213256485vw]'>Hush Haunt 2022 - Oct 13 Hush Haunted Attraction, Westland.</h2>
                                <div className='flex items-center gap-[23px]'>
                                    <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#F2141483]'>Thurs Oct 13 at 7:00pm EDT</p>
                                    <motion.img whileHover={{ scale: 1.09 }} className="cursor-pointer" src='./download.png' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[242px]'>
                <Footer showFooterHeaders={false} />
            </div>
        </div>
    )
}