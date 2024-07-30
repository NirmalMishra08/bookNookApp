import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4000/user/login", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success("Logged in Successfully");
        document.getElementById("my_modal_3").close();
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        console.error("Error:", err);
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </Link>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...register('email', { required: true })}
                  />
                  {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...register('password', { required: true })}
                  />
                  {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
                </div>
                <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Login
                </button>
              </form>
              <div>
                Not Registered?{' '}
                <Link to={'/signup'}>
                  <span className="text-pink-500 hover:text-pink-900">Sign up</span>
                </Link>
              </div>
              <div className="mt-6">
                <h3 className="text-center text-gray-600 mb-4">Or login with</h3>
                <div className="flex justify-around">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.676 0h-21.352c-.729 0-1.324.596-1.324 1.324v21.351c0 .728.595 1.324 1.324 1.324h11.495v-9.289h-3.12v-3.618h3.12v-2.682c0-3.1 1.892-4.791 4.658-4.791 1.325 0 2.465.099 2.798.143v3.24l-1.921.001c-1.504 0-1.795.715-1.795 1.762v2.307h3.59l-.467 3.618h-3.123v9.289h6.116c.729 0 1.324-.596 1.324-1.324v-21.351c0-.728-.595-1.324-1.324-1.324z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.04c-5.468 0-9.91 4.442-9.91 9.91 0 4.953 3.608 9.059 8.322 9.903.607.11.832-.264.832-.585 0-.288-.01-1.052-.016-2.065-3.381.734-4.095-1.583-4.095-1.583-.553-1.406-1.35-1.782-1.35-1.782-1.105-.757.084-.742.084-.742 1.223.086 1.866 1.256 1.866 1.256 1.085 1.86 2.847 1.322 3.54 1.011.11-.787.425-1.322.772-1.626-2.7-.309-5.543-1.352-5.543-6.017 0-1.328.473-2.417 1.249-3.269-.125-.309-.541-1.555.119-3.242 0 0 1.02-.326 3.34 1.247.969-.27 2.008-.404 3.044-.409 1.036.005 2.075.139 3.045.409 2.319-1.573 3.338-1.247 3.338-1.247.661 1.687.245 2.933.121 3.242.778.852 1.248 1.941 1.248 3.269 0 4.675-2.846 5.704-5.553 6.01.436.376.824 1.127.824 2.272 0 1.64-.015 2.965-.015 3.369 0 .324.223.7.838.581 4.715-.846 8.322-4.953 8.322-9.904 0-5.468-4.442-9.91-9.91-9.91z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.998 4.618c-.885.394-1.835.661-2.832.78a4.92 4.92 0 0 0 2.165-2.717 9.725 9.725 0 0 1-3.104 1.188 4.886 4.886 0 0 0-8.319 4.448 13.863 13.863 0 0 1-10.06-5.103 4.823 4.823 0 0 0-.661 2.456 4.88 4.88 0 0 0 2.175 4.076 4.868 4.868 0 0 1-2.212-.61v.061a4.889 4.889 0 0 0 3.917 4.792 4.875 4.875 0 0 1-2.208.084 4.894 4.894 0 0 0 4.561 3.39 9.789 9.789 0 0 1-6.067 2.092c-.394 0-.779-.023-1.158-.067a13.81 13.81 0 0 0 7.506 2.204c9.007 0 13.928-7.457 13.928-13.926 0-.211-.004-.423-.014-.632a9.935 9.935 0 0 0 2.462-2.542z" />
                    </svg>
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.499 6.129c-.829.369-1.718.617-2.651.732a4.61 4.61 0 0 0 2.03-2.548 9.217 9.217 0 0 1-2.917 1.111 4.596 4.596 0 0 0-7.828 4.189 13.05 13.05 0 0 1-9.511-4.825 4.579 4.579 0 0 0 1.422 6.122 4.52 4.52 0 0 1-2.083-.575v.057a4.594 4.594 0 0 0 3.68 4.504 4.543 4.543 0 0 1-2.078.078 4.6 4.6 0 0 0 4.292 3.189 9.208 9.208 0 0 1-6.8 1.889c.963.617 2.106.984 3.338.984 10.507 0 15.47-8.708 15.47-15.473 0-.236-.007-.472-.017-.707a11.057 11.057 0 0 0 2.727-2.812z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
