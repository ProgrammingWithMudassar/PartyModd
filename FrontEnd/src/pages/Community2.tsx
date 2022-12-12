import React, { useState } from 'react'
import Button from '../components/General/Button';
import Footer from '../components/General/Footer';
import LazyImage from '../components/General/LazyImage'
import SearchBar from '../components/General/SearchBar'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

type Props = {}

export default function Community2({ }: Props) {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
    return (
        <div>
            <nav className='flex justify-between items-center w-[100%]'>
                <div className='flex items-center gap-[3.28vw] xsm:justify-between sm:justify-between xsm:w-full sm:w-full'>
                    <Link to="/">
                        <img src='./Logo.png' className='ml-[8px] min-w-[80px] ' alt='' />
                    </Link>
                    <SearchBar whileHover={{ scale: 1.03 }} style={{ flex: "1" }} />
                    <div onClick={() => setShowMobileNav(!showMobileNav)} className='xsm:flex sm:flex cursor-pointer hidden flex-col items-center gap-[5px] mr-[10px]'>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                    </div>
                </div>

                <ul className='text-[#493c3c] xsm:hidden sm:hidden text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[1.7867435158501441vw] mr-[7.37vw] items-center'>
                    <Link to={'/'}>
                        <li className='flex items-center gap-[8px]'>
                            <motion.p whileHover={{ color: "#FB4A04" }} className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>Events</motion.p>
                        </li>
                    </Link>
                    <motion.li className='flex items-center gap-[8px]'>
                        <img src='./profile.png' alt='' />
                        <motion.p whileHover={{ color: "#FB4A04" }} className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>partymode@gmail.com</motion.p>
                    </motion.li>
                </ul>
            </nav>
            {showMobileNav &&
                <ul style={showMobileNav ? { maxHeight: "1000px" } : { maxHeight: "0px", overflow: "hidden" }} className='flex-col-reverse transition-all xsm:flex sm:flex hidden text-[#493c3c] py-[10px] items-center text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] gap-[5.244vw]'>
                    <Link to={'/'}>
                        <li className='flex items-center gap-[8px]'>
                            <motion.p whileHover={{ color: "#FB4A04" }} className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>Events</motion.p>
                        </li>
                    </Link>
                    <li className='flex items-center gap-[8px]'>
                        <img src='./profile.png' alt='' />
                        <motion.p whileHover={{ color: "#FB4A04" }} className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>partymode@gmail.com</motion.p>
                    </li>
                </ul>
            }

            <main className='w-[93.8328530259366vw] m-auto mt-[75px]'>
                <div className='w-full h-[105px] bg-[#FB4A040F] flex items-center rounded-[20px]'>
                    <motion.img whileHover={{ scale: 1.03 }} src='./Ellipse 66.png' alt='' className="shadow-md rounded-full w-[4.14985590778098vw] min-w-[48px] ml-[2.0172910662824206vw] mr-[2.5360230547550433vw]" />
                    <SearchBar whileHover={{ scale: 1.03 }} text='What’s on your mind?' style={{ minWidth: "180px", background: "transparent", textIndent: "1.4985590778097984vw", height: "65px", border: "1px solid #FB4A04", borderRadius: "52px", width: "31.585014409221902vw" }} />
                    <div className='w-[2.76657060518732vw] min-w-[28px] ml-[1.037463976945245vw]'>
                        <motion.img initial={{ background: "transparent" }} whileHover={{ scale: 1.03, background: "#fff" }} className="rounded-full" src='./ei_camera.svg' />
                    </div>
                    <div className='w-[2.76657060518732vw] min-w-[28px] ml-[1.037463976945245vw]'>
                        <motion.img initial={{ background: "transparent" }} whileHover={{ scale: 1.03, background: "#fff" }} className="rounded-full" src='./ei_location.svg' />
                    </div>
                </div>


                <div className='flex justify-between mt-[35px] xsm:flex-col sm:flex-col md:flex-col xsm:gap-[20px] sm:gap-[20px] md:gap-[20px]'>
                    <div className='w-[53.94812680115274vw] xsm:w-full sm:w-full md:w-full px-[1.3%]  h-full rounded-[20px] bg-[#FB4A040F]'>
                        <div className='flex items-center  gap-[2.190201729106628vw] mt-[21px] xsm:flex-col'>
                            <motion.img whileHover={{ scale: 1.03 }} className='xsm:self-start shadow-md rounded-[20px]' src='./c21.png' />
                            <div>
                                <h3 className='font-[700] text-[36px] leading-[58.64px] text-[#231414D4]'>Celebrity trends commnity</h3>
                                <div className='flex items-center gap-[12px]'>
                                    <div className='w-[54px]'>
                                        <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-full' src='./Ellipse 66.png' />
                                    </div>
                                    <h6 className='font-[700] text-[24px] leading-[39.09px] text-[#231414D4]'>Jonathan</h6>
                                    <span className='min-w-[3px] min-h-[35px] rounded-full bg-[#FB4A0466]'></span>
                                    <p className='font-[700] text-[24px] leading-[39.09px] text-[#A3A3A3]'>2 mins</p>
                                </div>
                            </div>
                        </div>
                        <p className='font-[700] text-[24px] leading-[39.09px] text-[231414D4] mt-[78px] mb-[17px]'>Oh My Celine dress in the event was awesome</p>
                        <img src='./c22.png' />
                        <div className='flex gap-[2.5936599423631126vw] mt-[36px] mb-[39px] xsm:flex-col'>
                            <div className='w-[31.585014409221902vw] xsm:w-[100%]'>
                                <SearchBar whileHover={{ scale: 1.03 }} text='Comment' style={{ background: "transparent", textIndent: "19px", height: "65px", border: "1px solid #FB4A04", borderRadius: "52px", width: "100%" }} />
                            </div>
                            <div className='flex gap-[0.5763688760806917vw]'>
                                <motion.img initial={{ background: "transparent" }} whileHover={{ scale: 1.03, }} className='rounded-full w-[3.4582132564841497vw] min-w-[30px]' src='./c27.svg' />
                                <motion.img initial={{ background: "transparent" }} whileHover={{ scale: 1.03, }} className='rounded-full w-[3.4582132564841497vw] min-w-[30px]' src='./c28.svg' />
                                <motion.img initial={{ background: "transparent" }} whileHover={{ scale: 1.03, }} className='rounded-full w-[3.4582132564841497vw] min-w-[30px]' src='./c29.svg' />
                                <motion.img initial={{ background: "transparent" }} whileHover={{ scale: 1.03, }} className='rounded-full w-[3.4582132564841497vw] min-w-[30px]' src='./c210.svg' />
                            </div>
                        </div>
                    </div>
                    <div className='w-[38.44380403458213vw] xsm:w-full sm:w-full md:w-full h-full rounded-[20px] bg-[#FB4A040F] divide-y-[5px] divide-[#FB4A043D]'>
                        <div className='px-[1.38328530259366vw] py-[21px]'>
                            <h2 className='font-[700] text-[36px] leading-[58.64px] text-[#231414D4]'>My community</h2>
                        </div>
                        <div className='px-[1.38328530259366vw] pt-[46px]'>
                            <div className='flex flex-col gap-[46px]'>
                                <motion.div whileHover={{ color: "#FB4A04" }} className='flex  gap-[2.9971181556195967vw] xsm:flex-col'>
                                    <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c23.png' />
                                    <div className='flex flex-col justify-around'>
                                        <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                        <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                        <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ color: "#FB4A04" }} className='flex gap-[2.9971181556195967vw] xsm:flex-col'>
                                    <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c24.png' />
                                    <div className='flex flex-col justify-around'>
                                        <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                        <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                        <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ color: "#FB4A04" }} className='flex gap-[2.9971181556195967vw] xsm:flex-col'>
                                    <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c25.png' />
                                    <div className='flex flex-col justify-around'>
                                        <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                        <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                        <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ color: "#FB4A04" }} className='flex gap-[2.9971181556195967vw] xsm:flex-col'>
                                    <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c26.png' />
                                    <div className='flex flex-col justify-around'>
                                        <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                        <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                        <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                    </div>
                                </motion.div>

                                <Button whileHover={{ scale: 1.03, background: "#FB4A04", color: "#fff" }} width='100%' height='94px' text='See All' style={{ marginBottom: "65px", borderRadius: "52px", border: "2px solid #FB4A04", color: "#FB4A04", background: "transparent" }} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex justify-between mt-[53px] xsm:flex-col sm:flex-col md:flex-col xsm:gap-[20px] sm:gap-[20px] md:gap-[20px] gap-[20px]'>

                    <div className='flex-1 h-full rounded-[20px] bg-[#FB4A040F] '>
                        <div className='w-[38.454755043227664vw]  xsm:w-[80%] sm:w-[80%] md:w-[80%]  m-auto divide-y-[5px] divide-[#FB4A043D]'>
                            <div className='px-[1.38328530259366vw] py-[21px]'>
                                <h2 className='font-[700] text-[36px] leading-[58.64px] text-[#231414D4]'>Other Events</h2>
                            </div>
                            <div className='px-[1.38328530259366vw] pt-[46px]'>
                                <div className='flex flex-col gap-[46px]'>
                                    <motion.div whileHover={{ color: "#FB4A04" }} className='flex  gap-[2.9971181556195967vw] xsm:flex-col'>
                                        <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c23.png' />
                                        <div className='flex flex-col justify-around'>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                            <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                        </div>
                                    </motion.div>
                                    <motion.div whileHover={{ color: "#FB4A04" }} className='flex gap-[2.9971181556195967vw] xsm:flex-col'>
                                        <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c24.png' />
                                        <div className='flex flex-col justify-around'>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                            <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                        </div>
                                    </motion.div>
                                    <motion.div whileHover={{ color: "#FB4A04" }} className='flex gap-[2.9971181556195967vw] xsm:flex-col'>
                                        <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c25.png' />
                                        <div className='flex flex-col justify-around'>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                            <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                        </div>
                                    </motion.div>
                                    <motion.div whileHover={{ color: "#FB4A04" }} className='flex gap-[2.9971181556195967vw] xsm:flex-col'>
                                        <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c26.png' />
                                        <div className='flex flex-col justify-around'>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                            <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                        </div>
                                    </motion.div>

                                    <Button whileHover={{ scale: 1.03, background: "#FB4A04", color: "#fff" }} width='100%' height='94px' text='Go to Event page' style={{ marginBottom: "28px", borderRadius: "52px", border: "2px solid #FB4A04", color: "#FB4A04", background: "transparent" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='top-vibe' className='flex-1 h-full rounded-[20px] bg-[#FB4A040F] divide-y-[5px] divide-[#FB4A043D]'>
                        <div className='w-[38.454755043227664vw] xsm:w-[80%] sm:w-[80%] md:w-[80%] m-auto divide-y-[5px] divide-[#FB4A043D]'>
                            <div className='px-[1.38328530259366vw] py-[21px]'>
                                <h2 className='font-[700] text-[36px] leading-[58.64px] text-[#231414D4]'>Events with Top vibes </h2>
                            </div>
                            <div className='px-[1.38328530259366vw] pt-[46px]'>
                                <div className='flex flex-col gap-[46px]'>
                                    <motion.div whileHover={{ color: "#FB4A04" }} className='flex  gap-[2.9971181556195967vw] xsm:flex-col'>
                                        <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c23.png' />
                                        <div className='flex flex-col justify-around'>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                            <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                        </div>
                                    </motion.div>
                                    <motion.div whileHover={{ color: "#FB4A04" }} className='flex gap-[2.9971181556195967vw] xsm:flex-col'>
                                        <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c24.png' />
                                        <div className='flex flex-col justify-around'>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                            <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                        </div>
                                    </motion.div>
                                    <motion.div whileHover={{ color: "#FB4A04" }} className='flex gap-[2.9971181556195967vw] xsm:flex-col'>
                                        <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c25.png' />
                                        <div className='flex flex-col justify-around'>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                            <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                        </div>
                                    </motion.div>
                                    <motion.div whileHover={{ color: "#FB4A04" }} className='flex gap-[2.9971181556195967vw] xsm:flex-col'>
                                        <motion.img whileHover={{ scale: 1.03 }} className='shadow-md rounded-[20px]' src='./c26.png' />
                                        <div className='flex flex-col justify-around'>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>Public Community</p>
                                            <p className='!font-[700] text-[32px] leading-[52.13px] text-[231414D4]'>Musicals</p>
                                            <p className='!font-[400] text-[24px] leading-[39.09px] text-[231414D4]'>43k member</p>
                                        </div>
                                    </motion.div>

                                    <Button whileHover={{ scale: 1.03, background: "#FB4A04", color: "#fff" }} width='100%' height='94px' text='View all' style={{ marginBottom: "28px", borderRadius: "52px", border: "2px solid #FB4A04", color: "#FB4A04", background: "transparent" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <div className='mt-[114px]'>
                <Footer showFooterHeaders={false} />
            </div>
        </div>
    )
}