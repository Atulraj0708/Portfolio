import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { GoProject } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import './navbar.css'
import { useState } from 'react';

const Navbar = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href="#" className={activeNav==='#' ? 'active' : ''}><IoMdHome /></a>
      <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav==='#about' ? 'active' : ''}><FaUser /></a>
      <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav==='#skills' ? 'active' : ''}><BiBook /></a>
      <a href="#project" onClick={()=>setActiveNav("#project")} className={activeNav==='#project' ? 'active' : ''}><GoProject /></a>
      <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav==='#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Navbar