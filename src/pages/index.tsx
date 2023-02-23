import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'components/About'
import WorkExperience from 'components/WorkExperience'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import ContactMe from 'components/ContactMe'
import Test from 'components/Test'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 sm:scrollbar-thin sm:scrollbar-thumb-[#F7AB0A]/80 sm:scrollbar-track-gray-500  sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full'>
      <Head>
        <title>{`Sunil's Portfolio`}</title>  
      </Head>
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="hero" className='snap-start'>
      <Hero/>
      </section>

      {/* About */}
      <section id="about" className="snap-center snap-mandatory  snap-always">
        <About/>
      </section>

      {/* Experience */}
      <section id="experience" className='snap-start snap-mandatory snap-always'>
        <WorkExperience/>
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start snap-mandatory  snap-always'>
        <Skills/>
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start snap-mandatory  snap-always'>
      <Projects/>
      </section>
      
      {/* Contact Me */}
      <section id="contact" className='snap-start snap-mandatory  snap-always'>
      <ContactMe/>
      </section>

     
      
    </div> 
  )
}