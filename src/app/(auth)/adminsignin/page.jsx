import React from 'react';
import Image from 'next/image';
import signinImage from '../../../../public/images/adminLogin.png'; // Replace with your image path

const SignIn = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center p-16'>
            <div className="flex h-[700px]">
                {/* Left Side - Form */}
                <div className="w-full md:w-1/2  flex flex-col justify-center p-8 bg-customGray">
                    <div className="max-w-md mx-auto w-full">
                        <h2 className="text-5xl font-semibold mb-1">Login</h2>
                        <p className='mb-6 text-gray-500'>How do i get started?</p>
                        <form className="space-y-4">
                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full p-3 border border-gray-400 rounded-lg focus:outline-none bg-gray-800"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label htmlFor="password" className="block">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-800"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Forgot Password */}
                            <div className="text-right">
                                <a href="#" className="text-yellow-600 hover:underline">Forgot Password?</a>
                            </div>

                            {/* Sign In Button */}
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-white py-3 rounded-lg hover:bg-yellow-500 transition"
                            >
                                Sign In
                            </button>
                            <p className="mt-4 text-center text-gray-500 p-10">
                                Don't have an account?{' '}
                                <a href="/signup" className="text-yellow-500 hover:underline">
                                    Sign Up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="w-1/2 hidden md:block ">
                    <Image src={signinImage} alt="Admin image" className="h-[700px]" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
