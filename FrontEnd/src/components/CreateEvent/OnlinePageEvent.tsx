import React from 'react'
import Button from '../General/Button'
import { useNavigate, useParams } from 'react-router-dom'
type Props = {}

export default function OnlinePageEvent({ }: Props) {
    const {eventID} = useParams()
    const navigate = useNavigate();

    const handleSubmit = async () => {
        navigate(`/create-event/create-ticket/${eventID}`)

    }


    return (
        <div className='w-[58.96829971181556vw] sm:w-[80vw] xsm:w-[90vw] m-auto '>
            <div className='divide-y-2'>
                <div className='flex mt-[24px] xsm:flex-col sm:flex-col xsm:gap-[50px] sm:gap-[50px]'>
                    <div>
                        <h1 className='font-[700] text-[36px] xsm:w-full sm:w-full leading-[58.64px] text-[#231414D4]'>Attendee Events Page</h1>
                        <p className='w-[34.87031700288185vw] xsm:w-full sm:w-full font-[400] text-[15px] leading-[24.43px] text-[#000000] mt-[20px]'>Attendees will join your online event through your virtual venue.Use this space to embed your Zoom video and share exclusive content. We'll direct your ticket holders to this page from your event listing and in reminder emails.</p>
                    </div>
                    <div><img src='/cuate.svg' alt='' /></div>
                </div>
                <div className='flex mt-[24px] justify-between pt-[78px] xsm:flex-col sm:flex-col md:flex-col xsm:gap-[40px] sm:gap-[40px] md:gap-[40px]'>
                    <div className='relative w-[27.838616714697405vw] min-h-[342px] xsm:w-full sm:w-full md:w-full rounded-[20px] border-[1px] border-[#D9D9D9]'>
                        <img className='absolute top-0 left-0 z-10' src='/Subtract1.svg' alt=''></img>
                        <div className='w-[90%] m-auto mt-[33px]'>
                            <div className='flex gap-[1.9596541786743515vw] items-center'>
                                <img className='relative z-[1000]' src='/carbon_ibm-cloud-direct-link-2-connect.svg' alt='' />
                                <h2 className='font-[700] text-[20px] leading-[32.58px] text-[#000000]'>Add live video or audio</h2>
                            </div>
                            <p className=' font-[400] text-[15px] leading-[24.43px] text-[#473a3a] mt-[55px]'>Connect with Zoom to embed your event within your virtual venue, or link to another video or audio service. Use  to manage when your video or audio is available and who can access it.</p>
                            <div className='flex justify-between items-center mt-[28px] mb-[39px]'>
                                <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='191px' height='50px' text='Zoom' style={{ border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                                <p className=' font-[400] text-[15px] leading-[24.43px] text-[#1977F3] '>Link another service provider</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-[27.838616714697405vw] min-h-[342px] xsm:w-full sm:w-full md:w-full rounded-[20px] border-[1px] border-[#D9D9D9]'>
                        <img className='absolute top-0 left-0 z-10' src='/Subtract.svg' alt=''></img>
                        <div className='w-[90%] m-auto mt-[33px]'>
                            <div className='flex gap-[1.9596541786743515vw] items-center'>
                                <img className='relative z-[1000]' src='/icon-park-outline_caution.svg' alt='' />
                                <h2 className='font-[700] text-[20px] leading-[32.58px] text-[#000000]'>Share additional content</h2>
                            </div>
                            <p className=' font-[400] text-[15px] leading-[24.43px] text-[#473a3a] mt-[55px] mb-[169px]'>Include any resources or instructions your attendees may need for your event.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ml-[75px] flex gap-[20px] justify-end mb-[203px] mt-[103px] sm:flex-col-reverse xsm:flex-col-reverse sm:items-center xsm:items-center sm:ml-0 xsm:ml-0'>
                <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='229px' height='65px' text='Back' style={{minWidth:"200px", background: "transparent", color: "#FB4A04", border: "1px solid #231414D4", borderRadius: "10px", fontSize: "24px", lineHeight: "39.09px" }} />
                <Button  onClick={handleSubmit} whileHover={{background:"white",color:"#FB4A04",scale:1.03,border:"1px solid #FB4A04"}} width='229px' height='65px' text='Save & Continue' style={{minWidth:"200px", borderRadius: "10px", fontSize: "24px", lineHeight: "39.09px" }} />
            </div>
        </div>
    )
}