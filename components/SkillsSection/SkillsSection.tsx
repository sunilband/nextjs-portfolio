// @ts-nocheck

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  data: any;
};

function Skills(props: Props) {
  // const [skillName,skillSet]=useState("")
  const [skillName, setSkill] = useState<string>();

  useEffect(() => {
    const nodes = [].slice.call(document.querySelectorAll("li"), 0);

    const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
    const classNames = ["in", "out"]
      .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
      .reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
      const { width, height, top, left } = node.getBoundingClientRect();
      const l = ev.pageX - (left + window.pageXOffset);
      const t = ev.pageY - (top + window.pageYOffset);
      const x = l - (width / 2) * (width > height ? height / width : 1);
      const y = t - (height / 2) * (height > width ? width / height : 1);
      return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    class Item {
      constructor(element) {
        this.element = element;

        this.element.addEventListener("mouseover", (ev) =>
          this.update(ev, "in")
        );

        this.element.addEventListener("mouseout", (ev) =>
          this.update(ev, "out")
        );
      }

      update(ev, prefix) {
        this.element.classList.remove(...classNames);

        this.element.classList.add(
          `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
        );
      }
    }

    nodes.forEach((node) => new Item(node));
  }, []);

  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default ">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default ">
        hover for proficiency
      </h3>
      <div className="  w-[90vw] h-[60vh] md:w-[40vw] flex justify-center items-center z-20">
        <div className={`container `}>
          <ul className={`scale-[70%] md:scale-100 `}>
            {props.data.skillData.map((item: any, key: any) => {
              return (
                <motion.li
                  key={key}
                  className="rounded-lg antialiased self-center"
                  onMouseEnter={() => {
                    setSkill(item.skillName);
                  }}
                  onMouseLeave={() => {
                    setSkill("");
                  }}
                  initial={{
                    x: key % 2 == 0 ? 100 : -100,
                  }}
                  whileInView={{
                    y: 0,
                    x: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <a
                    className="normal rounded-lg overflow-hidden antialiased"
                    href="#"
                  >
                    <Image
                      src={item.imageLink}
                      alt="skillImage"
                      fill
                      priority
                    />
                  </a>
                  <div className="info antialiased flex justify-center items-center">
                    <h3>{item.proficiency}</h3>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12 flex items-end justify-start xl:items-start  xl:justify-end ">
        <h3 className="w-[35vw] sm:w-[32vw] h-fit text-xl md:text-[7vh] md:text-5xl text-gray-500/50 uppercase p-4 pt-11 pb-6 tracking-[20px]  transition-all ease-in-out duration-150 animate-[bounce_2s_ease-in-out_infinite]">
          {skillName}
        </h3>
      </div>
    </div>
  );
}

export default Skills;
