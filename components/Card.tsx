import React from "react";
import useRef from "react";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";

type Props = {};

const Card = (props: Props) => {
  return (
    <article className="group antialiased flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 flex-grow-0 w-[90vw] h-[70vh] sm:w-96 snap-center snap-mandatory p-10 md:p-2 bg-[#292929] opacity-80 hover:opacity-100  transition ease-in-out duration-200 overflow-hidden bottom-0 scale-90 md:w-full/2 hover:scale-[0.92] hover:drop-shadow-xl"
      style={{ height: "100%" }}
    >
      {/* compony logo */}
      <motion.div
        initial={{
          x: -50,
        }}
        transition={{
          type: "spring",
          duration: 3,
        }}
        whileInView={{
          x: 0,
        }}
        viewport={{ once: true }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20210618182605%21Google_%22G%22_Logo.svg"
          alt="company logo"
          className="w-12 h-12 rounded-full xl:w-[50px] xl:h-[50px] object-cover object-center mt-4 group-hover:scale-125 transition ease-in-out duration-300"
          width={1}
          height={1}
        />
      </motion.div>
      

      <div className="px-0 md:px-10 w-[100%] space-y-2 transition ease-in-out duration-300">
        {/*Job title */}
        <h4 className="text-4xl sm:text-3xl font-light cursor-default ">CEO</h4>
        {/* organization name */}
        <p className="font-bold text-3xl sm:text-2xl mt-1  cursor-default ">
          Google
        </p>
        {/* technology */}
        <div className="flex space-x-4 py-2 items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201"
            alt=""
            className="h-8 w-8 rounded-full hover:animate-pulse"
            width={32}
            height={32}
          />

          <Image
            src="https://camo.githubusercontent.com/179d66ab2b0321726c88a586c4ad38802e7113a3c98c6fd3f0156c01c98cfd14/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67"
            alt=""
            className="h-8 w-8 rounded-full hover:animate-pulse"
            width={32}
            height={32}
          />
          <Image
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
            alt=""
            className="h-8 w-8 rounded-full hover:animate-pulse"
            width={32}
            height={32}
          />
        </div>
        {/* dates */}
        <p className="uppercase py-3 text-gray-400 text-base font-medium ">
          started 2022 - ended 2023
        </p>
        {/* summary points */}
        <ul className="space-y-3 text-xl sm:text-lg flex flex-col flex-wrap list-none cursor-default ">
          <li>Hum labo se keh na paye Unse haale dil kabhi</li>
          <li>la la la laaaaa</li>
          <li>aur wo samje nahi ye</li>
          <li>khamoshi kya cheej hai</li>
          <li>ishq kije fir samajiye jindagi kya cheej hai</li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
