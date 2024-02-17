import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AR</a>
      <ul className='permalinks'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/atul-raj-755184215/"><FaLinkedin /></a>
        <a href="https://www.instagram.com/atul_raj_78/"><FaInstagram /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Atul Raj.All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;