import React from 'react'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Skills from './components/skills/Skills'
import Project from './components/project/Project'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App