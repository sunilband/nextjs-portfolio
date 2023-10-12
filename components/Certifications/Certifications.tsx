import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
// import { EffectCoverflow, Pagination, EffectCards } from "swiper";
import { EffectCoverflow,Pagination,EffectCards } from "swiper/modules";
import CertCard from "./CertCard";

type Props = {
  data: any;
};

const Certifications = (props: Props) => {
  return (
    <div className="h-screen w-screen flex relative flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-20 pb-2 ">
      <h3 className="absolute top-24 uppercase tracking-[12px]  sm:tracking-[20px] text-gray-500 text-2xl cursor-default ">
        Certifications
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default ">
        Swipe to explore
      </h3>

      <div className="flex items-center w-[100vw] sm:w-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCards, EffectCoverflow, Pagination]}
          className="top-20 mx-2 md:top-24 xl:top-24 w-[100%] scale-[0.9] md:scale-[1] xl:scale-[0.85] touch-none"
          style={{ paddingTop: "10px", paddingBottom: "35px" }}
        >
          {/* Swiper items */}
          {props.data.certData.map((item: any, key: number) => {
            return (
              <SwiperSlide
                style={{
                  width: "fit-content",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                key={key}
              >
                <CertCard
                  name={item.name}
                  link={item.link}
                  provider={item.provider}
                  offeredBy={item.offeredBy}
                  logo={item.logo}
                  status={item.status}
                  learnPoints={item.learnPoints}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Certifications;
