import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
        <a href="" target='_blank'><FaLinkedin /></a>
        <a href="" target='_blank'><BsGithub /></a>
        <a href="" target='_blank'><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocial