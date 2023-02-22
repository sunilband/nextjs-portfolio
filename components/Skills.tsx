import React from "react";
import { useState } from "react";
import Skill from "./Skill-Element";
import { easeInOut, motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
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
          y:200,
          x:-200,
       
          
        }}
        whileInView={{
          y:0,
          x:0
          
        }}
        transition={{
          type: "spring",
          duration: 2,
        }}
    
        viewport={{ once: true }}
        className="grid grid-cols-4 gap-4 content-start z-20"
      >


        <div
          onMouseEnter={() => {
            setSkill("Typescript");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
          {/* ts */}
          <Skill source="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201" />
        </div>
        <div
          onMouseEnter={() => {
            setSkill("javascript");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
          {/* js */}
          <Skill source="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
        </div>
        <div
          onMouseEnter={() => {
            setSkill("Html");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
          {/* html */}
          <Skill source="https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_960_720.png" />
        </div>
        <div
          onMouseEnter={() => {
            setSkill("CSS");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
          {/* css */}
          <Skill source="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" />
        </div>
        <div
          onMouseEnter={() => {
            setSkill("Framer Motion");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
          {/* framer */}
          <Skill source="https://camo.githubusercontent.com/179d66ab2b0321726c88a586c4ad38802e7113a3c98c6fd3f0156c01c98cfd14/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67" />
        </div>

        <div
          onMouseEnter={() => {
            setSkill("Tailwind");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
          {/* tailwind */}
          <Skill source="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png" />
        </div>
        <div
          onMouseEnter={() => {
            setSkill("bootstrap");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
          {/* bootstrap */}
          <Skill source="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" />
        </div>

        <div
          onMouseEnter={() => {
            setSkill("react");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
        {/* photo shop */}
        <Skill source="https://1000logos.net/wp-content/uploads/2020/03/Photoshop-logo.png" />
        </div>
        
        <div
          onMouseEnter={() => {
            setSkill("react");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
          {/* react */}
          <Skill source="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png" />
        </div>
        <div
          onMouseEnter={() => {
            setSkill("next.js");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
          {/* next */}
          <Skill source="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/nextjs-boilerplate-logo.png" />
        </div>
        <div
          onMouseEnter={() => {
            setSkill("github");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
          {/* github */}
          <Skill source="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
        </div>

        <div
          onMouseEnter={() => {
            setSkill("python");
          }}
          onMouseLeave={() => {
            setSkill("");
          }}
        >
          {/* python */}
          <Skill source="https://qph.cf2.quoracdn.net/main-qimg-27d25d3fd343a3d2e4384c7f0eeaf785" />
        </div>
      </motion.div>

     
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12 flex items-end justify-start xl:items-start  xl:justify-end " >
        <h3 className="w-[35vw] h-fit text-xl md:text-[7vh] md:text-5xl text-gray-500/50 uppercase p-4 tracking-[20px]  transition-all ease-in-out duration-150 ">
          {skillName}
        </h3>
      </div>
    </div>
  );
}

export default Skills;
