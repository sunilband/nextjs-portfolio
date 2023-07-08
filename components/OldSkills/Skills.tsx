import React from "react";
import { useState } from "react";
import Skill from "./Skill-Element";
import { motion } from "framer-motion";

type Props = {
  data: any;
};

function Skills(props: Props) {
  // const [skillName,skillSet]=useState("")
  const [skillName, setSkill] = useState<string>();

  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default ">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default ">
        hover for current proficiency{" "}
      </h3>
      <motion.div
        initial={{
          y: 200,
          x: -200,
        }}
        whileInView={{
          y: 0,
          x: 0,
        }}
        transition={{
          type: "spring",
          duration: 2,
        }}
        viewport={{ once: true }}
        className="grid grid-cols-4 sm:grid-cols-5 gap-4 content-start z-20"
      >
        {props.data.skillData.map((item: any, key: any) => {
          return (
            <div
              onMouseEnter={() => {
                setSkill(item.skillName);
              }}
              onMouseLeave={() => {
                setSkill("");
              }}
              key={key}
            >
              {/* js */}
              <Skill source={item.imageLink} proficiency={item.proficiency} />
            </div>
          );
        })}
      </motion.div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12 flex items-end justify-start xl:items-start  xl:justify-end ">
        <h3 className="w-[35vw] sm:w-[32vw] h-fit text-xl md:text-[7vh] md:text-5xl text-gray-500/50 uppercase p-4 pt-11 pb-6 tracking-[20px]  transition-all ease-in-out duration-150 animate-[bounce_2s_ease-in-out_infinite]">
          {skillName}
        </h3>
      </div>
    </div>
  );
}

export default Skills;
