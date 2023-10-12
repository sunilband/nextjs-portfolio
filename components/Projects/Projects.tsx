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
import { Pagination, Navigation } from "swiper/modules";


type Props = {
  data: any;
};

const Projects = (props: Props) => {
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
        className="relative w-full flex overflow-y-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-500  scrollbar-thumb-rounded-full scrollbar-track-rounded-full "
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination]}
          className="mySwiper"
        >
          {props.data.projectsData.map((item: any, key: any) => {
            return (
              <SwiperSlide key={key}>
                <a href={item.projectLink} target="_blank" rel="noreferrer">
                  <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center sm:justify-center pt-20 md:pt-44 h-screen z-20 ">
                    <Image
                      src={item.projectImage}
                      priority={true}
                      alt=""
                      className="w-96 hover:scale-110 transition-all ease-in-out hover:drop-shadow-2xl "
                      width={400}
                      height={400}
                      quality={100}
                    />
                    <div className="space-y-10 px-4 md:px-10 max-w-3xl text-center">
                      <h4 className="text-4xl font-semibold tracking-wide flex flex-col cursor-default text-[#F7AB0A]/70">
                        {item.projectName}
                      </h4>
                      <p className="text-lg text-justify cursor-default">
                        {item.projectDesc}
                      </p>
                    </div>
                  </div>
                </a>
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

export default Projects;
