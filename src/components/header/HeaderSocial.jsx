import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/atul-raj-755184215/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/Atulraj0708" target='_blank'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocial