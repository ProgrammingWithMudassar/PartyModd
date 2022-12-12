import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../General/Button'

type Props = {}

const likes = [
    "Conferences", "Trade shows", "Musicals", "Concerts", "Movies", "Conferences", "Trade shows", "Musicals", "Concerts", "Movies"
]

const communities = [
    "Conferences", "Trade shows", "Musicals", "Concerts", "Movies", "Conferences", "Trade shows", "Musicals", "Concerts", "Movies"
]

export default function Interests({ }: Props) {
    return (
        <div className='w-[calc(100vw - 100%)] flex justify-center items-center flex-col'>
            <div className='flex gap-[14.236311239193084vw] items-center mt-[4.858789625360231vw]'>
                <Link to="/">
                    <img src='./Logo.png' alt='' />
                </Link>
                <h1>Kindly select your event preference </h1>
            </div>

            <div className='flex flex-col'>
                <div className='flex gap-[7.089337175792507vw] mt-[6.628242074927954vw] xsm:flex-col sm:flex-col xsm:w-[80%] xsm:m-auto sm:w-[80%] sm:m-auto'>
                    <h2 className='w-[126px] font-[700] text-[24px] leading-[39.09px] text-[#231414D4]'>Likes</h2>
                    <div>
                        <div className='w-[35.04322766570605vw] xsm:w-full sm:w-full flex flex-wrap gap-[1.037463976945245vw]'>
                            {likes.map((like) => {
                                return (
                                    <Button whileHover={{ background: "#FB4A04", color: "white" }} width='106px' height="38px" text={like} style={{ border: "1px solid #FB4A04", borderRadius: "10px", fontSize: "14px", lineHeight: "22.8px", color: "#000000", background: "rgba(0,0,0,0)" }}></Button>
                                )
                            })}
                        </div>
                        <div className='flex flex-col gap-[7px] font-[400] text-[12px] leading-[19.55px] text-[#000] mt-[59px] xsm:w-full sm:w-full'>
                            <label>Select to add Tags</label>
                            <div className='w-[35.04322766570605vw] xsm:w-full sm:w-full h-[41px] border-[1px] border-[#666666] '></div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[7.089337175792507vw] mt-[6.628242074927954vw] xsm:flex-col sm:flex-col xsm:w-[80%] xsm:m-auto sm:w-[80%] sm:m-auto'>
                    <h2 className='w-[126px] font-[700] text-[24px] leading-[39.09px] text-[#231414D4]'>Comunities</h2>
                    <div>
                        <div className='w-[35.04322766570605vw] xsm:w-full sm:w-full flex flex-wrap gap-[1.037463976945245vw]'>
                            {likes.map((like) => {
                                return (
                                    <Button whileHover={{ background: "#FB4A04", color: "white" }} width='106px' height="38px" text={like} style={{ border: "1px solid #FB4A04", borderRadius: "10px", fontSize: "14px", lineHeight: "22.8px", color: "#000000", background: "rgba(0,0,0,0)" }}></Button>
                                )
                            })}
                        </div>
                        <div className='flex flex-col gap-[7px] font-[400] text-[12px] leading-[19.55px] text-[#000] mt-[59px] xsm:w-full sm:w-full'>
                            <label>Select to add Tags</label>
                            <div className='w-[35.04322766570605vw] xsm:w-full sm:w-full h-[41px] border-[1px] border-[#666666] '></div>
                        </div>
                    </div>
                </div>
                <div className='xsm:w-[80%] xsm:m-auto sm:w-[80%] sm:m-auto flex justify-end'>
                    <Link to="/dashboard">
                        <Button whileHover={{ background: "rgba(0,0,0,0)", color: "#473a3a" }} width='231px' height="58px" text={"Complete"} style={{ alignSelf: "flex-end", margin: "80px 0", border: "3px solid #FB4A04", borderRadius: "20px", fontSize: "14px", lineHeight: "22.8px", color: "#fff", background: "#FB4A04" }}></Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}