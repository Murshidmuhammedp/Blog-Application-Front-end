"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import signinImage from '../../../../public/images/adminLogin.png';
import api from '@/api/interSepter';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SignIn = () => {

    const router = useRouter();
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/v1/admin/login', { email, password })
            toast.success(response.data.message)
            router.push('/dashboard');
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='w-full min-h-screen flex justify-center items-center p-16'>
            <div className="flex h-[600px]">
                <div className="w-full md:w-1/2  flex flex-col justify-center p-8 bg-customGray">
                    <div className="max-w-md mx-auto w-full">
                        <h2 className="text-5xl font-semibold mb-1">Login</h2>
                        <p className='mb-6 text-gray-500'>How do i get started?</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full p-3 border border-gray-400 rounded-lg focus:outline-none bg-gray-800"
                                    placeholder="Enter your email"
                                    required
                                    onChange={e => setemail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-800"
                                    placeholder="Enter your password"
                                    required
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="text-right">
                                <a href="#" className="text-yellow-600 hover:underline">Forgot Password?</a>
                            </div>
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
                <div className="w-1/2 hidden md:block ">
                    <Image src={signinImage} alt="Admin image" className="h-[600px]" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;