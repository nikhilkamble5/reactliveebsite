import React from 'react'
// import web from "../src/images/1.svg"
import web from "../src/images/2.png"
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
    <section id="header" className='d-flex align-items-center'></section>
      <div className='container-fluid nav-bg'>
        <div className="row">
          <div className="col-10 mx-auto" >
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
                {props.name} 

                <strong> Nikhil Tech</strong>
                </h1>
              <h2 className='mt-3'>
              We are the team of talented web Devloper making Website</h2>
              <div className='mt-3'>
                <NavLink to={props.visit} className='btn btn-danger'> {props.btname}</NavLink>
              </div>
            </div>
            <div className='col-lg-6 order-1 order-2 header-img'>
              <img src={props.imgsrc} className='img-fluid animated very-smooth-bounce ' alt="home-img" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Common