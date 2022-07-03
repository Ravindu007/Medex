import React from 'react'

import doctorImage from "../../images/doc.jpg"

const About = () => {
  return (
    <div className="about mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="container" data-aos="fade-down-right">
              <img src={doctorImage} alt="" className='d-block img-fluid'/>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h1>We are MEDEX, a healthcare provider</h1>
            <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <a href="#appointmenetForm" className='btn btn-primary'>Make Appoinmenet</a>
            <a href="" className='btn btn-warning mx-2'>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About