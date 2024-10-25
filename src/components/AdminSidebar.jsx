"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../front-end/public/images/futureTech.png";

const AdminSidebar = () => {
    const [isBlogOpen, setIsBlogOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

    const toggleBlog = () => {
        setIsBlogOpen(!isBlogOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative">
            
            <button
                onClick={toggleSidebar}
                className="md:hidden p-4 text-white bg-gray-800 fixed top-0 left-0 z-50"
            >
                ☰
            </button>

            
            <div
                className={`min-h-screen w-64 bg-customGray text-white p-4 fixed top-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
            >
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
                            <span>{isBlogOpen ? "-" : "+"}</span>
                        </button>
                        {isBlogOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                                <a href="blogcreate" className="block p-2 hover:bg-gray-700 rounded">
                                    Create Blog
                                </a>
                                <a href="bloglist" className="block p-2 hover:bg-gray-700 rounded">
                                    List Blog
                                </a>
                            </div>
                        )}
                    </div>
                    <div>
                        <a href="userdashboard" className="block p-2 hover:bg-gray-700 rounded">
                            Users
                        </a>
                    </div>
                    <div>
                        <a href="adminsignin" className="block p-2 hover:bg-gray-700 rounded">
                            Logout
                        </a>
                    </div>
                </div>
            </div>

            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                ></div>
            )}
        </div>
    );
};

export default AdminSidebar;