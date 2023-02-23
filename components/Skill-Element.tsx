import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  directionLeft ?: boolean
  source:string
  proficiency?:number
}

const Skill = ({directionLeft,source}: Props) => {
  console.log(source)
  return (
    <div className='group relative flex cursor-pointer justify-center items-center my-1 '>
      <motion.img 
      initial={{
        x:directionLeft ? -100: 100,
      }}
      transition={{
        duration:1
      }}
      whileInView={{
        x:1
      }}
      src={source} className="border border-gray-500 object-cover  h-16 w-16 md:w-20 md:h-20 xl:h-24 xl:w-24 rounded-full  filter group-hover:grayscale transition duration-300 ease-in-out shadow-2xl group-hover:drop-shadow-[0_0px_15px_#F7AB0A] group-hover:scale-105"/>

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
      className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-24 xl:w-24 rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl font-bold text-black opacity-100'>100%</p>
        </div>
      </motion.div>

     
    </div>
  )
}

export default Skill