import './footerStyles.css';

import React from 'react'
import { FaLinkedin,FaPhone,FaMailBulk,FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='linkedin'>
                    <FaLinkedin size={25} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>To check my Linkedin Profile <a href="https://www.linkedin.com/in/atul-raj-755184215/">Click here!</a></p>
                    </div>
                    </div>
                <div className='github'>
                <FaGithub size={25} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>To check my Github Profile <a href="https://github.com/Atulraj0708">Click here!</a></p>
                    </div>
                </div>

                    <div className='mail'>
                        <h4>
                        <FaMailBulk size={25} style={{color:"#fff",marginRight:"2rem"}}/>
                        atul.r20@iiits.in
                        </h4>
                    </div>

                
            </div>
            <div className='right'>
                <h4>About me</h4>
                <p>Hi I am Atul Raj.I am a mern stack web developer. highly ethusaist to learn new things.</p>
                {/* <div className='social'>
                <div className='mail'>
                        <h4>
                        <FaMailBulk size={25} style={{color:"#fff",marginRight:"1rem"}}/>
                        atul.r20@iiits.in
                        </h4>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Footer