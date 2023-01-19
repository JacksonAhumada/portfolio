import React from 'react'


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from '../components/HeroImage2';
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="About" text="Im a beginner Full-Stack Developer." />
      <Footer />
    </div>
  )
}

export default About
