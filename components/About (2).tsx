import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import aboutImage from "assets/aboutImage.jpg";

type Props = {};

const About = (props: Props) => {
  const x = useMotionValue(100);
  const y = useMotionValue(100);

  const rotateX = useTransform(y, [0, 200], [10, -10]);
  const rotateY = useTransform(x, [0, 200], [-10, 10]);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  function mouseLeave(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(100);
    y.set(100);
  }

  return (
    <div className="w-screen h-screen">
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: [0.5, 1.1, 1],
      }}
      transition={{ 
        type: "spring",
        duration: 1 
      }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center z-20"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.div></motion.div>
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <motion.div
          style={{
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            perspective: 1000,
          }}
          onMouseMove={handleMouse}
          onMouseLeave={mouseLeave}
        >
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
            className="mt-28 flex items-start justify-center h-60 w-64 md:w-96 md:h-96"
          >
            <Image
              src={aboutImage}
              priority={true}
              alt="Sunil's about image"
              className="-mb-10 md:mb-0 flex-shrink-0 w-64 h-64 rounded-full md:w-96 md:h-96 xl:scale-110  md:rounded-lg object-cover hover:scale-125 hover:drop-shadow-[0_0px_35px_#ffffff2f] text-[#ffffff5d] transition ease-in-out duration-700"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="space-y-6 px-0 md:px-5">
        <h4 className="text-xl sm:text-4xl font-semibold text-[#F7AB0A] xl:mt-20">{`Here's Something `}</h4>
        <p className="sm:text-base md:max-w-xl text-sm md:text-base xl:text-xl leading-6  md:leading-7 xl:leading-8  text-justify">Hey there, this is Sunil. I am a B.Tech(hons) student and a Front End Developer with a strong background in HTML, CSS, JavaScript, and modern web technologies like React.js, Next.js, Bootstrap and Tailwind CSS. I have a keen eye for detail and a focus on delivering exceptional user experiences. {`I'm`} passionate about creating visually stunning and intuitive web experiences. I am a lifelong learner, constantly seeking new challenges and opportunities to grow as a developer.</p>
      </div>
    </motion.div>
    </div>
  );
};

export default About;
