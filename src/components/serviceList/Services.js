import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruckMedical, faUserDoctor, faHouseMedicalFlag, faStethoscope} from "@fortawesome/free-solid-svg-icons"

import "./styles.scss"
import AppoinmenntForm from './appoinmentForm/AppoinmenntForm';

const Services = () => {

  const [services, setServices] = useState([
    {logo: faTruckMedical, service:"Emergency Help", text:"A small river named Duden flows by their place and supplies it with the necessary regelialia.", id:1},
    {logo: faUserDoctor, service:"Qualified Doctors", text:"A small river named Duden flows by their place and supplies it with the necessary regelialia.", id:2},
    {logo: faHouseMedicalFlag, service:"Location and Directions", text:"A small river named Duden flows by their place and supplies it with the necessary regelialia.", id:3},
    {logo: faStethoscope, service:"Medicat treatments", text:"A small river named Duden flows by their place and supplies it with the necessary regelialia.", id:4},
  ])
  return (
    <div className="services" data-aos="fade-up">
      <div className="row">
        <div className="col-sm-12 col-md-6 px-5">
          {/* Medex brand */}
          <div className="row">
            <div className="col-12">
              <h1>Welcome to MEDEX</h1>
            </div>
          </div>
          {/* Service list */}
          <div className="container">
          <div className="row">
            {services.map((service)=>(
              <div className="service-card col-6" key={service.id}>
                <div className="row">
                  <div className="col-3">
                    <FontAwesomeIcon icon={service.logo} className="service-icon"/>
                  </div>
                  <div className="col-9">
                    <h4>{service.service}</h4>
                    <p>{service.text}</p>
                  </div>            
                </div>   
              </div>
            ))}
          </div>
          </div>
        </div>
        {/* Appoinment Form */}
        <div className="col-sm-12 col-md-6">
          <AppoinmenntForm/>
        </div>
      </div>
    </div>
  )
}

export default Services