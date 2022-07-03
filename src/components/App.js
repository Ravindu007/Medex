import React, { useEffect } from 'react'

import Aos from 'aos';
import "aos/dist/aos.css"
import 'animate.css';


import Home from './Home/Home'
import Navbar from "./Navbar/Navbar"
import Services from './serviceList/Services'
import About from './About/About';

const App = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
    </>
  )
}

export default App