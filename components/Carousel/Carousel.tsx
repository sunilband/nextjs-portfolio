// @ts-nocheck
"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import classes from "./Carousel.module.css";
// import "./Carousel.module.css"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";

type Props = {
  data: any;
};

const Carousel = (props: Props) => {
  const router = useRouter();
  const [title, setTitle] = useState("Hover/click a project to see details");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [link, setLink] = useState("");


  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {

    if(isInView){

    var radius = 300; // how big of the radius
    var autoRotate = true; // auto rotate or not
    var rotateSpeed = 20; // unit: seconds/360 degrees
    var imgWidth = 300; // width of images (unit: px)
    var imgHeight = 200; // height of images (unit: px)

    // Link of background music - set 'null' if you dont want to play background music
    var bgMusicURL =
      "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
    var bgMusicControls = true; // Show UI music control

   
    // animation start after 1000 miliseconds
    setTimeout(init, 200);

    var odrag = document.getElementById("drag-container");
    var ospin = document.getElementById("spin-container");
    var aImg = ospin.getElementsByTagName("img");
    var aVid = ospin.getElementsByTagName("video");

    var aEle = [...aImg, ...aVid]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    var ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
      for (var i = 0; i < aEle.length; i++) {
        aEle[i].style.transform =
          "rotateY(" +
          i * (360 / aEle.length) +
          "deg) translateZ(" +
          radius +
          "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay =
        // adjust the number to set the duration of initial animation
          delayTime || (aEle.length - i) / 8 + "s";
      }
  
    }

    function applyTranform(obj) {
      // Constrain the angle of camera (between 0 and 180)
      
      if (tY > 30) tY = 30;
      if (tY < 5) tY = 5;

      // Apply the angle
      obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
    }

    function playSpin(yes) {
      ospin.style.animationPlayState = yes ? "running" : "paused";
    }

    var sX,
      sY,
      nX,
      nY,
      desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

    // auto spin
    if (autoRotate) {
      var animationName = rotateSpeed > 0 ? `${classes.spin}`: `${classes.spinRevert}`;
      ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }

    // setup events
    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;
      var sX = e.clientX,
        sY = e.clientY;

      this.onpointermove = function (e) {
        e = e || window.event;
        var nX = e.clientX,
          nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        sX = nX;
        sY = nY;
      };

      this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTranform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        this.onpointermove = this.onpointerup = null;
      };

      return false;
    };
   
  }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`${classes.body} h-screen relative overflow-hidden flex flex-col-reverse gap-y-0 text-left md:flex-row  justify-center mx-auto items-center z-0 max-w-full `}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default ">
        Projects
      </h3>
      <h3  className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default ">
        Drag to explore
      </h3>

      <>
        <div className="lg:absolute flex flex-col items-center scale-75 lg:scale-100 justify-center lg:flex-none w-full lg:w-auto  bottom-2 lg:bottom-auto left-4 transition-all ease-in-out duration-300 ">
          <h2 className=" text-4xl top-40 w-[450px] text-center lg:text-right tracking-[10px] text-[#6B7280]">
            {title}
          </h2>
          <p className=" text-lg top-52 w-[450px] text-center lg:text-right tracking-[10px] text-[#F7AB0A]/80">
            {duration}
          </p>
          <p className=" top-[15rem] text-md w-[450px] text-center lg:text-right tracking-widest text-[#6B7280]">
            {description}
          </p>
          {title !== "Hover/click a project to see details" ? (
            <button
              onClick={() => window.open(link, "_blank")}
              className="border text-[#6B7280] border-[#F7AB0A] mt-2 py-2 px-10 rounded-md font-bold transition duration-200  ease-in-out hover:bg-[#F7AB0A] hover:text-black lg:w-full w-[300px]"
            >
              Check it out !
            </button>
          ) : null}
        </div>

        {isInView?<div
          id="drag-container"
          className={`${classes.dragContainer} lg:absolute lg:-right-40 top-20 lg:top-auto scale-75 lg:scale-100`}
        >
          <div
            id="spin-container"
            className={`${classes.spinContainer}`}
          >
            {/* Add your images (or video) here */}
            {props.data.projectsData.map((item, index) => {
              return (
                <Image
                  src={item.projectImage}
                  alt=""
                  fill
                  quality={100}
                  key={index}
                  onMouseEnter={() => {
                    setTitle(item.projectName);
                    setDescription(item.projectDesc);
                    setDuration(item.projectDuration);
                    setLink(item.projectLink);
                  }}
                  // onMouseLeave={() => {
                  //   setTitle("Hover a project to see details");
                  //   setDescription("");
                  //   setDuration("");
                  // }}
                  onDoubleClick={() => window.open(item.projectLink, "_blank")}
                  className={`${classes.project} cursor-pointer rounded-lg`}
                  priority={true}
                />
              );
            })}
          </div>
          <div id="ground" className={classes.ground} />
        </div>:null}
      </>
    </div>
  );
};

export default Carousel;
