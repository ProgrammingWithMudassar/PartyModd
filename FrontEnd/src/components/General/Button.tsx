import React from 'react'
import { motion } from "framer-motion"

type Props = {
  width: string,
  height: string,
  text: string,
  style?: any,
  whileHover?: any,
  initial?: any,
  classes?: string,
  onClick?: any
}

export default function Button({ width, height, text, style, initial, whileHover, classes, onClick }: Props) {
  const classes1 = 'rounded-[20px] text-[clamp(16px,1.38328530259366vw,24px)] font-[700] leading-[40px] bg-[#FB4A04] text-white' + " " + classes;
  console.log(classes1)
  return (
    <motion.button initial={{ opacity: 0, scale: 0.1,...initial }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01]
      }} onClick={onClick} whileHover={whileHover} style={{ width: width, height: height, ...style }} className={classes1}>{text}</motion.button>
  )
}