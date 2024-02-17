import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Projectpg from '../components/projectpg'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Projectpg heading="About" text="I'm a web developer"/>
        <AboutContent/>
        <Footer/>
    </div>
  )
}

export default About