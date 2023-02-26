import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
type Props = {}

const Header = (props: Props) => {
 

  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-40 xl:items-center p-5  '>
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
        className='flex flex-row items-center'>
            {/* Social icons */}
            <SocialIcon url="https://github.com/sunilband" fgColor='currentColor' bgColor='transparent' className=" hover:scale-110 text-[gray] hover:text-[#F7AB0A]/70 transition ease-in-out duration-200"/>
            <SocialIcon url="https://www.linkedin.com/in/sunil-band" fgColor='currentColor' bgColor='transparent'className=" hover:scale-110 text-[gray] hover:text-[#F7AB0A]/70 transition ease-in-out duration-200"/>
            <SocialIcon url="https://twitter.com/sunillogic" fgColor='currentColor' bgColor='transparent'className=" hover:scale-110 text-[gray] hover:text-[#F7AB0A]/70 transition ease-in-out duration-200"/>
            <SocialIcon url="https://www.instagram.com/chaichopath/" fgColor='currentColor' bgColor='transparent'className=" hover:scale-110 text-[gray] hover:text-[#F7AB0A]/70 transition ease-in-out duration-200"/>
        </motion.div>
        
        
        <motion.a
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
        className='flex flex-row items-center space-x-5 text-gray-400 cursor-pointer self-center px-4'
        href="#contact"
        >
          {/* Contact me*/}
          <div className='w-[1.68rem] fill-[#808080] hover:scale-110 hover:fill-[#F7AB0A]/70 transition ease-in-out duration-200'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
          </div>
          {/* <SocialIcon className="cursor-pointer" network='email' fgColor='gray' bgColor='transparent' /> */}
          <p className='uppercase hidden md:inline-flex text-gray-400 cursor-pointer'>Get in touch !</p>
       
        </motion.a>
        
    </header>
  )
}

export default Header