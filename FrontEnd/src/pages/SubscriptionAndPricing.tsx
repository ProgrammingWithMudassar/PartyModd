import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/General/Footer'
import Button from '../components/General/Button'
import LazyImage from '../components/General/LazyImage'
import SearchBar from '../components/General/SearchBar'
import FAQ from '../components/SubscriptionAndPricing/FAQ'
import { motion } from "framer-motion"
import './Style.css'

type Props = {}

const faqData = [
    {
        id: 1,
        text: 'Can I change my package?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 2,
        text: 'Does Partymode have a free option?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 3,
        text: 'Can I change my package?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 4,
        text: 'What is a "ticket type"?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 5,
        text: 'What are ticketing and registration "essentials"?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 6,
        text: 'Do packages and prices differ by location or currency?',
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
    {
        id: 7,
        text: "What if I don't want to list my event on partymode and partner sites?",
        description: 'Yes! You can change your package at any time. Upgrades will apply immediately to all your live and drafted events, so you can take advantage of Professional product capabilities. Downgrades will apply only to events created after you make the change.'
    },
]

export default function SubscriptionAndPricing({ }: Props) {

    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

    return (
        <main>
            <nav style={{ boxShadow: "1px 1px 8px #00000015", padding: "0 50px" }} className='fixed z-[1000] bg-[white] flex justify-between items-center w-[100%] xsm:flex-col'>
                <div className='flex items-center gap-[3.28vw] xsm:justify-between sm:justify-between xsm:w-full sm:w-full'>
                    <Link to="/">
                        <img alt="" src={"/Logo.png"} className='ml-[8px] min-w-[80px] ' />
                    </Link>
                    <SearchBar whileHover={{ scale: 1.03 }} style={{ flex: "1" }} />
                    <div onClick={() => setShowMobileNav(!showMobileNav)} className='xsm:flex sm:flex cursor-pointer hidden flex-col items-center gap-[5px] mr-[10px]'>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                        <div className='min-w-[29px] min-h-[5px] bg-[#473a3a] rounded-full'></div>
                    </div>
                </div>

                <ul className='xsm:hidden sm:hidden text-[#493c3c] text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] flex gap-[5.244vw]' style={{display:'flex',alignItems:'center'}}>
                    <Link to={"/"}>
                        <motion.li whileHover={{ color: "#FB4A04" }}>Events</motion.li>
                    </Link>
                    {/* <motion.li whileHover={{ color: "#FB4A04" }}>Events</motion.li> */}
                    <Link to={"/help-sub"}>
                        <motion.li whileHover={{ color: "#FB4A04" }}>Live Stream</motion.li>
                    </Link>
                    <motion.li whileHover={{ color: "#FB4A04" }}>Help</motion.li>
                    <Link to="/login">
                        <motion.li whileHover={{ color: "#FB4A04" }}>Log In</motion.li>
                    </Link>
                    <Link to="/signup">
                        {/* <motion.li whileHover={{ color: "#473a3a" }} className='text-[#FB4A04]'>Sign Up</motion.li> */}
                        <button
                            className="SignInBtn">
                            Sign Up
                        </button>
                    </Link>
                </ul>
            </nav>

            <div className='relative top-[92px]'>
                {showMobileNav &&
                    <ul style={showMobileNav ? { maxHeight: "1000px" } : { maxHeight: "0px", overflow: "hidden" }} className='transition-all xsm:flex sm:flex flex-col hidden text-[#493c3c] py-[10px] items-center text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] gap-[5.244vw]'>
                        <Link to={"/"}>
                            <motion.li whileHover={{ color: "#FB4A04" }}>Events</motion.li>
                        </Link>
                        <Link to={"/help-sub"}>
                            <motion.li whileHover={{ color: "#FB4A04" }}>Live Stream</motion.li>
                        </Link>
                        <motion.li whileHover={{ color: "#FB4A04" }}>Help</motion.li>
                        <Link to="/login">
                            <motion.li whileHover={{ color: "#FB4A04" }}>Log In</motion.li>
                        </Link>
                        <Link to="/signup">
                            <motion.li whileHover={{ color: "#473a3a" }} className='text-[#FB4A04]'>Sign Up</motion.li>
                        </Link>
                    </ul>
                }


                <section className='w-full bg-[#ffe7de]'>
                    <div className='flex flex-col items-center overflow-hidden'>
                        <div className='flex justify-center pt-[189px]'>
                            <LazyImage alt="" src={"./SAdesign.png"} classes='relative top-[35%] left-[50%] min-w-[60px] xsm:top-[0%]' />
                            <h1 className='font-[700] text-[clamp(28px,2.76657060518732vw,48px)] leading-[78px] xsm:leading-[55px] text-[#473a3a] relative z-20 xsm:min-w-[80vw]'>Our Membership Pricing Plan</h1>
                            <LazyImage alt="" src={"./SAcircle.png"} classes='relative top-[-10%] left-[-30%] z-10 min-w-[60px] xsm:left-[-80%]' />
                        </div>
                        <p className='xsm:min-w-[80vw] sm:min-w-[50vw] h-[86px] xsm:h-auto xsm:mb-[50px] font-[400] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39.09px] text-[#473a3a] w-[33.487031700288185vw] text-center mt-[41px]'>We are an industry leading company that values honesty,intergrity and efficiency</p>
                    </div>

                    <div className='flex justify-between items-center w-[86vw] m-auto mt-[0px] xsm:w-full sm:w-full md:w-[95%] xsm:flex-col sm:flex-col md:flex-col pb-[92px]'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            whileHover={{ scale: 1.03 }} className='xsm:rounded-[50px] sm:rounded-[50px] md:rounded-[50px] w-[27.838616714697405vw] xsm:min-w-[90vw] sm:min-w-[60vw] h-[582px] bg-white rounded-tr-[50px] rounded-br-[50px] overflow-hidden min-w-[280px]'>
                            <div className='w-full h-[109px] bg-[#473a3a] flex justify-center items-center'>
                                <div className='relative flex items-center'>
                                    <img className='absolute left-[-6%] top-[5%] z-10' src='./square.png' />
                                    <h2 className='relative font-[400] text-[32px] leading-[52px] text-[#fff] z-20'>Starter Plan</h2>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h3 className='font-[400] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58px] text-[#473a3a] mt-[19px] mb-[35px]'>Free</h3>
                                <Button whileHover={{ background: "#473a3a", color: "#ffffff" }} width='22.76657060518732vw' height='55px' text="SignUp For Free" style={{ minWidth: "200px", border: "2px solid #473a3a", background: "#fff", color: "#473a3a", borderRadius: "0px", marginBottom: "19px" }} />

                                <div className='flex flex-col gap-[6px]'>
                                    <div className='flex items-center gap-[15px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>One ticket type (ex. "General Admission")</p>
                                    </div>

                                    <div className='flex items-center gap-[15px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>Ticketing & registration essentials</p>
                                    </div>

                                    <div className='flex items-center gap-[15px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>Organizer mobile app</p>
                                    </div>

                                    <div className='flex items-center gap-[15px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>One ticket type (ex. "General Admission")</p>
                                    </div>

                                    <div className='flex items-center gap-[15px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>Signup for free</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            whileHover={{ scale: 1.03 }} className='w-[27.738616714697405vw] xsm:min-w-[92vw] sm:min-w-[62vw] mb-[20px] h-[724px] xsm:mb-[50px] sm:mb-[50px] md:mb-[50px] bg-white rounded-[50px] overflow-hidden min-w-[280px] mt-[50px]'>
                            <div className='w-full h-[109px] bg-[#FB4A04]'>
                                <div className='w-full h-[109px] bg-[#FB4A04] flex justify-center items-center'>
                                    <div className='flex flex-col justify-center items-center gap-[4px]'>
                                        <div className='min-w-[108px] min-h-[3px] bg-[#fff]'></div>
                                        <h2 className='font-[400] text-[32px] leading-[52px] text-[#fff]'>Membership Plan</h2>
                                        <div className='min-w-[108px] min-h-[3px] bg-[#fff]'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <h3 className='font-[400] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58px] text-[#473a3a] mt-[25px] mb-[33px]'>$24.99per/month</h3>
                                <Button whileHover={{ background: "#fff", color: "#FB4A04", border: "3px solid #FB4A04" }} width='22.76657060518732vw' height='55px' text="SignUp For Free" style={{ minWidth: "200px", background: "#FB4A04", color: "#fff", borderRadius: "0px", marginBottom: "19px" }} />
                                <div className='flex flex-col gap-[6px]'>
                                    <div className='flex items-center gap-[15px] h-[43px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>Everything in Starter plan, plus</p>
                                    </div>

                                    <div className='flex items-center gap-[15px] h-[43px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>Early Bird acccess</p>
                                    </div>

                                    <div className='flex items-center gap-[15px] h-[43px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>Discounts on tickets price</p>
                                    </div>

                                    <div className='flex items-center gap-[15px] h-[43px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>Early releases and gated content.</p>
                                    </div>

                                    <div className='flex items-center gap-[15px] h-[43px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>Access to live streaming for all events</p>
                                    </div>

                                    <div className='flex items-center gap-[15px] h-[43px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>Private shows booking with preferred creators</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            whileHover={{ scale: 1.03 }} className='w-[27.838616714697405vw] xsm:min-w-[90vw] sm:min-w-[60vw] h-[582px]  bg-white xsm:rounded-[50px] sm:rounded-[50px] md:rounded-[50px] rounded-tl-[50px] rounded-bl-[50px] overflow-hidden min-w-[280px]'>
                            <div className='w-full h-[109px] bg-[#473a3a] flex justify-center items-center'>
                                <div className='relative flex items-center'>
                                    <img className='absolute left-[-14%] top-[-15%] z-10' src='./Polygon 2.svg' />
                                    <h2 className='relative font-[400] text-[32px] leading-[52px] text-[#fff] z-20'>Creators Plan</h2>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <h3 className='font-[400] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58px] text-[#473a3a] mt-[19px] mb-[35px]'>$2.5%per/ticket</h3>
                                <Button whileHover={{ background: "#473a3a", color: "#ffffff" }} width='22.76657060518732vw' height='55px' text="SignUp For Free" style={{ minWidth: "200px", border: "2px solid #473a3a", background: "#fff", color: "#473a3a", borderRadius: "0px", marginBottom: "24px" }} />

                                <div className='flex flex-col gap-[6px]'>
                                    <div className='flex items-center gap-[15px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>Artist and promoters will be able to advertise online for free</p>
                                    </div>

                                    <div className='flex items-center gap-[15px]'>
                                        <img className='self-start mt-[2.5%]' src='./tick.png' alt='' />
                                        <p className='font-[400] text-[clamp(14px,1.1527377521613833vw,20px)] w-[23.054755043227665vw] xsm:min-w-[60%] sm:min-w-[80%] xsm:w-full sm:w-full leading-[32px] text-[#473a3a] '>Partymode will take a ticket fee of $2.5% for each ticket.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section id='faq' className='w-[86vw] flex m-auto pt-[97px] xsm:flex-col sm:flex-col md:flex-col'>
                    <div className='flex-2 flex flex-col'>
                        <h2 className='font-[700] text-[clamp(24px,2.07492795389049vw,36px)] leading-[58px] xsm:leading-[38px] text-[#473a3a]'>FAQs</h2>
                        <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26px] text-[#473a3a] mt-[27px] mb-[112px] xsm:mt-[17px]'>Everything you need to know about Party mode.</p>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className='' src='./rafiki.png' alt=''></motion.img>
                    </div>
                    <div className='flex-1'>
                        {faqData.map((data) => {
                            return (
                                <FAQ text={data.text} description={data.description} />
                            )
                        })}
                    </div>
                </section>
                <div className='mt-[234px]'>
                    <Footer />
                </div>
            </div>
        </main>
    )
}