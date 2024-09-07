import React from 'react'
// import web from "../src/images/1.svg"
import web from "../src/images/2.png"
import { NavLink } from 'react-router-dom'
import Common from './Common'

const About = () => {
  return (
    <>
   <Common name='Welcome to About page' 
   imgsrc={web} 
   visit='/contact' 
   btname="Contact Now"/>
    </>
  )
}

export default About