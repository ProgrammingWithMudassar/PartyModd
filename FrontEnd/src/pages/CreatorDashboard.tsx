import React from 'react'
import CreatorDashboardFAQ from '../components/CreatorDashboard/CreatorDashboardFAQ'
import Button from '../components/General/Button'
import Layout from '../components/General/Layout'
import LazyImage from '../components/General/LazyImage'
import SearchBar from '../components/General/SearchBar'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

import { useAuth } from '../Context/AuthProvider';


type Props = {}

const data = [
    {
        id: 1,
        heading: "Create your first event",
        text: "We make it easy to plan successful events. Here's how to start!",
        link:"/create-event"
    },
    {
        id: 4,
        heading: "Set up your finances",
        text: "We make it easy to plan successful events. Here's how to start!",
        link:"/subscription-and-pricing"
    },
]

export default function CreatorDashboard({ }: Props) {
    const { user} = useAuth()

    return (
        <Layout>
            <div className='w-full pt-[65px] ml-[12.968299711815561vw] xsm:ml-[4vw] sm:ml-[6vw] flex gap-[7.089337175792507vw] xsm:flex-col sm:flex-col'>
                <div>
                    <h1 className='font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58px] text-[#473a3a] ml-[10px]'>Welcome, <span className='text-[#FB4A04]'> {user.user.username} </span></h1>
                    <div className='border-2 border-[#D9D9D9] rounded-tl-[20px] rounded-tr-[20px] w-[52.04610951008645vw] xsm:w-[90%] sm:w-[80%] px-[21px] divide-y-2 mt-[99px]'>
                        <div className='mb-[40px]'>
                            <h2 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a] mt-[12px]'>Your event checklist</h2>
                            <p className='font-[400] text-[12px] leading-[20px] text-[#473a3a] '>We make it easy to plan successful events. Here's how to start!</p>
                        </div>
                        {data.map((d) => {
                            return (
                                <CreatorDashboardFAQ data={d} />
                            )
                        })}
                    </div>

                    <div className='w-[52.04610951008645vw] xsm:w-[90%] sm:w-[80%] border-2 border-[#D9D9D9] mt-[70px] flex flex-col'>
                        <h2 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a] mt-[30px] mb-[39px] ml-[33px]'>Your next event</h2>
                        <div className='w-full bg-[#fee4d9] flex items-center justify-between pl-[39px] pr-[100px] xsm:px-[10px] xsm:flex-col xsm:items-start sm:px-[10px] sm:flex-col sm:items-start py-[20px]'>
                            <h3 className='font-[700] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] mt-[12px] xsm:mt-0 sm:mt-0'>Nov 18</h3>
                            <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] '>event title</p>
                            <p className='font-[400] text-[14px] leading-[22.9px] text-[#473a3a] '><span className='text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px]'>Draft:</span> start  November 18 at  00:00 ends by 00:00am</p>
                        </div>
                        <Button whileHover={{background:"#fff",border:"3px solid #FB4A04",color:"#FB4A04"}} classes="!max-w-[231px]" width='13.314121037463977vw' height='54px' text="Continue Editing" style={{ borderRadius: "20px", background: "#FB4A04", fontSize: "16px", marginTop: "33px", marginBottom: "17px", alignSelf: "flex-end", marginRight: "23px", minWidth: "60%",  }} />
                    </div>


                    <div id="boost" className='w-[52.04610951008645vw] xsm:w-[90%] sm:w-[80%] border-2 border-[#D9D9D9] mt-[70px] flex flex-col'>
                        <h2 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a] mt-[8px] ml-[33px] xsm:ml-[10px] sm:ml-[10px]'>Boost your Events with liveStream</h2>
                        <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] mt-[25px] ml-[33px] xsm:ml-[10px] sm:ml-[10px]'>Take your marketing to the next level</p>
                        <Link to='/community'>
                        <Button whileHover={{background:"#FB4A04",border:"3px solid #fff",color:"#fff"}} classes={"!max-w-[231px]"} width='13.314121037463977vw' height='54px' text="Vibe check" style={{ borderRadius: "20px", background: "#ffff", border: "3px solid #FB4A04", color: "#FB4A04", fontSize: "16px", marginTop: "31px", marginBottom: "22px", alignSelf: "flex-end", minWidth: "60%",marginLeft:"300px" }} />
                        </Link>
                    </div>

                    <div className='w-[52.04610951008645vw] xsm:w-[90%] sm:w-[80%] border-2 border-[#D9D9D9] mt-[70px] flex flex-col mb-[316px] '>
                        <h2 className='font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a] mt-[8px] ml-[33px] xsm:ml-[10px] sm:ml-[10px]'>Boost your Events with Vibe Check</h2>
                        <div className='flex gap-[74px] justify-center mt-[32px] mb-[30px] xsm:flex-col sm:flex-col '>
                            <motion.div whileHover={{scale:1.03}} className='shadow-lg relative w-[19.654178674351584vw] h-[172px] bg-[#473a3a] rounded-[20px] flex justify-center items-center xsm:w-[90%] sm:w-[80%] xsm:m-auto sm:m-auto'>
                                <h3 className='w-[231px] font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32.58px] text-white'>4 Faqs about setting up your first event</h3>
                                <div className='absolute w-[52px] h-[52px] bg-white flex justify-center items-center rounded-full bottom-[9px] right-[18px]'>
                                    <img className='' src='./arrow.svg' alt='' />
                                </div>
                            </motion.div>
                            <motion.div whileHover={{scale:1.03}} className='shadow-lg relative w-[19.654178674351584vw] h-[172px] bg-[#473a3a] rounded-[20px] flex justify-center items-center xsm:w-[90%] sm:w-[80%] xsm:m-auto sm:m-auto'>
                                <h3 className='w-[231px] font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32.58px] text-white'>4 Faqs about setting up your first event</h3>
                                <div className='absolute w-[52px] h-[52px] bg-white flex justify-center items-center rounded-full bottom-[9px] right-[18px]'>
                                    <img className='' src='./arrow.svg' alt='' />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='w-[20.230547550432277vw] xsm:w-[90%] sm:w-[80%] pt-[160px] xsm:pt-[0px] sm:pt-[0px] flex flex-col xsm:items-center sm:items-center'>
                    <div className='flex justify-center items-center flex-col h-[363px] border-2 border-[#D9D9D9] rounded-tl-[20px] rounded-tr-[20px] w-[20.230547550432277vw] xsm:w-[90%] sm:w-[80%]'>
                    <img className="w-30 h-30 rounded-full" src={user.user.picture} alt={user.user.username}/>
                        <div className='w-full'>
                            <h3 className='mt-[43px] mb-[53px] text-center font-[400] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39.09px] text-[#473a3a]'>{user.user.username}</h3>
                            <div className='flex justify-around w-[70%] m-auto mb-[54px] xsm:flex-col xsm:items-center'>
                                <motion.p whileHover={{color:"#FB4A04"}} className='cursor-pointer font-[400] text-[14px] leading-[22.9px] text-[#1977F3]'>View</motion.p>
                                <motion.p whileHover={{color:"#FB4A04"}} className='cursor-pointer font-[400] text-[14px] leading-[22.9px] text-[#1977F3]'>Edit </motion.p>
                                <motion.p whileHover={{color:"#FB4A04"}} className='cursor-pointer font-[400] text-[14px] leading-[22.9px] text-[#1977F3]'>Copy profile url</motion.p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[20.230547550432277vw]  xsm:w-[90%] sm:w-[80%] h-[429px] creatorDashboardProfileBacgroundImage flex justify-center items-center mt-[28px]'>
                        <div style={{ background: 'rgba(255, 255, 255, 0.3)' }} className='relative w-[18.270893371757925vw] xsm:w-[90%] sm:w-[80%] h-[183px] rounded-[20px] flex text-center items-center'>
                            <h3 className='font-[700] text-[24px] leading-[38.09px] text-[#fff]'>Get more people to attend your event</h3>
                            <div className='absolute z-1000 top-[-5%] right-[-5%]'>
                                <LazyImage src='flash.svg'/>
                            </div>
                        </div>
                    </div>

                    <div className='w-[20.230547550432277vw]  xsm:w-[90%] sm:w-[80%] h-[429px] flex justify-center items-center mt-[50px]'>
                            <div>
                                <LazyImage src='creator-dashboard-image.svg'/>
                            </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}