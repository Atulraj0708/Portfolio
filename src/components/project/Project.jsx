import React from 'react'
import Img1 from '../../assets/portfolio-1.png'
import Img2 from '../../assets/pro2-img.png'
import './Project.css'
const Project = () => {
    const data=[
        {
            id:1,
            image:Img1,
            title:'AR TUBE',
            github:'https://github.com/Atulraj0708/AR-TUBE',
            demo:'https://ar-tube.vercel.app/'
        },
        {
            id:2,
            image:Img1,
            title:'Dimensions',
            github:'https://github.com/Atulraj0708/DIMENSIONS',
            demo:'https://dimensions-five.vercel.app/'
        },
        {
            id:3,
            image:Img1,
            title:'Booking',
            github:'https://github.com/Atulraj0708/Booking',
            demo:'https://ar-tube.vercel.app/'
        },
        {
            id:4,
            image:Img1,
            title:'AR TUBE',
            github:'https://github.com/Atulraj0708/AR-TUBE',
            demo:'https://ar-tube.vercel.app/'
        },
        {
            id:5,
            image:Img1,
            title:'AR TUBE',
            github:'https://github.com/Atulraj0708/AR-TUBE',
            demo:'https://ar-tube.vercel.app/'
        },
        {
            id:6,
            image:Img1,
            title:'AR TUBE',
            github:'https://github.com/Atulraj0708/AR-TUBE',
            demo:'https://ar-tube.vercel.app/'
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