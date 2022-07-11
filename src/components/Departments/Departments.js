import React from 'react'
import "./styles.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNotesMedical} from "@fortawesome/free-solid-svg-icons"

import xRayImage from "../../images/xray.jpg"
import { useState } from 'react'

const Departments = () => {
  const [buttons, setButtons] = useState([
    {name:"Neurology", id:1}, 
    {name:"Ophthalmology", id:2},
    {name:"Nuclear Magnetic", id:3},
    {name:"Surgical", id:4},
    {name:"X Ray", id:5},
    {name:"Cardiology", id:6},
    {name:"Dental Clinic", id:7}
  ])

  return (
    <div className="departments">
      <div className="row">
        <div className="col-md-3 list">
          {buttons.map((button)=>(
              <button key={button.id}>
                <FontAwesomeIcon icon={faNotesMedical} style={{marginRight:"10px"}}/>
                {button.name}
              </button>
          ))}
        </div>
        <div className="col-md-4 image">
          <img src={xRayImage} alt=""  className='d-block img-fluid'/>
        </div>
        <div className="col-md-5 desc">
          <h5>Neurology</h5>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
          <div className="details">
            <p className="detail-line">The Big Oxmox advised her not to do so</p>
            <p className="detail-line">Far far away, behind the word mountains</p>
            <p className="detail-line">Separated they live in Bookmarksgrove</p>
            <p className="detail-line">She packed her seven versalia</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Departments