import React from 'react'
import "./styles.scss"

import Inforbar from '../Inforbar/Inforbar'

const Navbar = () => {
  return (
    <>
      <Inforbar/>
      <nav className="navbar navbar-expand-sm text-primary">
      <button className='navbar-toggler' data-toggle="collapse" data-target="#menu"><span className='navbar-toggler-icon'></span></button>
      <div className="collapse navbar-collapse justify-content-center" id='menu'>
        <ul className="navbar-nav">
          <li className="nav-item active"><a href="" className="nav-link">HOME</a></li>
          <li className="nav-item"><a href="" className="nav-link">ABOUT</a></li>
          <li className="nav-item"><a href="" className="nav-link">SERVICES</a></li>
          <li className="nav-item"><a href="" className="nav-link">DOCTORS</a></li>
          <li className="nav-item"><a href="" className="nav-link">DEPARTMENTS</a></li>
          <li className="nav-item"><a href="" className="nav-link">PRICING</a></li>
          <li className="nav-item"><a href="" className="nav-link">GALLERY</a></li>
          <li className="nav-item"><a href="" className="nav-link">BLOG</a></li>
          <li className="nav-item"><a href="" className="nav-link">CONTACT</a></li>
        </ul>
      </div>
    </nav>
    </> 
  )
}

export default Navbar