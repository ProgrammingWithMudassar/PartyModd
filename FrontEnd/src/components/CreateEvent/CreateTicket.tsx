import React, { useState } from 'react'
import Button from '../General/Button'
import Modal from '../General/Modal';

type Props = {}

export default function CreateTicket({ }: Props) {
    const [showModal1, setShowModal1] = useState<boolean>(false);
    const [showModal2, setShowModal2] = useState<boolean>(false);
    return (
        <>
            <Modal showModal={showModal1} hideShowModalHandler={() => setShowModal1(false)}>
                <div className='xsm:w-[90vw] sm:w-[90vw] w-[645px] xsm:h-auto sm:h-auto  h-[423px] bg-white max-h-[90vh] overflow-auto'>
                    <div className='w-[90%] flex xsm:flex-col sm:flex-col xsm:m-auto sm:m-auto'>
                        <div className='flex justify-center items-center'>
                            <img className='xsm:mt-[20px] sm:mt-[20px] min-w-[15.792507204610951vw]' src='/bro.svg' alt='' />
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-[700] text-[24px] leading-[39.09px] text-[#231414D4] mt-[45px] mb-[7px]'>Create Section</h1>
                            <p className='w-[80%] max-w-[313px] mb-[46px] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] text-center'>Use a section to categories your ticket type and also amount availiable for each section</p>
                            <input className='max-w-[286px] w-[80%] h-[50px] border-[1px] border-[#231414D4] mb-[27px]' />
                            <input className='max-w-[286px] w-[80%] h-[50px] border-[1px] border-[#231414D4]' />
                            <div className='flex gap-[2.881844380403458vw] mt-[20px] mb-[74px] xsm:flex-col-reverse sm:flex-col-reverse'>
                                <Button width='128px' height='41px' text='Cancel' style={{ border: "1px solid #231414D4", borderRadius: "0px", background: "#FB4A043D", color: "#231414D4", fontSize: "20px", lineHeight: "22.8px" }} />
                                <Button width='128px' height='41px' text='Create ' style={{ border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "20px", lineHeight: "22.8px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal showModal={showModal2} hideShowModalHandler={() => setShowModal2(false)}>
                <div className='xsm:w-[95vw] bg-white w-[576.01px] max-h-[90vh] overflow-auto'>
                    <div className='xsm:w-[88vw] w-[476px] m-auto'>
                        <div className='flex items-center justify-between h-[70px] border-b-[1px] border-[#C7C7C7]'>
                            <h1 className='font-[700] text-[24px] leading-[39.09px] text-[#231414D4]'>Add Ticket</h1>
                            <p className=' font-[400] text-[14px] leading-[22.8px] text-[#1977F3]'>Learn More</p>
                        </div>

                        <div className='flex flex-col gap-[15px]'>
                            <div className='flex gap-[50px] mt-[15px]'>
                                <Button width='220px' height='50px' text='Paid' style={{ border: "1px solid #231414D4", borderRadius: "0px", background: "#FB4A043D", color: "#231414D4", fontSize: "20px", lineHeight: "22.8px" }} />
                                <Button width='220px' height='50px' text='Free ' style={{ border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "20px", lineHeight: "22.8px" }} />
                            </div>
                            <div>
                                <label className=' font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Name*</label>
                                <input className='w-full h-[50px] border-[1px] border-[#231414D4]' />
                            </div>
                            <div>
                                <label className=' font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Section*</label>
                                <input className='w-full h-[50px] border-[1px] border-[#231414D4]' />
                            </div>
                            <div className='flex justify-between gap-[2.07492795389049vw]'>
                                <div>
                                    <label className=' font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Add Promo code (Optional)</label>
                                    <input className='w-full h-[50px] border-[1px] border-[#231414D4]' />
                                </div>
                                <div>
                                    <label className=' font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Quantity Limit (Optional)</label>
                                    <input className='w-full h-[50px] border-[1px] border-[#231414D4]' />
                                </div>
                            </div>
                            <div>
                                <label className=' font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Price</label>
                                <input className='w-full h-[50px] border-[1px] border-[#231414D4]' />
                            </div>

                            <div className='flex justify-between gap-[2.07492795389049vw]'>
                                <div className='flex-1 border-[1px] border-[#231414D4]'>
                                    <label className=' font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Sales Start Day</label>
                                    <input type="date" className='w-full ' />
                                </div>
                                <div className='flex-1 border-[1px] border-[#231414D4]'>
                                    <label className='font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Time</label>
                                    <input type="time" className='w-full ' />
                                </div>
                            </div>

                            <div className='flex justify-between gap-[2.07492795389049vw]'>
                                <div className='flex-1 border-[1px] border-[#231414D4]'>
                                    <label className=' font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Sales End Day</label>
                                    <input type="date" className='w-full ' />
                                </div>
                                <div className='flex-1 border-[1px] border-[#231414D4]'>
                                    <label className=' font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Time</label>
                                    <input type="time" className='w-full ' />
                                </div>
                            </div>

                            <div className='flex justify-between mt-[20px] mb-[27px] gap-[2.07492795389049vw]'>
                                <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='222px' height='60px' text='Cancel' style={{ background: "transparent", color: "#231414D4", border: "1px solid #231414D4", borderRadius: "0px", fontSize: "20px", lineHeight: "32.58px" }} />
                                <Button whileHover={{background:"white",color:"#FB4A04",scale:1.03,border:"1px solid #FB4A04"}} width='222px' height='60px' text='Save' style={{ borderRadius: "0px", fontSize: "20px", lineHeight: "32.58px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className='flex flex-col justify-center items-center mt-[151px]'>
                <h1 className='font-[700] text-[24px] leading-[58.64px] text-[#231414D4]'>Create Ticket</h1>
                <img src='/emojione-monotone_ticket1.svg' className='mt-[44px]' alt='' />
                <div className='ml-[4.322766570605188vw] flex gap-[20px] mt-[53px] xsm:flex-col sm:flex-col'>
                    <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} onClick={() => setShowModal1(true)} width='231px' height='57px' text='Create section' style={{ background: "transparent", color: "#FB4A04", border: "1px solid #231414D4", borderRadius: "10px", fontSize: "20px", lineHeight: "32.58px" }} />
                    <Button  whileHover={{background:"white",color:"#FB4A04",scale:1.03,border:"1px solid #FB4A04"}} onClick={() => setShowModal2(true)} width='231px' height='57px' text='Create Ticket' style={{ borderRadius: "10px", fontSize: "20px", lineHeight: "32.58px" }} />
                </div>
                <p className=' font-[400] text-[15px] leading-[24.43px] text-[#473a3a] mt-[55px]'>Create Your events ticket</p>
            </div>
        </>
    )
}