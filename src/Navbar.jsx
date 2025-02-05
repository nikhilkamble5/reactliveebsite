import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    < NavLink  to className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
        {/* ms-auto for left side nav bar  */}
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="service">Service</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="about">About</NavLink>
        </li>
      
        
      </ul>
      
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar