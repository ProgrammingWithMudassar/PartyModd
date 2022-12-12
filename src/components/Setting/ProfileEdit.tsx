import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function ProfileEdit({}: Props) {
  return (
    <div className='w-[38.38616714697406vw] xsm:w-[78vw] sm:w-[70vw] md:w-[70vw] ml-[7.3198847262247835vw] xsm:ml-0'>
        <h2 className='font-[700] text-[20px] leading-[32.58px] text-[#231414D4]'>Organisation </h2>
        <p className='mt-[5px] font-[700] text-[16px] leading-[26.06px] text-[#231414D4]'>Details that apply across your events and venues</p>
        <div className='flex flex-col justify-center gap-[10px] items-center mt-[18px] w-[22.59365994236311vw] xsm:w-[90%] sm:w-[80%] md:w-[70%] h-[336px] bg-[#F5F5F5] rounded-[10px]'>
            <img src='./editProfile1.svg' alt=''/>
            <h3 className='text-center font-[700] text-[16px] leading-[26.06px] text-[#231414D4]'>Company Brand Logo or image</h3>
            <p className='text-center w-[230px] font-[400] text-[14px] leading-[22.8px] text-[#231414D4]'>Drag and drop JPEG,PNG no longer than 10 mb</p>
        </div>

        <motion.input whileHover={{scale:1.03}} className='indent-[28px] mt-[102px] font-[400] text-[16px] leading-[26.06px] text-[#231414D4] border-[1px] border-[#231414D4] w-full xsm:w-[90%] sm:w-[80%] md:w-[70%] h-[68px]' placeholder='Organisation name'/>
        <motion.select whileHover={{scale:1.03}} className='indent-[28px] mt-[102px] mb-[39px] font-[400] text-[16px] leading-[26.06px] text-[#231414D4] border-[1px] border-[#231414D4] w-full xsm:w-[90%] sm:w-[80%] md:w-[70%] h-[68px]'>
            <option>Preferred Country</option>
            <option>Preferred Country</option>
        </motion.select>
    </div>
  )
}