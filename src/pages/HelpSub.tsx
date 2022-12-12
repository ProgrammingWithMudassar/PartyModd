import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/General/Footer'
import LazyImage from '../components/General/LazyImage'
import { motion } from "framer-motion"

type Props = {}

export default function HelpSub({ }: Props) {
    return (
        <div>
            <motion.nav style={{ boxShadow: "1px 1px 8px #00000020" }} className='fixed transition-all z-[1000] flex gap-[8.24207492795389vw] items-center w-[100%] bg-white'>
                <Link to="/">
                    <img src='./Logo.png'className='ml-[15px] min-w-[85px]' alt='' />
                </Link>
                <motion.ul className='text-[#473a3a] text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[5.244vw] mr-[8.94vw]'>
                    <Link to="/contact-us">
                        <motion.li whileHover={{ color: "#FB4A04" }} className="text-inherit">Help centers</motion.li>
                    </Link>
                    <Link to="/">
                        <motion.li whileHover={{ color: "#FB4A04" }} className="text-inherit">Events</motion.li>
                    </Link>
                </motion.ul>
            </motion.nav>

            <div className='relative top-[86px]'>
                <section className='helpSubBackgroundImage relative top-0 w-full h-[219px]'>
                    <div className='relative z-20'>
                        <h1 className='font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58px] text-[#fff] !pt-[102px] mb-[52px] text-center'>Partymode livestreams and videos on demand </h1>
                    </div>
                </section>

                <section className='w-[86vw] m-auto flex pt-[86px] xsm:flex-col sm:flex-col'>
                    <div className='flex-1'>
                        <p className='font-[700] text-[12px] leading-[20px] text-[#1977F3] w-[42.305475504322764vw] xsm:w-[80vw]'>Solution home / Partymode Support Articles / Partymode livestreams and videos on demand</p>
                        <h2 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a] w-[35.04322766570605vw] xsm:w-[80vw] mb-[17px]'>How do I access my livestreams and videos on demand?</h2>
                        <h3 className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26px] text-[#473a3a] h-[40px]'>Modified on: Saturday, Dec 10, 2022 at 4:36 PM</h3>
                        <div className='max-w-[23.57348703170029vw] min-h-[1px] bg-[#473a3a] mb-[37px]'></div>

                        <div className='w-[35.04322766570605vw] xsm:w-[80vw]'>
                            <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26px] text-[#473a3a] mb-[37px]'>Livestreams and videos on demand are accessed and viewed through Partymode. You can get here through Partymode.com, your Partymode confirmation email, or the event page.</p>
                            <h3 className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a]'>1. Your Partymode Account</h3>
                            <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26px] text-[#473a3a] mb-[23px]'>You can access your livestreams and on demand videos directly through your Partymode account. By logging in at Partymode.com, hover over your initials in the upper right hand corner, click My Media, hover over the event card under your Live Streams or Videos section, and click the play button in the left hand corner on the event card. </p>
                            <motion.div whileHover={{ scale: 1.03 }}>
                                <LazyImage src='helpsubImage.png' classes='mb-[52px]' />
                            </motion.div>
                            <h3 className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] text-[#473a3a] mb-[30px]'>2. Your Email Confirmation</h3>
                            <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26px] text-[#473a3a] mb-[30px]'>You can also access your livestream or videos on demand right from your confirmation email! Click the blue</p>
                            <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26px] text-[#473a3a]'>button that says Go to Livestream under the ticket name and it will direct you to the livestream or video on demand screen.PLEASE NOTE: You must be logged in to your Party account before being able to view the live stream and you must press play on both the event card and streaming page for the livestream or video on demand to begin.</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h3 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a] mt-[40px] mb-[29px] h-[43px]'>Related Articles</h3>
                        <div className='mt-[17px] flex flex-col gap-[5px] xsm:gap-[20px]'>
                            <div className='flex items-start gap-[9px]'>
                                <img className='pt-[1.4%]' src='darkCircle.png' alt='' />
                                <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32px] xsm:leading-[25px] text-[#473a3a]'>How much does it cost to use  Partymode to sell tickets?</p>
                            </div>
                            <div className='flex items-start gap-[9px]'>
                                <img className='pt-[1.4%]' src='darkCircle.png' alt='' />
                                <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32px] xsm:leading-[25px] text-[#473a3a]'>Does Partymode support international events?</p>
                            </div>
                            <div className='flex items-start gap-[9px]'>
                                <img className='pt-[1.4%]' src='darkCircle.png' alt='' />
                                <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32px] xsm:leading-[25px] text-[#473a3a]'>I see a lot of music events on Partymode. Do you support any other artist?</p>
                            </div>
                            <div className='flex items-start gap-[9px]'>
                                <img className='pt-[1.4%]' src='darkCircle.png' alt='' />
                                <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32px] xsm:leading-[25px] text-[#473a3a]'>Early releases and gated content.</p>
                            </div>
                            <div className='flex items-start gap-[9px]'>
                                <img className='pt-[1.4%]' src='darkCircle.png' alt='' />
                                <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32px] xsm:leading-[25px] text-[#473a3a]'>How do you log in to Partymode ?</p>
                            </div>
                            <div className='flex items-start gap-[9px]'>
                                <img className='pt-[1.4%]' src='darkCircle.png' alt='' />
                                <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32px] xsm:leading-[25px] text-[#473a3a]'>Can I take a look around the system with a trial username and password</p>
                            </div>
                            <div className='flex items-start gap-[9px]'>
                                <img className='pt-[1.4%]' src='darkCircle.png' alt='' />
                                <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32px] xsm:leading-[25px] text-[#473a3a]'>Frequently asked questions about the live stream experience</p>
                            </div>
                            <div className='flex items-start gap-[9px]'>
                                <img className='pt-[1.4%]' src='darkCircle.png' alt='' />
                                <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32px] xsm:leading-[25px] text-[#473a3a] h-[43px]'>Streaming Recommendations</p>
                            </div>
                            <div className='flex items-start gap-[9px]'>
                                <img className='pt-[1.4%]' src='darkCircle.png' alt='' />
                                <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32px] xsm:leading-[25px] text-[#473a3a] h-[43px]'>Troubleshooting Guide</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='mt-[149px]'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

