import React from 'react'
import Navbar from '../components/Navbar'
import Courses from '../components/Course'
import Footer from '../components/Footer'


function Course() {
    
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
            <Courses />
            </div>
            <Footer />
        </>
    )
}

export default Course
