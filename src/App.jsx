import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./components/Header.jsx"
import HeroSection from "./components/HeroSection.jsx"
import Services from "./components/Services.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    })
  }, []);
  return (
    <div className="bg-linear-to-b from-[#612029] via-[#7a3b45] to-[#3b1820] min-h-screen ">
      <Header />
      <HeroSection />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

