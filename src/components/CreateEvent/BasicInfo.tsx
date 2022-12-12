import React from 'react'
import Button from '../General/Button'

type Props = {}

export default function BasicInfo({ }: Props) {
    return (
        <div>
            <div className='w-[50.72161383285302vw] xsm:w-[90vw] sm:w-[80vw] m-auto divide-y-2'>
                <div className='mt-[44px]'>
                    <div className='flex gap-[25px] items-center'>
                        <img src='./createEvent1.svg' alt='' />
                        <h2 className='font-[700] text-[24px] leading-[39.09px] text-[#231414D4]'>Basic Info</h2>
                    </div>
                    <div className='ml-[75px]'>
                        <p className='font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
                        <textarea className='w-[42.305475504322764vw] xsm:w-[100%] sm:w-[90%] h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none mt-[28px]' placeholder='Event Title'></textarea>
                        <textarea className='w-[42.305475504322764vw] xsm:w-[100%] sm:w-[90%] h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none mt-[72px]' placeholder='Organiser'></textarea>
                        <div className="w-[27.723342939481267vw] xsm:w-[100%] sm:w-[90%] mt-[18px]">
                            <p className='font-[400] text-[10px] leading-[16.29px] text-[#231414D4]'>This profile describes a unique organizer and shows all of the events on one page</p>
                            <div className='w-[100%] flex gap-[1.2680115273775217vw] xsm:gap-[20px] sm:gap-[20px] mt-[28px] xsm:flex-col sm:flex-col '>
                                <select className='pl-[18px] outline-none flex-1 min-h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px]'>
                                    <option>Type</option>
                                </select>
                                <select className='pl-[18px] outline-none flex-1 min-h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px]'>
                                    <option>Category</option>
                                </select>
                            </div>
                        </div>

                        <div className='mt-[22px]'>
                            <h2 className='font-[400] text-[24px] leading-[39.09px] text-[#231414D4] mb-[8px]'>Tags</h2>
                            <p className='font-[700] text-[14px] leading-[22.8px] text-[#231414D4]'>Improve discoverability of your event by adding tags relevant to the subject matter</p>
                            <div className='flex gap-[1.1527377521613833vw] xsm:gap-[20px] sm:gap-[20px] pt-[44px] xsm:flex-col sm:flex-col'>
                                <textarea className='w-[35.04322766570605vw] xsm:w-[100%] sm:w-[90%] h-[58px] border-[1px] border-b-0 border-[#231414D4] font-[400] text-[12px] leading-[19.55px] text-[#231414D4] indent-[16px] pt-[8px] outline-none' placeholder='Organiser'></textarea>
                                <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='106px' height='58px' text='Add' style={{ border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[44px] pt-[62px]'>
                    <div className='flex gap-[25px] items-center'>
                        <img src='./map-pin.svg' alt='' />
                        <h2 className='font-[700] text-[24px] leading-[39.09px] text-[#231414D4]'>Location</h2>
                    </div>
                    <div className='ml-[75px]'>
                        <p className='font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Help people in the area discover your event and let attendees know where to show up.</p>
                        <div className='mt-[22px]'>
                            <div className='flex gap-[1.1527377521613833vw] pt-[37px] xsm:flex-col sm:flex-col'>
                                <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='13.314121037463977vw' height='58px' text='Venue' style={{minWidth:"213px", border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                                <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='13.314121037463977vw' height='58px' text='online events ' style={{minWidth:"213px", border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                                <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='13.314121037463977vw' height='58px' text='To be annouced' style={{minWidth:"213px", border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                            </div>
                            <p className='font-[700] text-[14px] leading-[22.8px] text-[#231414D4] mb-[69px] mt-[18px]'>Online events have unique event pages where you can add links to livestreams and more</p>
                        </div>
                    </div>
                </div>
                <div className='mt-[44px] pt-[62px]'>
                    <div className='flex gap-[25px] items-center'>
                        <img src='./clock.svg' alt='' />
                        <h2 className='font-[700] text-[24px] leading-[39.09px] text-[#231414D4]'>Date and time</h2>
                    </div>
                    <div className='ml-[75px]'>
                        <p className='font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Tell event-goers when your event starts and ends so they can make plans to start</p>
                        <div className='mt-[22px]'>
                            <div className='flex gap-[1.1527377521613833vw] pt-[37px] xsm:flex-col sm:flex-col'>
                                <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='13.371757925072046vw' height='58px' text='Single events' style={{ minWidth:"213px", border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                                <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='13.371757925072046vw' height='58px' text='Single events ' style={{ minWidth:"213px", border: "1px solid #231414D4", borderRadius: "0px", background: "transparent", color: "#231414D4", fontSize: "14px", lineHeight: "22.8px" }} />
                            </div>
                            <p className='font-[700] text-[14px] leading-[22.8px] text-[#231414D4] mb-[69px] mt-[18px]'>Single event happens once and can last multiple days</p>
                        </div>

                        <div className='flex gap-[24px] mt-[36px] xsm:flex-col sm:flex-col'>
                            <div className='py-[10px] flex flex-col  pl-[18px] outline-none flex-1 h-[58px] border-[1px] border-[#231414D4] font-[400] text-[12px] leading-[19.55px]'>
                                <label className='font-[700] text-[14px] leading-[22.8px] text-[#231414D4]'>Event start date</label>
                                <input type="date"></input>
                            </div>
                            <div className='py-[10px] flex flex-col pl-[18px] outline-none flex-1 h-[58px] border-[1px] border-[#231414D4] font-[400] text-[12px] leading-[19.55px]'>
                                <label className='font-[700] text-[14px] leading-[22.8px] text-[#231414D4]'>Start Time</label>
                                <input type="time"></input>
                            </div>
                        </div>
                        <div className='flex gap-[24px] mt-[24px] xsm:flex-col sm:flex-col'>
                            <div className='py-[10px] flex flex-col pl-[18px] outline-none flex-1 h-[58px] border-[1px] border-[#231414D4] font-[400] text-[12px] leading-[19.55px]'>
                                <label className='font-[700] text-[14px] leading-[22.8px] text-[#231414D4]'>Event End date</label>
                                <input type="date"></input>
                            </div>

                            <div className='py-[10px] flex flex-col pl-[18px] outline-none flex-1 h-[58px] border-[1px] border-[#231414D4] font-[400] text-[12px] leading-[19.55px]'>
                                <label className='font-[700] text-[14px] leading-[22.8px] text-[#231414D4]'>End Time</label>
                                <input type="time"></input>
                            </div>
                        </div>

                        <div className='flex items-center mt-[30px]'>
                            <input type='checkbox'></input>
                            <label className='font-[700] text-[14px] leading-[22.8px] text-[#231414D4]'>Display start time</label>
                        </div>
                        <div className='flex items-center mt-[17px]'>
                            <input type='checkbox'></input>
                            <label className='font-[700] text-[14px] leading-[22.8px] text-[#231414D4]'>Display End time</label>
                        </div>
                    </div>
                </div>
                <div className='mt-[44px] pt-[62px] flex justify-end mb-[211px]'>
                    <div className='flex gap-[20px] xsm:flex-col sm:flex-col'>
                        <Button whileHover={{background:"#FB4A04",color:"white",scale:1.03}} width='13.198847262247838vw' height='65px' text='Cancel' style={{minWidth:"213px",background:"transparent",color:"#FB4A04",border:"1px solid #231414D4",borderRadius:"10px",fontSize:"24px",lineHeight:"39.09px"}}/>
                        <Button whileHover={{background:"white",color:"#FB4A04",scale:1.03,border:"1px solid #FB4A04"}} width='13.198847262247838vw' height='65px' text='Save & Continue' style={{minWidth:"213px",borderRadius:"10px",fontSize:"24px",lineHeight:"39.09px"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}