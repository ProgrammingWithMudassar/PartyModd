import React from 'react'
import Slider from "react-slick";
import { useRef } from 'react';
import LazyImage from '../General/LazyImage';
import {motion} from "framer-motion"

type Props={
  crousalData:{
    id:string,
    image:string
  }[],
  settings:{
    dots: boolean,
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number
  },
  maxWidth:string,
  width:string,
  style?:any,
  classes?:string
}

export default function Crousal({ crousalData, settings,maxWidth,width,style, classes}: Props) {
    const slider1Arrow: any = useRef();

    return (
        <>
        <Slider {...settings}>
          {crousalData.map((data:any)=>{
                return (
                <motion.div whileHover={{scale:1.01}} key={data.id} className="shadow-md xsm:flex xsm:justify-center">
                    <LazyImage alt="" src={data.image} style={{maxWidth ,width, ...style }} classes={classes}/>
                </motion.div>)
            })}
        </Slider>
      </>
    )
}