"use client"
import LogoNavbar from '@/components/Navbar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import image from '../../../../public/images/blogpage.png'
import api from '@/api/interSepter'
import arrow2 from '../../../../public/images/arrow2.png'
import About from '@/pages/About'
import Footer from '@/pages/Footer'

const page = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const blogList = async () => {
            await api.get('/api/v1/blogs/')
                .then((result) => {
                    setBlogs(result.data.data)
                    console.log(result)
                }).catch((error) => {
                    console.log(error)
                })
        }
        blogList();
    }, []);
    const dummyImage = 'https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2022/06/05074905/world-environment-day.jpg';


    return (
        <div>
            <LogoNavbar />
            <Image src={image} />

            {/* Blog Detailed Pages */}

            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
                {/* Left Content Area */}
                <div className="md:w-2/3 pr-6">
                    <h1 className="text-3xl font-bold mb-4 text-gray-400">Introduction Heading</h1>
                    <p className="text-white mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                        interdum neque, nec volutpat justo venenatis ut. Vivamus a nunc ac
                        felis luctus dictum.
                    </p>
                    <hr className="border-t border-gray-300 my-6" />
                    <h2 className="text-2xl font-semibold mb-4 text-gray-400">Brief Explanation</h2>
                    <p className="text-white">
                        Nulla facilisi. Phasellus in convallis erat. Sed eu urna ullamcorper,
                        aliquet erat in, tempus dui. Suspendisse tristique sapien euismod
                        magna consequat, nec fermentum nisl placerat.
                    </p>
                </div>

                {/* Right Meta Information Area */}
                <div className="md:w-1/3 mt-8 md:mt-0">
                    <div className="bg-customGray p-4 rounded-lg mb-6">
                        <div className="flex justify-evenly text-gray-400 mb-4">
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">Likes:</span>
                                <span>14k</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">Views:</span>
                                <span>10k</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">Shares:</span>
                                <span>1.2k</span>
                            </div>
                        </div>
                        <div className="flex justify-evenly text-gray-400 mb-1 mt-8">
                            <p className="font-semibold">Published Date</p>
                            <p className="font-semibold">Category</p>
                        </div>
                        <div className="flex justify-evenly text-white mb-8">
                            <p>2024-03-15</p>
                            <p>Technology</p>
                        </div>
                        <div className="flex justify-evenly text-gray-400 mb-1">
                            <p className="font-semibold">Author</p>
                            <p className="font-semibold">Reading Time</p>
                        </div>
                        <div className="flex justify-evenly text-white mb-6">
                            <p>John Doe</p>
                            <p>10 Min</p>
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <div className="bg-customGray p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-gray-400">Table of Contents</h3>
                        <ul className="list-disc list-inside text-white space-y-2">
                            <li>Introduction</li>
                            <li>Key Concepts</li>
                            <li>Use Cases</li>
                            <li>Conclusion</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Blog End  */}

            <div className=' border-t border-gray-700'>
                <h1>Similar news</h1>
                <button className="flex items-center border border-gray-500 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-800 mt-2 md:mt-0">
                    View All News
                    <Image src={arrow2} className="ml-2 w-4" alt="Arrow Icon" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6  p-14">
                    {blogs.slice(1, 4).map((blog, index) => (
                        <div key={index} className="bg-customGray rounded-lg shadow-md p-4">
                            <img
                                src={blog.image || dummyImage}
                                alt={blog.BlogTitle}
                                className="w-full h-48 rounded-md object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">{blog.BlogTitle}</h3>
                            <div className="text-gray-500 text-sm mb-2">
                                <p>{blog.Category}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button className="border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-800">Like</button>
                                <button className="border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-800">Share</button>
                            </div>
                            <div className='flex justify-end'>
                                <button className="flex items-center border border-gray-500 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 font-extralight">
                                    Read More
                                    <Image src={arrow2} className="ml-2 w-4" alt="Arrow Icon" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <About />
            <Footer />

        </div>
    )
}

export default page
