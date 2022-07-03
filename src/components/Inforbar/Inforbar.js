import React from 'react'
import "./styles.scss"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHandHoldingMedical, faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons"

const Inforbar = () => {
  return (
    <div className="detail-bar d-sm-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-4 block">
              <FontAwesomeIcon icon={faHandHoldingMedical} className="info-icons"/>
              <h1>MEDEX</h1>
            </div>
            <div className="col-4 block">
              <FontAwesomeIcon icon={faMapLocation} className="info-icons"/>
              <p>Free call +94116879524</p>
              <p>Call us now 24/7 customer suppport</p>
            </div>
            <div className="col-4 block">
              <FontAwesomeIcon icon={faPhone} className="info-icons"/>
              <p>41/32, Minuwangoda, Sri Lanka 11550</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Inforbar