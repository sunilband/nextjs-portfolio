import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules

import { EffectCards } from "swiper/modules";
import { Pagination, Navigation } from "swiper/modules";

type Props = {
  data: any;
};

const ProjectsMobile = (props: Props) => {
  return (
    <div className="h-screen relative overflow-hidden flex flex-col text-left md:flex-row  justify-center mx-auto items-center z-0 max-w-full ">
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
        className="relative w-full flex items-center justify-center overflow-y-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-500  scrollbar-thumb-rounded-full scrollbar-track-rounded-full "
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          loop={true}
        
          className="mySwiper w-[320px] h-[450px] mt-24"
        >
          {props.data.projectsData.map((item: any, key: any) => {
            return (
              <SwiperSlide key={key}>
                <div className="flex flex-col  rounded-md h-full w-full bg-[#292929]">
                  <a href={item.projectLink} target="_blank" rel="noreferrer">
                  <div className="flex justify-center">
                    <Image
                      src={item.projectImage}
                      priority={true}
                      alt=""
                      className="w-[90%] rounded-md mt-2 border border-gray-400"
                      width={400}
                      height={400}
                      quality={100}
                    />
                  </div>
                  <p className="text-center mt-2 font-medium tracking-widest text-[20px] text-[#F7AB0A]">
                    {item.projectName}
                  </p>
                  <p className="text-center mt-1 font-thin tracking-wider text-[15px] text-[#F7AB0A]">{item.projectDuration}</p>
                  <p className="mt-2 font-thin text-justify text-[14px] tracking-wider px-4">
                    {item.projectDesc}
                  </p>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>

      {/* background line */}
      {/* <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" /> */}
    </div>
  );
};

export default ProjectsMobile;
