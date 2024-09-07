import React from 'react'
// import web from "../src/images/1.svg"
import web from "../src/images/2.png"
import { NavLink } from 'react-router-dom'
import Common from './Common'

const Home = () => {
  return (
    <>
   <Common name='Grow YOur Business with' 
   imgsrc={web} 
   visit='/service' 
   btname="Get Started"/>
    </>
   
  )
}

export default Home