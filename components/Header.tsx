import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
        <motion.div
        initial={{
          x:-500,
          opacity:0,
          scale:0.5
        }} 
        animate={{
          x:0,
          opacity:1,
          scale:1
        }}
        transition={{
          type: "spring",
          duration:1.5
        }}
        className='flex flex-row items-center group hover:fill-[#F7AB0A]/40'>
            {/* Social icons */}
            <SocialIcon url="https://github.com/sunilband" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://www.linkedin.com/in/sunil-band" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://twitter.com/sunillogic" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://www.instagram.com/chaichopath/" fgColor='gray' bgColor='transparent'/>
        </motion.div>

        <motion.div
        initial={{
          x:+500,
          opacity:0,
          scale:0.5
        }} 
        animate={{
          x:0,
          opacity:1,
          scale:1
        }}
        transition={{
          type: "spring",
          duration:2
        }}
        className='flex flex-row items-center text-gray-400 cursor-pointer'>
          {/* Contact me*/}
         
          <SocialIcon network='email' fgColor='gray' bgColor='transparent'/>
          <p className='uppercase hidden md:inline-flex text-gray-400 cursor-pointer'>Get in touch !</p>
       
        </motion.div>
    </header>
  )
}

export default Header