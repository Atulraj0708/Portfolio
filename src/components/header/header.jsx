import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocial'
import './header.css'
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
          <img src="https://dianapps.com/blog/wp-content/uploads/2023/05/Untitled-design-75.png" alt="Loading..." />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header