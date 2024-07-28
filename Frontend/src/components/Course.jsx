import React from 'react'
import Card from './Card'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

const Courses = () => {
  
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-28 flex   items-center justify-center'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <h1 className='text-2xl md:text-4xl'>We are delighted to have <span className='text-pink-600'> You here !! :)</span></h1>
            <div className='flex flex-col items-center'>
              <p className='text-xl md:text-2xl'>BookNook is the ultimate destination for book lovers.
              </p>
              <p className='text-xl md:text-2xl'>Discover our wide variety of free and premium courses on various topics such as history, literature, science, and more.
              </p></div>
              <Link to='/'>
            <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back</button>
            </Link>
          </div>
        </div>
        <div className='mt-12 grid gap-4 grid-cols-1 md:grid-cols-3 '>
          {
            list.map((item) => (
              <Card  item={item} key={item.id} />
            ))

          }

        </div>

      </div>
    </>
  )
}

export default Courses