"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/images/FutureTech.png';

const AdminSidebar = () => {
    const [isBlogOpen, setIsBlogOpen] = useState(false);

    const toggleBlog = () => {
        setIsBlogOpen(!isBlogOpen);
    };

    return (
        <div className="min-h-screen w-64 bg-customGray text-white p-4">
            <div className="flex items-center justify-center mb-10">
                <Image src={logo} alt="Logo" width={150} height={60} />
            </div>
            <div className="space-y-6">
                <div>
                    <button
                        onClick={toggleBlog}
                        className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-700 rounded"
                    >
                        <span>Blog</span>
                        <span>{isBlogOpen ? '-' : '+'}</span>
                    </button>
                    {isBlogOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                            <a href="blogcreate" className="block p-2 hover:bg-gray-700 rounded">Create Blog</a>
                            <a href="bloglist" className="block p-2 hover:bg-gray-700 rounded">List Blog</a>
                        </div>
                    )}
                </div>
                <div>
                    <a href="userdashboard" className="block p-2 hover:bg-gray-700 rounded">Users</a>
                </div>
                <div>
                    <a href="adminsignin" className="block p-2 hover:bg-gray-700 rounded">Logout</a>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;