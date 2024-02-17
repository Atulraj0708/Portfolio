import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Projectpg from '../components/projectpg'
// import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
        <Navbar/>
        <Projectpg heading="PROJECTS." text="Some of my most recent works.. "/>
        <Work/>
        {/* <PricingCard/> */}
        <Footer/>
    </div>
  )
}

export default Project