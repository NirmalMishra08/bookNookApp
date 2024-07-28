import Contact from "../src/components/Contact";
import React from 'react'
import Navbar from'../src/components/Navbar'
import Footer from'../src/components/Footer'

function contact() {
  return (
  <>
  <Navbar/>
  <div className='min-h-screen'>
            <Contact />
            </div>
  <Footer/>

  </>
  )
}

export default contact
