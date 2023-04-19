import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ContactMe from "components/ContactMe";
import Certifications from "components/Certifications";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("https://sunilportfolioapi.vercel.app/").then((res) => {
      setData(res.data);
      setLoading(true);
    });
  }, []);

  return (
    <>
    {/* loader */}
      {!loading && (
        <div className="flex justify-center items-center  h-screen bg-[rgb(36,36,36)]">
          <InfinitySpin width="200" color="#F7AB0A" />
        </div>
      )}
      {/* render after loading done*/}
      {loading && (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 sm:scrollbar-thin sm:scrollbar-thumb-[#F7AB0A]/80 sm:scrollbar-track-gray-500  sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full">
          <Head>
            <title>{`Sunil's Portfolio`}</title>
          </Head>
          {/* Header */}
          <Header data={data[5]} />

          {/* <section id="text">
        <Test/>
      </section> */}

          {/* Hero */}
          <section id="hero" className="snap-start">
            <Hero data={data[1]} />
          </section>

          {/* About */}
          <section
            id="about"
            className="snap-center snap-mandatory  snap-always"
          >
            <About data={data[0]} />
          </section>

          {/* Certifications */}
          <section
            id="certifications"
            className="snap-start snap-mandatory snap-always"
          >
            <Certifications data={data[2]} />
          </section>

          {/* Skills */}
          <section
            id="skills"
            className="snap-start snap-mandatory  snap-always"
          >
            <Skills data={data[3]} />
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="snap-start snap-mandatory  snap-always"
          >
            <Projects data={data[4]} />
          </section>

          {/* Contact Me */}
          <section
            id="contact"
            className="snap-start snap-mandatory  snap-always"
          >
            <ContactMe />
          </section>
        </div>
      )}
    </>
  );
}
