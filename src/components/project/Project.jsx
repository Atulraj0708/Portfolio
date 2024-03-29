import React from 'react'
import Img1 from '../../assets/pro4-img.png'
import Img2 from '../../assets/pro2-img.png'
import Img3 from '../../assets/pro3-img.png'
import Img4 from '../../assets/portfolio-1.png'
import Img5 from '../../assets/pro5-img.png'
import './Project.css'
const Project = () => {
    const data=[
        {
            id:1,
            image:Img1,
            title:'Celestial',
            github:'https://github.com/Atulraj0708/Celestial',
            demo:'https://celestialfrontend.onrender.com/'
        },
        {
            id:2,
            image:Img2,
            title:'Dimensions',
            github:'https://github.com/Atulraj0708/DIMENSIONS',
            demo:'https://dimensions-five.vercel.app/'
        },
        {
            id:3,
            image:Img3,
            title:'Booking',
            github:'https://github.com/Atulraj0708/Booking',
            demo:'https://booking-black-seven.vercel.app/'
        },
        {
            id:4,
            image:Img4,
            title:'AR TUBE',
            github:'https://github.com/Atulraj0708/AR-TUBE',
            demo:'https://ar-tube.vercel.app/'
        },
        {
            id:5,
            image:Img5,
            title:'Daric Chat',
            github:'https://github.com/Atulraj0708/Daric-Chat',
            demo:'https://daric-chat.vercel.app/'
        },
      
    ]
  return (
    <section id='project'>
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className='container project__container'>
            {data.map(({id,image,title,github,demo})=>{
                return (
                    <article key={id} className='project__item'>
                    <div className="project__item-img">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title} </h3> 
                    <div className="project__item-cta">
                    <a href={github} className='btn' target='_blank'>Source Code</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                )
            })}
        </div>
    </section>
  )
}

export default Project