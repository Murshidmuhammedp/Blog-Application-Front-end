"use client";

import { useState } from 'react';
import LogoNavbar from '@/components/LogoNavbar';
import InputField from '@/components/InputField';
import Image from 'next/image';
import logo from '../../../../public/images/image.png'
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleRegister = () => {
        if (termsAccepted) {
            // Implement login logic here
            console.log('Email:', email);
            console.log('Password:', password);
        } else {
            alert('Please accept the terms and conditions');
        }
    };

    return (
        <div className='min-h-screen w-full bg-black-800'>
            <LogoNavbar />
            <div className="flex flex-col md:flex-row w-full items-center text-white md:justify-center md:px-16">

                <div className="order-1 flex items-center w-full md:w-1/2 p-2 md:p-8">
                    <div className="flex flex-col gap-5">
                        <Image src={logo} alt="FutureTech Logo" width={60} height={60} className="sm:w-[60px] sm:h-[60px]" />
                        <blockquote className="text-3xl md:text-5xl text-left">
                            Welcome,<br />
                            Enter Your Details To<br />
                            Create Account
                        </blockquote>
                    </div>
                </div>

                <div className="order-2 flex items-center w-full md:w-2/3 p-4 md:p-8">
                    <form onSubmit={handleRegister} className='flex flex-col w-full md:w-auto'>
                        <div className="space-y-4">
                            <InputField
                                label="Full Name"
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter Your Full Name"
                                required={true}
                            />
                            <InputField
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Your Email Address"
                                required={true}
                            />
                            <InputField
                                label="Designation"
                                type="text"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                placeholder="Enter Your Designation"
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
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;