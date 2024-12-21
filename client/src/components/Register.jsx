import React from 'react'
import login from '../assets/login.jpg'
function Register() {
    return (

        <div className="flex md:mx-24 items-center justify-center flex-col md:flex-row h-screen ">
            {/* Left Section */}
            <div className="flex-1 bg-cover bg-center">
                <img
                    className="m-5 w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
                    src={login}
                    alt="Login Illustration"
                />
            </div>
            <div className="flex-1 flex items-center justify-center bg-white py-12">
                <form className="w-full max-w-sm mx-10">
                <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="eg: John Doe"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>

                    <p className='my-5'>Already have an account <a className="text-blue-500"  href="/login">Login here</a></p>
                </form>
            </div>
        </div>



    )
}

export default Register