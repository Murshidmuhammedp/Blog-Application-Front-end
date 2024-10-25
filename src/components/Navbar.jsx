"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../public/images/futureTech.png';


const LogoNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between w-full p-4 sm:p-6 md:p-8 bg-customGray text-white">
            <div className="flex items-center ml-4 md:ml-16">
                <Image src={logo} alt="FutureTech Logo" width={120} height={40} className="sm:w-[130px] sm:h-[40px]" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
                <a href="/homepage" className="text-gray-500 hover:text-gray-400">Home</a>
                <a href="#" className="text-gray-500 hover:text-gray-400">News</a>
                <a href="#" className="text-gray-500 hover:text-gray-400">Podcasts</a>
                <a href="#" className="text-gray-500 hover:text-gray-400">Resources</a>
            </div>
            <div className="hidden md:block">
                <a href="#" className="bg-yellow-400 text-black px-4 py-2  rounded-md hover:bg-yellow-500 mr-2">
                    Contact Us
                </a>
                <a href="signin" className="bg-blue-700 text-white px-4 py-2  rounded-md hover:bg-blue-600" onClick={() => {
                    localStorage.clear();
                }}
                >
                    Log Out
                </a>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-customGray1 text-white p-4 md:hidden">
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">News</a>
                        <a href="#" className="hover:text-gray-300">Podcasts</a>
                        <a href="#" className="hover:text-gray-300">Resources</a>
                        <a href="#" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600">
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default LogoNavbar;

