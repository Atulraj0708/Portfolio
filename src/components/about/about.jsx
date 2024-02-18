import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="Loading..." />
          </div>
        </div>
        <div className="about__content">
          <p>
          I’m Atul Raj, Currently pursuing a B.Tech majoring in CSE Branch at the Indian Institute Of Information Technology, Sricity. I’m keenly interested in the experimental area as well as coding and am well-versed in DSA and Web Development(MERN).
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default about