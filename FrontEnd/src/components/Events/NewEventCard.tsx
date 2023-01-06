import React , {useState} from 'react'
import LazyImage from '../General/LazyImage'
import { filterProps, motion } from "framer-motion";
import { useNavigate } from "react-router-dom"
import Carousel from "react-simply-carousel";

type Props = {
    mainText: string,

    eventData: {
        eventImage: string,
        title :string
        _id: string,
        category: string[]
        
    }[]
}


export default function NewEventsCards({ mainText, eventData }: Props) {
    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState<number>(0);

    
                // {eventData.map((d, index) => {
                //     return (
                //         <motion.div onClick={() => navigate(`/event-description/${d._id}`)} whileHover={{ scale: 1.01 }} key={index} className="xsm:mb-[40px] cursor-pointer">
                //         <div className='relative xsm:min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[320px] w-[20.576368876080693vw]'>
                //             <motion.div initial={{ opacity: 0, scale: 0.1, backgroundColor: '#ffffff00' }}
                //                 whileInView={{ opacity: 1, scale: 1 }}
                //                 viewport={{ once: true }}
                //                 transition={{
                //                     duration: 0.4,
                //                     delay: 0.1 + (index + 0.2) / 100,
                //                     ease: [0, 0.71, 0.2, 1.01]
                //                 }}>
                //                 <LazyImage alt="" src={`http://localhost:8000/storage/${d.eventImage}`} width={"200px"} classes="shadow-md rounded-[30px] xsm:min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[320px] w-[20.576368876080693vw]" />
                //             </motion.div>
                //             <motion.img whileHover={{ scale: 1.05 }} className='cursor-pointer absolute right-0 bottom-[3.2%] w-[48px]' src='./heartIcon.png' alt=''></motion.img>
                //         </div>
                //         <div>
                //             <h3 className='w-[20.576368876080693vw] min-w-[280px] font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32.58px] text-[#473a3a]'>{d.title}</h3>
                //             <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#473a3a]'>{"d.description"}</p>
                //         </div>
                //     </motion.div>
                //     )
                // })}

                return (
                    <div>
                      <Carousel
                        containerProps={{
                          style: {
                            width: "100%",
                            justifyContent: "space-between",
                            userSelect: "text"
                          }
                        }}
                        activeSlideIndex={activeSlide}
                        activeSlideProps={{
                          style: {
                            background: "blue"
                          }
                        }}
                        onRequestChange={setActiveSlide}
                        forwardBtnProps={{
                          children: ">",
                          style: {
                            width: 60,
                            height: 60,
                            minWidth: 60,
                            alignSelf: "center"
                          }
                        }}
                        backwardBtnProps={{
                          children: "<",
                          style: {
                            width: 60,
                            height: 60,
                            minWidth: 60,
                            alignSelf: "center"
                          }
                        }}
                        dotsNav={{
                          show: true,
                          itemBtnProps: {
                            style: {
                              height: 16,
                              width: 16,
                              borderRadius: "50%",
                              border: 0
                            }
                          },
                          activeItemBtnProps: {
                            style: {
                              height: 16,
                              width: 16,
                              borderRadius: "50%",
                              border: 0,
                              background: "black"
                            }
                          }
                        }}
                        itemsToShow={2}
                        speed={400}
                      >
                {eventData?.map((d, index) => {
                    return (
                        <motion.div onClick={() => navigate(`/event-description/${d._id}`)} whileHover={{ scale: 1.01 }} key={index} className="xsm:mb-[40px] cursor-pointer">
                        <div className='relative xsm:min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[320px] w-[20.576368876080693vw]'>
                            <motion.div initial={{ opacity: 0, scale: 0.1, backgroundColor: '#ffffff00' }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 + (index + 0.2) / 100,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}>
                                <LazyImage alt="" src={`http://localhost:8000/storage/${d.eventImage}`} width={"200px"} classes="shadow-md rounded-[30px] xsm:min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[320px] w-[20.576368876080693vw]" />
                            </motion.div>
                            <motion.img whileHover={{ scale: 1.05 }} className='cursor-pointer absolute right-0 bottom-[3.2%] w-[48px]' src='./heartIcon.png' alt=''></motion.img>
                        </div>
                        <div>
                            <h3 className='w-[20.576368876080693vw] min-w-[280px] font-[700] text-[clamp(14px,1.1527377521613833vw,20px)] leading-[32.58px] text-[#473a3a]'>{d.title}</h3>
                            <p className='font-[400] text-[clamp(12px,0.9221902017291066vw,16px)] leading-[33px] text-[#473a3a]'>{"d.description"}</p>
                        </div>
                    </motion.div>
                    )
                })}
                {index}
                      </Carousel>
                    </div>
                  );
        
     
    
}
