import React from 'react'
import './about.css'
import Pic from '../../assets/pic-1.png'
const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-img">
            <img src={Pic} alt="Loading..." />
          </div>
        </div>
        <div className="about__content">
          <p>
          I am Atul Raj, Currently pursuing a B.Tech majoring in CSE Branch at the Indian Institute Of Information Technology, Sricity. I am keenly interested in the experimental area as well as coding and am well-versed in DSA and Web Development(MERN).
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default about