import React from 'react'
import Navbar from '../components/navbar'
import Projectpg from '../components/projectpg'
import Footer from '../components/footer'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Projectpg heading="CONTACT" text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact