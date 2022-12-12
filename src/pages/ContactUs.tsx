import { useScroll, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/General/Footer'
import Button from '../components/General/Button'
import LazyImage from '../components/General/LazyImage'

type Props = {}

export default function ContactUs({ }: Props) {

    const { scrollY } = useScroll()
    const [scrollCounter, setScrollCounter] = useState<number>(0);
    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScrollCounter(latest)
        })
    }, [])
    return (
        <div className='w-[100%]'>
            <motion.nav style={{ boxShadow: "1px 1px 8px #00000020" }} className='fixed transition-all z-[1000] flex gap-[8.24207492795389vw] items-center w-[100%] bg-white'>
                <Link to="/">
                    <img src='./Logo.png' className='ml-[15px] min-w-[85px]' alt='' />
                </Link>
                <motion.ul className='text-[#473a3a] text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[5.244vw] mr-[8.94vw]'>
                    <Link to="/">
                        <motion.li whileHover={{ color: "#FB4A04" }} className="text-inherit">Events</motion.li>
                    </Link>
                </motion.ul>
            </motion.nav>

            <div className='relative top-[92px]'>
                <section className='contactusBackgroundImage relative top-0 h-[514px]'>
                    <div className='relative z-20 pt-[150px] ml-[14.178674351585014vw] xsm:ml-[5vw]'>
                        <h1 className='font-[700] text-[clamp(24px,2.76657060518732vw,48px)] text-[#fff] xsm:leading-[40px] sm:leading-[40px] leading-[80px]'>PartyMode Help Center</h1>
                        <p className='font-[700] text-[clamp(24px,2.76657060518732vw,48px)] text-[#fff] xsm:leading-[40px] sm:leading-[40px] leading-[80px]'>Get Answers and resources</p>
                        <motion.input whileHover={{ scale: 1.03 }} className='border-[3] border-[#f6ccbb] w-[20.634005763688762vw] min-w-[220px] h-[52px] indent-[3.861671469740634vw] !bg-[#fff]' placeholder='Search Help' style={{ backgroundImage: `url("../assets/contactSearch.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "18px center" }}></motion.input>
                    </div>
                </section>

                <section>
                    <div className='flex justify-between items-center w-[86vw] m-auto mt-[59px] gap-[3.7463976945244957vw]'>
                        <div className='min-w-[23.57348703170029vw] min-h-[1px] bg-[#cfcfcf]'></div>
                        <h2 className='text-[#FB4A04] font-[700] text-[clamp(18px,2.07492795389049vw,36px)] leading-[80px] md:leading-[40px] sm:leading-[30px] xsm:leading-[30px] text-center'>Partymode Support Articles</h2>
                        <div className='min-w-[23.57348703170029vw] min-h-[1px] bg-[#cfcfcf]'></div>
                    </div>

                    <div className='w-[86%] m-auto flex sm:flex-col xsm:flex-col mt-[119px] flex-col'>
                        <div className='flex sm:flex-col xsm:flex-col xsm:gap-[100px] sm:gap-[100px]'>
                            <div className='flex-1'>
                                <h3 className='font-[700] text-[clamp(22px,1.8443804034582132vw,32px)] leading-[52px] md:leading-[35px] xsm:leading-[35px] sm:leading-[35px] text-[#473a3a]'>Getting Started</h3>
                                <div className='mt-[17px]'>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <Link to="/help-sub">
                                            <motion.div whileHover={{color:"#FB4A04"}} className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a]'>Account Setup</motion.div>
                                        </Link>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a]'>Creating an event</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a]'>Manage Registration</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a]'>Market and promote</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a]'>Analyze data</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex-1'>
                                <h3 className='font-[700] text-[clamp(22px,1.8443804034582132vw,32px)] leading-[52px] md:leading-[35px] xsm:leading-[35px] sm:leading-[35px] text-[#473a3a] w-[41.671469740634vw] xsm:min-w-[80vw]'>Partymode livestreams and videos on demand</h3>
                                <div className='mt-[0px]'>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>How do I access my livestreams and videos on demand?</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>Watch how to access your media</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>Frequently asked questions about the live stream experience</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>Streaming Recommendations</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>Troubleshooting Guide</p>
                                    </div>
                                    <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[30px] xsm:leading-[30px] sm:leading-[30px] text-[#1977F3] ml-[27px]'>See all articles</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex mt-[142px] sm:flex-col xsm:flex-col xsm:gap-[100px] sm:gap-[100px]'>
                            <div className='flex-1'>
                                <h3 className='font-[700] text-[clamp(22px,1.8443804034582132vw,32px)] leading-[52px] text-[#473a3a]'>Membership </h3>
                                <div className='mt-[20px]'>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[40.80691642651297vw] xsm:min-w-[80vw]'>Can I refund or Cancel my subscribtion ?</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[40.80691642651297vw] xsm:min-w-[80vw]'>I accidentally sent my ticket to the wrong email address. </p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[40.80691642651297vw] xsm:min-w-[80vw]'>I logged into my account on Party mode, but don’t see my ticket there. </p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[40.80691642651297vw] xsm:min-w-[80vw]'>How do I process a payment while on a payment plan?</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[40.80691642651297vw] xsm:min-w-[80vw]'>Why did you charge me twice? </p>
                                    </div>
                                    <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[30px] xsm:leading-[30px] sm:leading-[30px] text-[#1977F3] ml-[27px]'>See all articles</p>
                                </div>
                            </div>


                            <div className='flex-1'>
                                <h3 className='font-[700] text-[clamp(22px,1.8443804034582132vw,32px)] leading-[52px] text-[#473a3a]'>Creators and Promoters</h3>
                                <div className='mt-[20px]'>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>How much does it cost to use  Partymode to sell tickets?</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>Does Partymode support international events?</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>I see a lot of music events on Partymode. Do you support any other artist?</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>Early releases and gated content.</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>How do you log in to Partymode ?</p>
                                    </div>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[30px] sm:leading-[30px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>Can I take a look around the system with a trial username and password</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex mt-[109px] sm:flex-col xsm:flex-col xsm:gap-[100px] sm:gap-[100px]'>
                            <div className='flex-1'>
                                <h3 className='font-[700] text-[clamp(22px,1.8443804034582132vw,32px)] leading-[52px] text-[#473a3a]'>General </h3>
                                <div className='mt-[20px]'>
                                    <div className='flex items-start gap-[9px]'>
                                        <img className="pt-[2%]" src='darkCircle.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[35px] sm:leading-[35px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[80vw]'>Where is Partymode located?</p>
                                    </div>
                                    <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[52px] md:leading-[35px] xsm:leading-[35px] sm:leading-[35px] text-[#1977F3] ml-[27px] mt-[0px]'>See all articles</p>
                                </div>
                            </div>

                            <div className='flex-1'>
                                <h3 className='font-[700] text-[clamp(22px,1.8443804034582132vw,32px)] leading-[52px] md:leading-[35px] xsm:leading-[35px] sm:leading-[35px] text-[#473a3a] h-[65px]'>Need More Support </h3>
                                <Button whileHover={{ background: "transparent", border: "3px solid #FB4A04", color: "#FB4A04" }} width='231px' height='58px' text="Contact us" style={{ background: "#FB4A04", borderRadius: "20px", marginTop: "5px" }} />
                            </div>
                        </div>
                    </div>
                </section>

                <div className='mt-[286px] xsm:mt-[186px] sm:t-[186px]'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}