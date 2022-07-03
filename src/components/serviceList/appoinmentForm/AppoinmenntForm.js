import React from 'react'
import "./styles.scss"

const AppoinmenntForm = () => {
  return (
    <div className="container" id='appointmenetForm'>
      <form action="">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className='form-control'/>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Last Name</label>
          <input type="text" className='form-control'/>
        </div>
        <div className="form-group">
          <select name="selection" id="service" className='form-select'>
            <option value="default">Select service</option>
            <option value="neurology">Neurology</option>
            <option value="cardiology">Cardiology</option>
            <option value="x-ray">X-ray</option>
            <option value="dental">Dental</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Phone">Phone</label>
          <input type="text" className='form-control'/>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Date</label>
          <input type="date" className='form-control'/>
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input type="time" className='form-control'/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input type="text" className='form-control'/>
        </div>
        <button className='btn btn-warning col-12'>Make Appoinment</button>
      </form>
    </div>
  )
}

export default AppoinmenntForm