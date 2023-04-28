import React,{useRef} from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';

type Props = {};
type Inputs = {
  name: string,
  email: string,
  subject:string,
  message:string
};

const ContactMe = (props: Props) => {
  
  const form:any = useRef();
  const sendEmail = (e:any) => {
    e.preventDefault();
    emailjs.sendForm('portfolio', 'template_0xdiby9', form.current, 'LJ2tmRAE4H8BfsKr4')
      .then((result) => {
          alert("Email Sent Successfully");
      }, (error) => {
          alert("Something went wrong");
      });
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default">
        Contact
      </h3>

      <motion.div
        initial={{
          scale: 0.5,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          type: "spring",
          duration: 1.5,
        }}
         viewport={{ once: true }}
        className="flex flex-col space-y-10 mt-28 "
      >
        <h4 className="text-2xl md:text-4xl font-semibold text-center cursor-default">
          I got just what you need.{" "}
          <span className="text-[#F7AB0A] cursor-default">Lets Talk</span>
        </h4>

        <div className="space-y-3 ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+918390685016</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Pune</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">sunilbandwork@gmail.com</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col  space-y-2 w-fit  mx-auto " >
          <motion.div
          initial={{
            x:-200,
            opacity:0,
            
          }}
          whileInView={{
            x:0,
            opacity:1,
            
          }}
          transition={{
            type: "spring",
            duration:2
          }}
          viewport={{ once: true }}
          className="flex space-x-1 sm:space-x-2 sm:justify-between  ">
            <input
              placeholder="Name"
              className="contactInput "
              type="text"
              style={{ width: "50%" }}
              name="name"
              required
            />
            <input
              placeholder="Email"
              className="contactInput "
              type="email"
              style={{ width: "50%" }}
              name="email"
              required
            />
          </motion.div>
          <motion.input 
          initial={{
            x:200,
            opacity:0,
            
          }}
          whileInView={{
            x:0,
            opacity:1,
            
          }}
          transition={{
            type: "spring",
            duration:2
          }}
          viewport={{ once: true }}
          placeholder="Subject" className="contactInput" type="text" name="subject" required/>
          <motion.textarea 
          initial={{
            x:-200,
            opacity:0,
            
          }}
          whileInView={{
            x:0,
            opacity:1,
            
          }}
          transition={{
            type: "spring",
            duration:2
          }}
          viewport={{ once: true }}
          placeholder="Message" className="contactInput" name="message" required/>
          <motion.button 
          initial={{
            x:200,
            opacity:0,
            
          }}
          whileInView={{
            x:0,
            opacity:1,
            
          }}
          transition={{
            type: "spring",
            duration:2
          }}
          viewport={{ once: true }}
          type="submit"
          className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold transition duration-200  ease-in-out hover:drop-shadow-[0_0px_4px_#F7AB0A]">
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

  


export default ContactMe;
