import React from 'react'
import Home from './Home1/Home'
import Course from './Courses/Course'
import {Routes,Route, Navigate} from "react-router-dom"
import Signup from "./components/signup"
import Contact from './components/Contact'
import  { Toaster } from 'react-hot-toast';
import { UseAuth } from './context/AuthProvider'







function App()  {
  const [authUser,setAuthUser]=UseAuth();
console.log(authUser);
  return (
    <>
  {/* <Home/>
  <Course/> */} 
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/course" element={authUser?<Course/>:<Navigate to='/signup'/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      
      
     
    </Routes>
    <Toaster />
    </div>
   
    </>
  )
}

export default App