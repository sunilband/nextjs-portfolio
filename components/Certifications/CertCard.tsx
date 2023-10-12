import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  name: string;
  provider: string;
  offeredBy: string;
  logo: string;
  status: string;
  learnPoints?: any;
  link?: string;
};

const CertCard = (props: Props) => {
  const learnPoints = props.learnPoints;

  return (
    <Link href={props.link ? props.link : ""} passHref target="_blank">
      <motion.article
        initial={{
          x: 100,
          y: 100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          x: 0,
        }}
        // viewport={{ once: true }}
        className="group antialiased flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 flex-grow-0 sm:w-96 p-10 md:p-2 bg-[#292929] w-fit  max-h-[650px] min-h-[550px] cursor-default"
      >
        {/* compony logo */}
        <motion.div
          initial={{
            x: -50,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <Image
            src={props.logo}
            alt="company logo"
            className="w-12 h-12 rounded-full xl:w-[50px] xl:h-[50px] object-cover object-center mt-4 group-hover:scale-125 group-hover:drop-shadow-[0_0px_15px_#ffffff2f] transition ease-in-out duration-300 border-2"
            width={200}
            height={200}
            priority={true}
          />
        </motion.div>

        <div className="px-0 md:px-10 w-[100%] space-y-2 transition ease-in-out duration-300">
          {/*Certification name */}
          <h4 className="text-4xl tracking-wider sm:text-3xl font-light cursor-default pb-2">
            {props.name}
          </h4>
          <hr />
          {/* offered by */}
          <p className="uppercase  text-gray-400 text-base font-medium pt-2">
            Offered By:{" "}
            <span className="text-slate-200">{props.offeredBy}</span>
          </p>
          {/* Provider */}
          <p className="uppercase  text-gray-400 text-base font-medium ">
            Provider: <span className="text-slate-200">{props.provider}</span>
          </p>
          {/*Status */}
          <p className={`uppercase text-gray-400 text-base font-medium pb-2 `}>
            Status:{" "}
            <span
              className={`text-${
                props.status == "Completed" || props.status == "completed"
                  ? "slate-200"
                  : "[#F7AB0A]"
              }`}
            >
              {props.status}
            </span>
          </p>
          <hr />
          {/* summary points */}
          <div className="flex flex-wrap">
            {learnPoints.map((item: any, i: number) => {
              return (
                <div
                  key={i}
                  className="border py-2 px-3 rounded-3xl my-2 mx-1 tracking-wider hover:scale-105 transition ease-in-out duration-100 font-light hover:border-[#F7AB0A] hover:text-[#F7AB0A] hover:drop-shadow-[0_0px_20px_#ffffff2f] "
                >
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default CertCard;
