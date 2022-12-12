import {motion} from "framer-motion"

type Props={
  id:string,
  heading:string,
  text:string
}

export default function ContactBar({heading,text}: Props) {
  return (
    <motion.div initial={{color:"#473a3a"}} whileHover={{scale:1.01}} className='xsm:min-w-[80vw] shadow-md flex justify-between items-center px-[23px] my-[6px] w-[71.296%] min-w-[260px] h-[74px] bg-[#fed4c3] m-auto'>
      <motion.h2  className='font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[33px] xsm:leading-[15px] text-inherit'>{heading}</motion.h2>
      <motion.p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26px] text-inherit'>{text}</motion.p>
    </motion.div>
  )
}