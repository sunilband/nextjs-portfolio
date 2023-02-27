import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


type Props = {}

const WorkExperience = (props: Props) => {
  const totalCards=[1,2,3,4,5,6]
  return (
    <motion.div
    initial={{
      x:-200,
      scale:0.5,
      opacity:0, 
    }}
    whileInView={{
      x:0,
      scale:1,
      opacity:1,
      
    }}
    transition={{
      type: "spring",
      duration:2
    }}
    viewport={{ once: true }}
     className='h-screen w-screen flex relative flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-20 pb-2'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default '>Experience</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default ">
        Swipe to explore
      </h3>

      <div className="flex items-center w-[100vw] sm:w-auto">
        
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth:300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="top-20 md:top-24 xl:top-28 w-[100%] scale-[0.9] md:scale-[1] xl:scale-[0.85]"
        style={{paddingTop:"10px",paddingBottom:"35px"}}
      >
         {totalCards.map((item,i)=>{
          return (
        <div key={i}>
        <SwiperSlide style={{width:"fit-content",backgroundPosition:"center",backgroundSize:"cover"}}>
          <Card/>
        </SwiperSlide>
        </div>)
            
        })}
         
      </Swiper>
      
      </div>
      
      
    
    
      <div
       className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
      </motion.div>
  )
}

export default WorkExperience