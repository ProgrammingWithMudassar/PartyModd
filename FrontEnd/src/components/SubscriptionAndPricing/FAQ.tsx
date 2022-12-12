import { useState } from 'react';

type Props = {
    text: string,
    description: string
}

export default function FAQ({ text,description }: Props) {
    const [openFAQ, setOpenFaq] = useState<boolean>(false);
    return (
        <div className='mt-[37px]'>
            <div className='flex justify-between items-start'>
                <div className='flex items-center gap-[2.4207492795389047vw]'>
                    <img src='./FAQs.png' alt='' />
                    <h3 className='w-[44.38040345821326vw] xsm:min-w-[80%] xsm:w-full font-[700] text-[clamp(16px,1.38328530259366vw,24px)] leading-[39px] text-[#473a3a]'>{text}</h3>
                </div>
                {
                    openFAQ === false &&
                    <img className='cursor-pointer' src='./ant-design_plus-circle-outlined.svg' alt='' onClick={()=>setOpenFaq(true)}/>
                }
                {
                    openFAQ === true &&
                    <img className='cursor-pointer' src='./akar-icons_circle-minus.svg' alt='' onClick={()=>setOpenFaq(false)}/>
                }
            </div>
            <p style={openFAQ===true?{maxHeight:"1000px",overflow:"auto"}:{maxHeight:"0px",overflow:"hidden",}} className='transition-[max-height] duration-300 font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[26px] text-[#473a3a] w-[42.93948126801153vw] xsm:min-w-[90%] sm:min-w-[90%] md:min-w-[80%] ml-[3.112391930835735vw] mt-[15px]'>{description}</p>
        </div>
    )
}