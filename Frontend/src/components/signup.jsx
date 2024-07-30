import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';
import axios from 'axios';
import { toast } from'react-hot-toast';
import {  useLocation,useNavigate } from 'react-router-dom';

const Signup = () => {
    const  location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname ||'/'
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }

        await axios.post("http://localhost:4000/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    alert('Signup Successful')
                    toast.success('Signup Successful');
                   navigate(from ,{replace:true})
                }
                localStorage.setItem("Users",JSON.stringify(res.data.user));
            }).catch((error) => {
               if(error.response){
                console.log(error);
                
                toast.error('Error: ' + error.response.data.message);
               }
            })



    }



    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border-2 border-gray-300">
                <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost relative left-[90%] -top-4"
              >
                ✕
              </Link>
                    <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                    <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
                    
                   
                        <div>
                        

                            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="fullname"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span className="text-red-500 text-sm">Name is required</span>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Already have an account?{' '}
                                <button
                                    type="button"
                                    className="text-indigo-600 underline hover:text-indigo-800"
                                    onClick={() => {
                                        document.getElementById('my_modal_3').showModal();
                                    }}
                                >
                                    Login
                                </button>
                                <Login />
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
