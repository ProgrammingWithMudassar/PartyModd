import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Layout from '../components/General/Layout'
import { motion } from "framer-motion"

type Props = {}

export default function Setting({ }: Props) {
    return (
        <Layout>
            <div className='w-full pt-[65px] ml-[6.916426512968299vw] xsm:ml-[4vw] sm:ml-[6vw] md:ml-[7vw]'>
                <h1 className='font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58px] xsm:leading-[30px] text-[#473a3a] ml-[10px] xsm:w-[80%]'>Organisation Settings</h1>
                <div className='overflow-auto mt-[29px] mb-[84px] xsm:w-[74vw] w-full min-w-[220px]'>
                    <div className='transition-all flex gap-[20px] whitespace-nowrap'>
                        <NavLink end className={({ isActive }) => isActive ? "border-b-[1px] border-[#473a3a] py-[10px]" : "py-[10px]"} to={"/setting"}>
                            <motion.button initial={{ opacity: 0, scale: 0.1, }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }} className=' h-[36px] font-[700] text-[16px] leading-[26px] text-[#473a3a]'>Profile Edit</motion.button>
                        </NavLink>
                        <NavLink end className={({ isActive }) => isActive ? "border-b-[1px] border-[#473a3a] py-[10px]" : "py-[10px]"} to={"/setting/invite-team"}>
                            <motion.button initial={{ opacity: 0, scale: 0.1, }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }} className=' h-[36px] font-[700] text-[16px] leading-[26px] text-[#473a3a]'>Invite Team members</motion.button>
                        </NavLink>
                        <NavLink end className={({ isActive }) => isActive ? "border-b-[1px] border-[#473a3a] py-[10px]" : "py-[10px]"} to={"/setting/app-installation"}>
                            <motion.button initial={{ opacity: 0, scale: 0.1, }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }} className=' h-[36px] font-[700] text-[16px] leading-[26px] text-[#473a3a]'>App Installations</motion.button>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </Layout>
    )
}