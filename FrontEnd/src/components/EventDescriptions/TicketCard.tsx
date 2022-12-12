import LazyImage from "../General/LazyImage"
import { motion } from "framer-motion";

type Props = {
  id: string,
  image: string,
  text: string,
  price: string,
  priceDescription: string | null,
  icon: string,
  modalHandler: any
}

export default function TicketCard({ id, image, text, price, priceDescription, icon, modalHandler }: Props) {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.01 }} key={id} className='shadow-md md:justify-center flex xsm:flex-col w-[42.305vw] xl:w-[41vw] lg:w-[41vw] md:w-[41vw] sm:w-[80vw] xsm:w-[90vw] md:min-w-[70%]'>
      <LazyImage alt="" src={image} classes="w-[13.314vw] xsm:min-w-[100%] min-w-[231px]" />
      <div className="flex flex-1">
        <div className='pl-[1.15vw] flex-1 flex flex-col h-[100%] bg-[#fed4c3] sm:flex-0'>
          <h3 className='mt-[13px] font-[400] leading-[33px] text-[clamp(14px,1.1527377521613833vw,20px)] text-[#231414]'>{text}</h3>
          <h2 className='mt-[12px] font-[700] leading-[53px] xsm:flex xsm:flex-col text-[32px] text-[#231414]'>
            {price}
            {priceDescription !== null &&
              <span className='ml-[0.922vw] font-[400] leading-[33px] text-[clamp(14px,1.1527377521613833vw,20px)] text-[#231414]'>{priceDescription}</span>
            }
          </h2>
        </div>
        <div onClick={()=> modalHandler()} className='cursor-pointer flex justify-center items-center w-[4.43vw] bg-[#FB4A04] xsm:min-w-[77px] sm:min-w-[55px] md:min-w-[60px]'>
          <LazyImage  alt="" src={icon} />
        </div>
      </div>
    </motion.div>
  )
}