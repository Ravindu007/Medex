import React from 'react'
import "./styles.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNotesMedical} from "@fortawesome/free-solid-svg-icons"

import xRayImage from "../../images/xray.jpg"
import { useState } from 'react'

const Departments = () => {
  const [buttons] = useState([
    {name:"Neurology", data:"This is Neurology",  id:1}, 
    {name:"Ophthalmology", data: "This is Ophthalmology", id:2},
    {name:"Nuclear Magnetic",data:"This is Nuclear Magnetic", id:3},
    {name:"Surgical",data:"This is Surgical", id:4},
    {name:"X Ray",data:"This is X Ray", id:5},
    {name:"Cardiology",data:"This is Cardiology", id:6},
    {name:"Dental Clinic",data:"This is Dental Clinic", id:7}
  ])

  const setData = (button) =>{
     return button.data
  }



  return (
    <div className="departments">
      <div className="row">
        <div className="col-md-3 list">
          {buttons.map((button)=>(
              <button key={button.id} onClick={setData.bind(this, button)}>
                <FontAwesomeIcon icon={faNotesMedical} style={{marginRight:"10px"}}/>
                {button.name}
              </button>
          ))}
        </div>
        <div className="col-md-4 image">
          <img src={xRayImage} alt=""  className='d-block img-fluid'/>
        </div>
        <div className="col-md-5 desc">
          <h5></h5>
          <p></p>
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