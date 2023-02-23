import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default ">
        Projects
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default ">
        Swipe to explore
      </h3>
      {/* projects */}

      <motion.div
        initial={{
          y: 200,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: 2,
        }}
        viewport={{ once: true }}
      
        className="relative w-full flex overflow-y-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-500  scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen z-20 "
            key={i}
          >
            <Image
              src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
              priority={true}
              alt=""
              className="w-40"
              width={160}
              height={160}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-3xl text-center">
              <h4 className="text-4xl font-semibold flex flex-col cursor-default">
                Project {i + 1} of {projects.length}:
                <span className="text-4xl font-semibold cursor-default">Netflix clone</span>
              </h4>
              <p className="text-lg text-justify cursor-default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, cum pariatur! Sed similique atque et reiciendis
                veniam dolorum architecto molestias.
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* background line */}
      {/* <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" /> */}
    </div>
  );
};

export default Projects;
