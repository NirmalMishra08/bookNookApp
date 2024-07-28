import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-3xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  my-10'>
                <div className='left w-full md:w-1/2 mt-12 md:mt-32 '>
                    <div className='space-y-10'>
                        <h1 className='text-4xl font-bold mt-'>
                            Hello,Welcome here to learn something {" "}  <span className='text-pink-500'>new everyday!!!</span>
                        </h1>
                        <p className='text-xl '>
                            Welcome to BookNook, the ultimate online destination for book lovers! Whether you're an avid reader, a casual bookworm, or someone looking to discover new literary adventures, BookNook is your one-stop shop for all things books.
                        </p>

                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Enter your email to login" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                        </div>
                        <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3">Secondary</button>
                        
                </div>
                <div className="right order-1 w-full md:w-1/2 ">
                <div className="img ">
                            <img className='w-92 h-92  ' src="bookimg.avif" alt="" />
                        </div>
                </div>
            </div>
        </>
    )
}

export default Banner