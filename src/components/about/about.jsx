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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum harum sapiente, dolores recusandae sequi dolorem facere tempore quibusdam. Mollitia fugiat, amet, laudantium soluta nesciunt pariatur recusandae ipsam quis blanditiis esse omnis, delectus ducimus consequatur culpa! Deserunt harum adipisci quia?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default about