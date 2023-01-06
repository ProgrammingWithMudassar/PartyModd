import React, { useState } from 'react'
import Button from '../General/Button'
import LazyImage from '../General/LazyImage'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

type Props = {}


export default function Signup({ }: Props) {

    const [user, setUser] = useState({
        name: '', email: '', password: ''
    })
    const navigate = useNavigate();


    console.log("Input Field", user)

    let name, value;
    const inputhandler = (e : any) => {
        name = e.target.name;
        value = e.target.value;
        setUser({
            ...user, [name]: value
        })
    }
    const registerUser = async (e : any) => {
        e.preventDefault();
        const userData = await axios.post('http://localhost:8000/api/users/register', user)
        .then(()=>{
            alert("You'r reigstered Successfully.");
            navigate("/login");

        })
        .catch((error)=>{
            alert(error)
        })


    }
    return (

        <section className='w-[calc(100vw - 100%)] h-[100vh] flex xsm:flex-col sm:flex-col'>
            <div className='authBackground flex-1 flex justify-center items-center py-[60px]'>
                <div className='authFliterEffect rounded-[50px] w-[39.76945244956772vw] xsm:min-w-[80vw] sm:min-w-[60vw] h-[331px] flex justify-center items-center ml-[-45px] xsm:ml-0 sm:ml-0 pl-[4.14985590778098vw]'>
                    <h1 className='w-[35vw] xsm:min-w-[70vw] sm:min-w-[50vw] font-[700] text-[48px] leading-[78px] xsm:leading-[40px] sm:leading-[40px] text-[#fff]'>Exclusive <span className='text-[#FB4A04]'>events,</span> <span className='font-[700] text-[32px] leading-[52px]'>priceless memories.</span></h1>
                </div>
            </div>
            <div className='flex-1 bg-[#fff] ml-[-45px] xsm:ml-0 sm:ml-0 rounded-tl-[50px] rounded-bl-[50px]'>
                <div className='w-[52%] xsm:w-[70%] sm:w-[62%] m-auto'>
                    <div className='pt-[38px]'>
                        <Link to="/">
                            <img src='./Logo.png' alt='' />
                        </Link>
                        <h1 className='font-[700] text-[clamp(20px,2.07492795389049vw,36px)] leading-[58px] text-[#473a3a] mt-[13px]'>Signup</h1>
                    </div>

                    <form className='mt-[30px]'>
                        <div className='w-[27.608069164265128vw] flex xsm:flex-col sm:flex-col xsm:w-full sm:w-full gap-[1.2680115273775217vw]'>
                            <div className='flex-1 flex flex-col'>
                                <label className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] ' style={{ fontWeight: '600' }}>Name</label>
                                <input className=' h-[50px] rounded-[10px] border-[1px] border-[#473a3a]' style={{ padding: "0 10px" }} name='name' onChange={inputhandler} value={user.name} />
                            </div>
                            <div className='flex-1 flex flex-col'>
                                <label className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] ' style={{ fontWeight: '600' }}>Email</label>
                                <input className=' h-[50px] rounded-[10px] border-[1px] border-[#473a3a]' style={{ padding: "0 10px" }} name='email' onChange={inputhandler} value={user.email} />
                            </div>
                        </div>
                        <div className='mt-[20px]'>
                            <label className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] mb-[12px]' style={{ fontWeight: '600' }}>Password</label>
                            <input className='w-[27.608069164265128vw] sm:flex-col xsm:w-full sm:w-full h-[50px] block rounded-[10px] border-[1px] border-[#473a3a]' style={{ padding: "0 10px" }} name='password' onChange={inputhandler} value={user.password} />
                            <div className='flex mt-[19px] gap-[10px]'>
                                <input type={"checkbox"} style={{ padding: "0 10px" }} />
                                <label className='text-[12px]'>I have read and agree with <span className='text-[#1977F3]'>terms of services</span> and <span className='text-[#1977F3]'>Privacy policy</span></label>
                            </div>
                        </div>

                        {/* <Link to="/interests"> */}
                        <Button onClick={registerUser} whileHover={{ background: "#fff", border: "3px solid #FB4A04", color: "#FB4A04" }} width="27.608069164265128vw" height='57px' text="SignUp" style={{ background: "#FB4A04", color: "#fff", marginTop: "25px", minWidth: "100%" }}  />
                        {/* </Link> */}

                        <div className='flex justify-between items-center mt-[37px]'>
                            <div className='min-w-[8.247838616714697vw] bg-[#e0e0e0] h-[1px]'> </div>
                            <p className='font-[400] text-[12px] leading-[19px] text-[#918a8a]'>or Signup with</p>
                            <div className='min-w-[8.247838616714697vw] bg-[#e0e0e0] h-[1px]'> </div>
                        </div>

                        <div className='flex justify-between my-[30px]'>
                            <motion.div whileHover={{ scale: 1.05 }} className='rounded-[10px] flex justify-center items-center w-[102px] h-[78px] border-[1px] border-[#D9D9D9]'>
                                <LazyImage alt="" src="/facebook.png" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className='rounded-[10px] flex justify-center items-center w-[102px] h-[78px] border-[1px] border-[#D9D9D9]'>
                                <LazyImage alt="" src="/google.png" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className='rounded-[10px] flex justify-center items-center w-[102px] h-[78px] border-[1px] border-[#D9D9D9]'>
                                <LazyImage alt="" src="/apple.png" />
                            </motion.div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}