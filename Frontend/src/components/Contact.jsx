import React from 'react'

import { useForm } from 'react-hook-form';


function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border-2 border-gray-300">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                {...register("name", { required: true })}
                            />
                             {errors.name && <span className="text-red-500 text-sm">Name is required</span>}

                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                {...register("email", { required: true })}
                            />
                             {errors.email && <span className="text-red-500 text-sm">Name is required</span>}

                        </div>
                        
                        <div className="container">
                            <h2>Write a Message</h2>
                            <textarea id='message' type='message' className='w-full mt-1 block  h-20  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'  placeholder="Write your message here..."
                               {...register("message", { required: true })}/>
                                {errors.message && <span className="text-red-500 text-sm">Name is required</span>}
                         
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign Up
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
