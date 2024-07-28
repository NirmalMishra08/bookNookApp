import React from 'react'
import Home from './Home1/Home'
import Course from './Courses/Course'
import {Routes,Route} from "react-router-dom"
import Signup from "./components/signup"
import Contact from './components/Contact'






const App = () => {
  return (
    <>
  {/* <Home/>
  <Course/> */} 
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      
      
     
    </Routes>
    </div>
   
    </>
  )
}

export default App