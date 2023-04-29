import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
type Props = {
 data:any
}

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
            <SocialIcon url={props.data.github} fgColor='currentColor' bgColor='transparent' className=" hover:scale-110 text-[gray] hover:text-[#F7AB0A]/70 transition ease-in-out duration-100" target="_blank" rel="noreferrer"/>
            <SocialIcon url={props.data.linkedin} fgColor='currentColor' bgColor='transparent'className=" hover:scale-110 text-[gray] hover:text-[#F7AB0A]/70 transition ease-in-out duration-100" target="_blank" rel="noreferrer"/>
            <SocialIcon url={props.data.twitter} fgColor='currentColor' bgColor='transparent'className=" hover:scale-110 text-[gray] hover:text-[#F7AB0A]/70 transition ease-in-out duration-100" target="_blank" rel="noreferrer"/>
            <SocialIcon url={props.data.instagram} fgColor='currentColor' bgColor='transparent'className=" hover:scale-110 text-[gray] hover:text-[#F7AB0A]/70 transition ease-in-out duration-100" target="_blank" rel="noreferrer"/>
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
        className='flex flex-row items-center space-x-5 text-gray-400 cursor-pointer self-center px-4'
        
        >
          {/* Contact me*/}
          <a href="#contact">
          <div className='w-[1.68rem] fill-[#808080] hover:scale-110 hover:fill-[#F7AB0A]/70 transition ease-in-out duration-200'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
          </div>
          </a>
          <a href={props.data.resume} target="_blank" rel="noreferrer">
          <div className='w-[1.68rem] fill-[#808080] scale-75 hover:scale-[85%] hover:fill-[#F7AB0A]/70 transition ease-in-out duration-200'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"/></svg>
          </div>
          </a>
       
        </motion.div>
        
    </header>
  )
}

export default Header