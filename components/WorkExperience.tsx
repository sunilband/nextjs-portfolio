import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

type Props = {}

const WorkExperience = (props: Props) => {
  const totalCards=[1,2,3,4,5,6]
  return (
    <div
     className='h-screen flex relative  flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-20 overflow-hidden'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default '>Experience</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default ">
        Swipe to explore
      </h3>
      
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
      className="w-full xl:w-[80%] h-[70vh] sm:h-[78vh] flex space-x-2 overflow-x-scroll overflow-y-hidden  snap-x snap-mandatory z-20 items-start self-end mt-24 overflow-hidden scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-500  scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
        {totalCards.map((item,i)=>{
          return <>
            <Card/>
            </>
        })}
     
      </motion.div>
    
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
      </div>
  )
}

export default WorkExperience