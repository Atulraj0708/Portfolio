import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I have</h5>
      <div className="container skill__container">
               <div className="skill_frontend">
                <h3>Front End Development</h3>
                <div className='skill__content'>
                  <article className='skill__details'>
                  <BsPatchCheckFill className='skill__details-icon'/>
                  {/* <div> */}
                  <h4>HTML</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                  {/* </div> */}
                  </article>
                  <article className='skill__details'>
                  {/* <div> */}
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>CSS</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    {/* </div> */}
                  </article>
                  <article className='skill__details'>
                    {/* <div> */}
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>JavaScript</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    {/* </div> */}
                  </article>
                  <article className='skill__details'>
                  {/* <div> */}
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>BootStrap</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                  {/* </div> */}
                  </article>
                  <article className='skill__details'>
                  {/* <div> */}
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>Tailwind</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    {/* </div> */}
                  </article>
                  <article className='skill__details'>
                  {/* <div> */}
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>React</h4>
                    {/* <small className='text-light'>Experienced</small> */}
                    {/* </div> */}
                  </article>
                  <article className='skill__details'>
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>Material UI</h4>
                  </article>
                  <article className='skill__details'>
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>Redux</h4>
                  </article>
                </div>
               </div>
               <div className="skill__backend">
               <h3>Backend Development</h3>
                <div className='skill__content'>
                  <article className='skill__details'>
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>NodeJS</h4>
                  </article>
                  <article className='skill__details'>
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>MongoDB</h4>
                  </article>
                  <article className='skill__details'>
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>Express</h4>
                  </article>
                  <article className='skill__details'>
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>MySQL</h4>
                  </article>
                  <article className='skill__details'>
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>Rest API</h4>
                  </article>
                  <article className='skill__details'>
                    <BsPatchCheckFill className='skill__details-icon'/>
                    <h4>Redis</h4>
                  </article>
                </div>
               </div>
      </div>
    </section>
  )
}

export default Skills