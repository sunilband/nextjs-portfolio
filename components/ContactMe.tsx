import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string,
  email: string,
  subject:string,
  message:string
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit} = useForm<Inputs>();
  const Submit: SubmitHandler<Inputs> = formData =>{ 
    
    console.log(formData)
    window.location.href=`mailto:sunilbandwork@gmail?subject=${formData.subject}&body=Hi,my name is ${formData.name}. ${formData.message} (${formData.email})`
  
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

        <div className="space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+918390685016</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">wagholi</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">sunilbandwork@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(Submit)} className="flex flex-col space-y-2 w-fit  mx-auto ">
          <div className="flex space-x-1 sm:space-x-2 sm:justify-between  ">
            <input
              placeholder="Name"
              className="contactInput "
              type="text"
              style={{ width: "50%" }}
              {...register('name')}
            />
            <input
              placeholder="Email"
              className="contactInput "
              type="email"
              style={{ width: "50%" }}
              {...register('email')}
            />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" {...register('subject')}/>
          <textarea placeholder="Message" className="contactInput" {...register('message')}/>
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactMe;
