import './footerStyles.css';

import React from 'react'
import { FaLinkedin,FaPhone,FaMailBulk} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='linkedin'>
                    <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>To check my Linkedin Profile <a href="https://www.example.com">Click me!</a></p>
                    </div>
                    <div className='phone'>
                        <h4>
                        <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        +917004769727
                        </h4>
                    </div>
                    <div className='mail'>
                        <h4>
                        <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        atul.r20@iiits.in
                        </h4>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h4>About me</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil eveniet nisi explicabo voluptatum iure corrupti officiis possimus repellendus ipsam.</p>
                <div className='social'>
                <div className='mail'>
                        <h4>
                        <FaMailBulk size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                        atul.r20@iiits.in
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer