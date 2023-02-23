import React from 'react'
import { motion } from 'framer-motion'


type Props = {
  directionLeft ?: boolean
  source:string
  proficiency?:number
}

const Skill = ({directionLeft,source}: Props) => {
  console.log(source)
  return (
    <motion.div
    initial={{
      x:directionLeft ? -100: 100,
    }}
    transition={{
      duration:1
    }}
    whileInView={{
      x:1
    }}
    animate={{
      scale:[1,2,2,3,1,1.5,1],
      opacity:[0.1,0.2,0.4,0.8,1.0],
      rotate: 360 
  }}
    viewport={{ once: true }}
    className='group relative flex justify-center items-center my-1 '>
      <img src={source} className="border border-gray-500 object-cover  h-16 w-16 md:w-20 md:h-20 xl:h-24 xl:w-24 rounded-full  filter group-hover:grayscale transition duration-300 ease-in-out shadow-2xl group-hover:drop-shadow-[0_0px_15px_#F7AB0A]" alt="skill image"/>

      <motion.div 
       initial={{
        x:directionLeft ? -100:100 ,
      }}
      transition={{
        duration:1
      }}
      whileInView={{
        x:1
       
      }}
      viewport={{ once: true }}
      className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-24 xl:w-24 rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl font-bold text-black opacity-100 cursor-default '>100%</p>
        </div>
      </motion.div>

     
    </motion.div>
  )
}

export default Skill