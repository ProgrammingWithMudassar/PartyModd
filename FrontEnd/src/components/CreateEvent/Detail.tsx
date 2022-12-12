import React from 'react'
import Button from '../General/Button'

type Props = {}

export default function Detail({ }: Props) {
    return (
        <div className='w-[53.92161383285302vw] xsm:w-[90vw] sm:w-[80vw] m-auto divide-y-2'>
            <div>
                <div className='mt-[44px]'>
                    <div className='flex gap-[25px] items-center'>
                        <img src='/ei_camera.svg' alt='' />
                        <h2 className='font-[700] text-[24px] leading-[39.09px] text-[#231414D4]'>Upload event Image</h2>
                    </div>
                    <div className='ml-[75px] xsm:ml-0 w-[49.56772334293948vw] xsm:w-[100%] sm:w-[80%] bg-[#f0f0f0] flex flex-col justify-center items-center mt-[46px]'>
                        <img className='mt-[106px]' src='/bx_image.svg' alt='' />
                        <p className='mt-[24px] font-[400] text-[16px] leading-[26.06px] text-[#231414D4]'>Drag and drop an image</p>
                        <div className='flex gap-[2.881844380403458vw] xsm:flex-col sm:flex-col mt-[34px] mb-[90px]'>
                            <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='154px' height='43px' text='Upload Image' style={{ border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                            <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='154px' height='43px' text='Upload from canva ' style={{ border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                        </div>
                    </div>
                </div>
                <ul className='flex gap-[38px] xsm:gap-[10px] sm:gap-[10px] ml-[90px] xsm:ml-[20px] mb-[61px] xsm:flex-col sm:flex-col'>
                    <li className='list-disc font-[400] text-[12px] leading-[19.55px] text-[#231414D4]'>Recommended Image size 000px by 0000px</li>
                    <li className='list-disc font-[400] text-[12px] leading-[19.55px] text-[#231414D4]'>Maximum Size 30mb </li>
                    <li className='list-disc font-[400] text-[12px] leading-[19.55px] text-[#231414D4]'>Supported images are JPEG and PNG</li>
                </ul>
            </div>
            <div>
                <div className='mt-[44px]'>
                    <div className='flex gap-[25px] items-center'>
                        <img src='/ooui_text-summary-ltr.svg' alt='' />
                        <h2 className='font-[700] text-[24px] leading-[39.09px] text-[#231414D4]'>Summary</h2>
                    </div>
                    <div className='ml-[75px] xsm:ml-0'>
                        <p>Tell attendees what your event is about in a few words. Attendees will see this when searching for events and at the top of your event page (140 characters max).</p>
                        <textarea className='w-[49.56772334293948vw] xsm:w-[100%] sm:w-[80%] h-[83px] border-[1px] border-[#666666B2] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none' placeholder=''></textarea>
                    </div>
                    <div className='ml-[75px] xsm:ml-0'>
                        <h2 className='font-[700] text-[24px] leading-[39.09px] text-[#231414D4]'>Description</h2>
                        <p>Add more details to your event like your schedule, sponsors, or featured guests. Learn more.</p>
                        <textarea className='w-[49.56772334293948vw] xsm:w-[100%] sm:w-[80%] h-[83px] border-[1px] border-[#666666B2] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none' placeholder=''></textarea>
                    </div>
                    <div className='ml-[75px] xsm:ml-0 flex gap-[2.881844380403458vw] xsm:flex-col sm:flex-col mt-[34px] mb-[90px]'>
                        <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='154px' height='43px' text='Add Image' style={{ border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                        <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='154px' height='43px' text='Add Text' style={{ border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                        <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='154px' height='43px' text='Add video' style={{ border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                    </div>
                </div>
                <div className='ml-[75px] xsm:w-[100%] xsm:items-center xsm:ml-0 flex gap-[20px] justify-end mb-[203px] xsm:flex-col-reverse sm:flex-col-reverse'>
                    <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='229px' height='65px' text='Back' style={{ background: "transparent", color: "#FB4A04", border: "1px solid #231414D4", borderRadius: "10px", fontSize: "24px", lineHeight: "39.09px" }} />
                    <Button whileHover={{background:"white",color:"#FB4A04",scale:1.03,border:"1px solid #FB4A04"}} width='229px' height='65px' text='Save & Continue' style={{ borderRadius: "10px", fontSize: "24px", lineHeight: "39.09px" }} />
                </div>
            </div>
        </div>
    )
}