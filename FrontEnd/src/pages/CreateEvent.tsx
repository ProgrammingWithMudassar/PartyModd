import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import LazyImage from '../components/General/LazyImage'
import { motion } from "framer-motion"
import SearchBar from '../components/General/SearchBar'

import { useAuth } from '../Context/AuthProvider';
import { useEvent } from '../Context/EventProvider';
import { useParams } from 'react-router-dom';

type Props = {}

export default function CreateEvent({ }: Props) {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
    const {user} = useAuth();
    // const {eventID} = useEvent();
    const {eventID} = useParams();

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
                    <Link to={"/event-dashboard"}>
                        <li className='flex items-center gap-[8px]'>
                            <motion.p whileHover={{ color: "#FB4A04" }} className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>Back</motion.p>
                        </li>
                    </Link>
                    <li className='flex items-center gap-[8px]'>
                    <img className="w-10 h-10 rounded-full" src={user?.user?.picture} alt={user?.user?.username}/>
                        <motion.p whileHover={{ color: "#FB4A04" }} className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>{user?.user?.email}</motion.p>
                    </li>
                </ul>
            </nav>
            {showMobileNav &&
                <ul style={showMobileNav ? { maxHeight: "1000px" } : { maxHeight: "0px", overflow: "hidden" }} className='flex-col-reverse transition-all xsm:flex sm:flex hidden text-[#493c3c] py-[10px] items-center text-[clamp(12px,0.9221902017291066vw,16px)] font-[700] gap-[5.244vw]'>
                    <li className='flex items-center gap-[8px]'>
                        <p className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>Back</p>
                    </li>
                    <li className='flex items-center gap-[8px]'>
                    <img className="w-10 h-10 rounded-full" src={user?.user.picture} alt={user?.user.username}/>
                        <p className='text-[#473a3a] font-[700] text-[14px] leading-[23px] text-center'>{user?.user.email}</p>
                    </li>
                </ul>
            }

            <nav className='w-full h-[63px] bg-[#FB4A04]'>
                <ul className='flex gap-[3.0547550432276656vw] items-center justify-center h-full'>
                    <NavLink end className={({ isActive }) => isActive ? "border-b-[2px] border-white p-[5px] transition-all" : "border-b-[2px] border-transparent p-[5px] transition-all"} to={`/create-event/basic-info/${eventID}`}>
                        <li className='font-[400] text-[15px] xsm:text-[8px] leading-[24.43px] text-[#FFFFFF]'>Basic Info </li>
                    </NavLink>
                    <NavLink end className={({ isActive }) => isActive ? "border-b-[2px] border-white p-[5px] transition-all" : "border-b-[2px] border-transparent p-[5px] transition-all"} to={`/create-event/detail/${eventID}`}>
                        <li className='font-[400] text-[15px] xsm:text-[8px] leading-[24.43px] text-[#FFFFFF]'>Details</li>
                    </NavLink>
                    <NavLink end className={({ isActive }) => isActive ? "border-b-[2px] border-white p-[5px] transition-all" : "border-b-[2px] border-transparent p-[5px] transition-all"} to={`/create-event/online-page-event/${eventID}`}>
                        <li className='font-[400] text-[15px] xsm:text-[8px] leading-[24.43px] text-[#FFFFFF]'>Online Event Page</li>
                    </NavLink>
                    <NavLink end className={({ isActive }) => isActive ? "border-b-[2px] border-white p-[5px] transition-all" : "border-b-[2px] border-transparent p-[5px] transition-all"} to={`/create-event/create-ticket/${eventID}`}>
                        <li className='font-[400] text-[15px] xsm:text-[8px] leading-[24.43px] text-[#FFFFFF]'>Ticket</li>
                    </NavLink>
                    <NavLink end className={({ isActive }) => isActive ? "border-b-[2px] border-white p-[5px] transition-all" : "border-b-[2px] border-transparent p-[5px] transition-all"} to={`/create-event/publish/${eventID}`}>
                        <li className='font-[400] text-[15px] xsm:text-[8px] leading-[24.43px] text-[#FFFFFF]'>Publish</li>
                    </NavLink>
                </ul>
            </nav>


            <Outlet></Outlet>
        </div>
    )

}