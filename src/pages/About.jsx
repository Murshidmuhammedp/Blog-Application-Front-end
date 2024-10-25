import React from 'react';
import logo from "../../front-end/public/images/logo.png";
// import arrow from "../../public/images/arrow.png";
import Image from 'next/image';

const About = () => {
    return (
        <div className="min-h-screen bg-customGray text-white p-10">
            <div className="max-w-6xl mx-auto h-full mt-20">
                <div className='flex flex-col md:flex-row justify-between  mb-20 '>
                    <div className="flex items-center mb-4 md:mb-0 mr-14">
                        <Image src={logo} alt="FutureTech Logo" width={100} height={100} className="sm:w-[200px] sm:h-[130px]" />
                    </div>
                    <div className=" md:text-left">
                        <p className="text-lg font-bold text-white mb-6 bg-customGray1 p-2 w-full md:w-1/3 rounded-md">Learn, Connect, and Innovate</p>
                        <h1 className="text-4xl md:text-5xl mb-6">
                            Be Part of the Future Tech Revolution
                        </h1>
                        <p className="text-gray-400">
                            Immerse yourself in the world of future technology. Explore our comprehensive resources,
                            connect with fellow tech enthusiasts, and drive innovation in the industry. Join a
                            dynamic community of forward-thinkers.
                        </p>
                    </div>
                </div>
                <div className='bg-black p-6 rounded-lg'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-customGray p-6 rounded-lg shadow-lg">
                            <div className="flex justify-between mb-2">
                                <h2 className="text-xl font-semibold mr-2">Resource Access</h2>
                                <Image src="/images/arrow.png" alt="arrow button" width={30} height={30} className="sm:w-[40px] sm:h-[40px]" />
                            </div>
                            <p className="text-gray-400">
                                Visitors can access a wide range of resources, including ebooks, whitepapers, and reports.
                            </p>
                        </div>
                        <div className="bg-customGray p-6 rounded-lg shadow-lg">
                            <div className="flex justify-between mb-2">
                                <h2 className="text-xl font-semibold mr-2">Community Forum</h2>
                                <Image src="/images/arrow.png" alt="arrow button" width={30} height={30} className="sm:w-[40px] sm:h-[40px]" />
                            </div>
                            <p className="text-gray-400">
                                Join our active community forum to discuss industry trends, share insights, and collaborate with peers.
                            </p>
                        </div>
                        <div className="bg-customGray p-6 rounded-lg shadow-lg">
                            <div className="flex justify-between mb-2">
                                <h2 className="text-xl font-semibold mr-2">Tech Events</h2>
                                <Image src="/images/arrow.png" alt="arrow button" width={30} height={30} className="sm:w-[40px] sm:h-[40px]" />
                            </div>
                            <p className="text-gray-400">
                                Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;