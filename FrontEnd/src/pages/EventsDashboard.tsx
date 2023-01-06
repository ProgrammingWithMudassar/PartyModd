import { Link, NavLink, Outlet } from 'react-router-dom'
import Layout from '../components/General/Layout'
import {motion} from "framer-motion"
import { useAuth } from '../Context/AuthProvider'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

type Props = {}

export default function EventsDashboard({ }: Props) {

    return (
        <Layout>
            <ToastContainer/>
            <div className='w-full pt-[65px] ml-[9.682997118155619vw] xsm:ml-[4vw] sm:ml-[6vw] md:ml-[7vw]'>

                <h1 className='font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58px] text-[#473a3a] ml-[10px]'>Events</h1>

                <div className='transition-all flex gap-[20px] mt-[29px] mb-[84px]'>
                    <NavLink end className={({ isActive }) => isActive ? "border-b-[1px] border-[#473a3a] py-[10px]" : "py-[10px]"} to={"/event-dashboard"}>
                        <motion.button initial={{ opacity: 0, scale: 0.1, }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} className='w-[69.03px] h-[36px] font-[700] text-[16px] leading-[26px] text-[#473a3a]'>Events</motion.button>
                    </NavLink>
                    <NavLink end className={({ isActive }) => isActive ? "border-b-[1px] border-[#473a3a] py-[10px]" : "py-[10px]"} to={"/event-dashboard/order"}>
                        <motion.button initial={{ opacity: 0, scale: 0.1, }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} className='w-[69.03px] h-[36px] font-[700] text-[16px] leading-[26px] text-[#473a3a]'>Orders</motion.button>
                    </NavLink>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </Layout>
    )
}