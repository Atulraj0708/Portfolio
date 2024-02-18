import React from 'react'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import './header.css'
import Pic from '../../assets/bg.jpg'
const header = () => {
  return (
    <header>
      <div className="container header__conainer">
        <h5>Hello! I am</h5>
        <h1>Atul Raj</h1>
        <h5 className="text-light">
          Full Stack Developer
        </h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={Pic} alt="Loading..." />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header