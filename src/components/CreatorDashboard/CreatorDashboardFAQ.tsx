import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {motion} from "framer-motion"

type Props = {
  data: {
    id: number,
    heading: string
    text: string,
    link:string
  }
}

export default function CreatorDashboardFAQ({ data }: Props) {

  const [showFaq, setShowFaq] = useState<boolean>(false);

  return (
    <div>
      <div className='flex justify-between px-[17px] py-[30px]'>
        {data.link[0] === "#" ?
        <HashLink smooth to={data.link}>
          <motion.h3 whileHover={{color:"#FB4A04"}} className='font-[700] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] mt-[12px]'>{data.heading}</motion.h3>
        </HashLink>:
        <Link to={data.link}>
          <motion.h3 whileHover={{color:"#FB4A04"}} className='font-[700] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26.06px] text-[#473a3a] mt-[12px]'>{data.heading}</motion.h3>
        </Link>
        }
        <img onClick={() => { setShowFaq(!showFaq) }} className="cursor-pointer" src='./dropdown.svg' />
      </div>
      <div style={showFaq ? { maxHeight: "1000px" } : { maxHeight: "0px", overflow: "hidden" }} className="transition-all">
        <p className='px-[17px] pb-[30px]'>{data.text}</p>
      </div>
    </div>
  )
}