import React from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination,EffectCards} from "swiper";
import CertCard from "./CertCard";

type Props = {};

const Certifications = (props: Props) => {
  
  return (
    <motion.div
      initial={{
        x: -200,
        scale: 0.5,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        duration: 2,
      }}
      viewport={{ once: true }}
      className="h-screen w-screen flex relative flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-20 pb-2"
    >
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
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
           
          }}
          pagination={true}
          modules={[EffectCards,EffectCoverflow,Pagination]}
          className="top-20 mx-2 md:top-24 xl:top-24 w-[100%] scale-[0.9] md:scale-[1] xl:scale-[0.85] touch-none"
          style={{ paddingTop: "10px", paddingBottom: "35px" }}
        >
          {/* React Native */}

          <SwiperSlide
            style={{
              width:"fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="React Native"
              link="https://my.visme.co/view/x4nvrk4d-untitled-project#s1"
              provider="Coursera"
              offeredBy="Meta"
              logo="https://img.freepik.com/free-vector/meta-logo-file-social-media-icon-vector-3-november-2021-bangkok-thailand_53876-157873.jpg?w=740&t=st=1677649912~exp=1677650512~hmac=fffe7c72ef2bb4718490a552542baf7a3d57fae73d1813f21b07b02be7628900"
              status="Ongoing"
              learnPoints={[
                "Mobile Development",
                "App Development",
                "Cross Platform  Development",
              ]}
            />
          </SwiperSlide>

          {/* principles of ui.ux */}

          <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="Principles of UX/UI Design"
              link="https://my.visme.co/view/x4nvrk4d-untitled-project#s1"
              provider="Coursera"
              offeredBy="Meta"
              logo="https://img.freepik.com/free-vector/meta-logo-file-social-media-icon-vector-3-november-2021-bangkok-thailand_53876-157873.jpg?w=740&t=st=1677649912~exp=1677650512~hmac=fffe7c72ef2bb4718490a552542baf7a3d57fae73d1813f21b07b02be7628900"
              status="Ongoing"
              learnPoints={["UX", "UI", "Design Fundamentals"]}
            />
          </SwiperSlide>

          {/* DSA using JS freecodecamp */}
          <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="JavaScript Algorithms and Data Structures"
              link="https://www.freecodecamp.org/certification/fcc11e5227f-5153-468c-9cd6-5b245694882a/javascript-algorithms-and-data-structures"
              provider="FreeCodeCamp"
              offeredBy="FreeCodeCamp"
              logo="https://cdn.changelog.com/uploads/icons/news_sources/Qo/icon_small.png?v=63680075631"
              status="Completed"
              learnPoints={[
                "JavaScript",
                "Algorithms",
                "ES6",
                "Data Structures",
                "OOP",
                "Debugging",
              ]}
            />
          </SwiperSlide>

          {/* Responsive Web Design freecodecamp */}
          <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="Responsive Web Design"
              link="https://www.freecodecamp.org/certification/fcc11e5227f-5153-468c-9cd6-5b245694882a/responsive-web-design"
              provider="FreeCodeCamp"
              offeredBy="FreeCodeCamp"
              logo="https://cdn.changelog.com/uploads/icons/news_sources/Qo/icon_small.png?v=63680075631"
              status="Completed"
              learnPoints={[
                "HTML",
                "CSS",
                "Visual Design",
                "Accessibility",
                "Responsive Design",
              ]}
            />
          </SwiperSlide>

          {/* React basics meta */}
          <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="React Basics"
              link="https://www.coursera.org/account/accomplishments/certificate/4X8CDJ5KE8NT"
              provider="Coursera"
              offeredBy="Meta"
              logo="https://img.freepik.com/free-vector/meta-logo-file-social-media-icon-vector-3-november-2021-bangkok-thailand_53876-157873.jpg?w=740&t=st=1677649912~exp=1677650512~hmac=fffe7c72ef2bb4718490a552542baf7a3d57fae73d1813f21b07b02be7628900"
              status="Completed"
              learnPoints={[
                "Web Application",
                "Front-End Web Development",
                "React (Web Framework)",
                "Application development",
              ]}
            />
          </SwiperSlide>

          {/* Advanced react */}
          <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="Advanced React"
              link="https://www.coursera.org/account/accomplishments/certificate/FSH2MVZATYTG"
              provider="Coursera"
              offeredBy="Meta"
              logo="https://img.freepik.com/free-vector/meta-logo-file-social-media-icon-vector-3-november-2021-bangkok-thailand_53876-157873.jpg?w=740&t=st=1677649912~exp=1677650512~hmac=fffe7c72ef2bb4718490a552542baf7a3d57fae73d1813f21b07b02be7628900"
              status="Completed"
              learnPoints={[
                "Unit Testing",
                "Front-End Web Development",
                "React (Web Framework)",
              ]}
            />
          </SwiperSlide>

          {/* Cloud Computing IBM */}
          <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="Introduction to Cloud Computing"
              link="https://www.coursera.org/account/accomplishments/certificate/MXREZ3QSVQRT"
              provider="Coursera"
              offeredBy="IBM"
              logo="https://www.buyalicence.com/wp-content/uploads/2019/03/ibm-logo-circular-grey.png"
              status="Completed"
              learnPoints={[
                "Cloud Native",
                "Devops intro",
                "Iaas",
                "PaaS",
                "Saas",
                "Hybrid Multicloud",
                "Cloud Computing",
              ]}
            />
          </SwiperSlide>

          {/* IBM github coursera */}
          <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="Getting Started with Git and GitHub"
              link="https://www.coursera.org/account/accomplishments/certificate/3ECGGC44FS96"
              provider="Coursera"
              offeredBy="IBM"
              logo="https://www.buyalicence.com/wp-content/uploads/2019/03/ibm-logo-circular-grey.png"
              status="Completed"
              learnPoints={[
                "open source",
                "Version Control Systems",
                "Github",
                "Git (Software)",
              ]}
            />
          </SwiperSlide>

          {/* developing front end react IBM coursera */}
          <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="Developing Front-End Apps with React"
              link="https://www.coursera.org/account/accomplishments/certificate/RG9VE8MKTNWE"
              provider="Coursera"
              offeredBy="IBM"
              logo="https://www.buyalicence.com/wp-content/uploads/2019/03/ibm-logo-circular-grey.png"
              status="Completed"
              learnPoints={[
                "Web Development",
                "UI",
                "Front-End Web Development",
                "React",
                "JavaScript",
              ]}
            />
          </SwiperSlide>

          {/* html css in depth */}
          <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="HTML and CSS in depth"
              link="https://www.coursera.org/account/accomplishments/certificate/Z4LX3TY42AZ5"
              provider="Coursera"
              offeredBy="Meta"
              logo="https://img.freepik.com/free-vector/meta-logo-file-social-media-icon-vector-3-november-2021-bangkok-thailand_53876-157873.jpg?w=740&t=st=1677649912~exp=1677650512~hmac=fffe7c72ef2bb4718490a552542baf7a3d57fae73d1813f21b07b02be7628900"
              status="Completed"
              learnPoints={[
                "Debugging",
                "React (Web Framework)",
                "User Interface",
                "HTML/CSS",
                "JavaScript",
              ]}
            />
          </SwiperSlide>

          {/* programming with js Meta */}
          <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="Programming with JavaScript"
              link="https://www.coursera.org/account/accomplishments/certificate/NPX3KQTRYKNM"
              provider="Coursera"
              offeredBy="Meta"
              logo="https://img.freepik.com/free-vector/meta-logo-file-social-media-icon-vector-3-november-2021-bangkok-thailand_53876-157873.jpg?w=740&t=st=1677649912~exp=1677650512~hmac=fffe7c72ef2bb4718490a552542baf7a3d57fae73d1813f21b07b02be7628900"
              status="Completed"
              learnPoints={[
                "Test-Driven Development",
                "JavaScript",
                "Front-End Web Development",
                "OOP",
              ]}
            />
          </SwiperSlide>
              
               {/* into to front end Coursera Meta */}
          {/* <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <CertCard
              name="Introduction to Front-End Development"
              provider="Coursera"
              offeredBy="Meta"
              logo="https://img.freepik.com/free-vector/meta-logo-file-social-media-icon-vector-3-november-2021-bangkok-thailand_53876-157873.jpg?w=740&t=st=1677649912~exp=1677650512~hmac=fffe7c72ef2bb4718490a552542baf7a3d57fae73d1813f21b07b02be7628900"
              status="Completed"
              learnPoints={[
                "Web Development Tools",
                "UI",
                "Front-End Web Development",
                "HTML/CSS",
                "Responsive Design",
              ]}
            />
          </SwiperSlide> */}

          {/* Html CSS JS IBM  */}
          {/* <SwiperSlide style={{width:"fit-content",backgroundPosition:"center",backgroundSize:"cover"}}>
          <CertCard name='Introduction to Web Development with HTML, CSS, JavaScript' provider='Coursera' offeredBy='IBM' logo='https://www.buyalicence.com/wp-content/uploads/2019/03/ibm-logo-circular-grey.png' status='Completed' learnPoints={["CSS","HTML","Git","JavaScript","Cloud Apps"]}/>
        </SwiperSlide> */}
        </Swiper>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Certifications;
