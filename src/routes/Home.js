import React from 'react'
import Navbar from '../components/navbar'
import ProfileImg from '../components/ProfileImg'
import Footer from '../components/footer'
import Work from '../components/Work'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <ProfileImg/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home