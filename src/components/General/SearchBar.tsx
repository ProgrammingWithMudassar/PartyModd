import {motion} from "framer-motion"

type Props = {
  style?:any,
  text?:string,
  whileHover?:object
}

export default function SearchBar({style,text="Search Events",whileHover}: Props) {
  return (
    <motion.input whileHover={whileHover} style={style} className='inputBackground indent-[5.53vw] xsm:pl-[15px] w-[35.04vw] lg:w-[25.04vw] md:w-[20.04vw] h-[54px] rounded-[20px] border-[3px] border-[#f6ccbb] xsm:w-full' placeholder={text}></motion.input>
  )
}