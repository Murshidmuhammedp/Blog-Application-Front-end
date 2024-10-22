"use client";

import { useState } from 'react';
import LogoNavbar from '@/components/LogoNavbar';
import InputField from '@/components/InputField';
import Image from 'next/image';
import logo from '../../../../public/images/image.png'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleLogin = () => {
        if (termsAccepted) {
            // Implement login logic here
            console.log('Email:', email);
            console.log('Password:', password);
        } else {
            alert('Please accept the terms and conditions');
        }
    };

    return (
        <div className='min-h-screen w-full bg-black'>
            <LogoNavbar />
            <div className="flex flex-col md:flex-row w-full items-center bg-black-800 text-white md:justify-center md:px-16">

                <div className="order-1 flex items-center w-full md:w-1/2 p-2 md:p-8">
                    <div className="flex flex-col gap-5">
                        <Image src={logo} alt="FutureTech Logo" width={60} height={60} className="sm:w-[60px] sm:h-[60px]" />
                        <blockquote className="text-3xl md:text-5xl text-left">
                            Welcome,<br />
                            Enter Your Details To<br />
                            Stay Logged In
                        </blockquote>
                    </div>
                </div>

                <div className="order-2 flex items-center w-full md:w-2/3 p-4 md:p-8 mt-10 ">
                    <form onSubmit={handleLogin} className='flex flex-col w-full md:w-auto'>
                        <div className="space-y-4">
                            <InputField
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Your Email Address"
                                required={true}
                            />
                            <InputField
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Your Password"
                                required={true}
                            />
                            <div className="flex items-center mt-4">
                                <input
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label className="ml-2 text-sm">I agree with Terms of Use and Privacy Policy</label>
                            </div>
                            <div className='w-full flex justify-center items-center'>
                                <button
                                    type='submit'
                                    disabled={!termsAccepted}
                                    className={`px-8 py-2 text-black font-bold rounded ${termsAccepted ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-400 cursor-not-allowed'
                                        }`}
                                >
                                    Log In
                                </button>
                            </div>
                            <p className="text-center text-gray-500">or</p>
                            <p className="mt-4 text-center text-gray-500">
                                Don't have an account yet?{' '}
                                <a href="/signup" className="text-yellow-500 hover:underline">
                                    Register now
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;