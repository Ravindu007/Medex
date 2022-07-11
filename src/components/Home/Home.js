import React, { useEffect } from 'react'
import "./styles.scss"

const Home = () => {

  return (
    <div className="home">
      <div className="col-sm-none col-md-4 empty"></div>
      <div className="col-sm-12 col-md-8 text-block">
        <h1>Most valuable <br />
        thing is Your Health</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p> 
        <div className="apoinment">
          <select name="departments" id="depatments" className='form-select' style={{
            width:"15%"
          }}>
            <option value="neurology">Neurology</option>
            <option value="cardiology">Cardiology</option>
            <option value="x-ray">X-ray</option>
            <option value="dental">Dental</option>
          </select>
          <button className='btn btn-outline-primary' style={{marginLeft: "10px"}}>Appoinment</button>
        </div>
      </div>
    </div>
  )
}

export default Home