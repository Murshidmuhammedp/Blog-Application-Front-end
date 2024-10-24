"use client"

import React, { useEffect, useState } from 'react'
import api from '@/api/interSepter'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import AdminSidebar from '@/components/AdminSidebar';


const ListBlogPage = () => {
    const [blogList, setBlogList] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const blogList = async () => {
            await api.get('/api/v1/blogs/')
                .then((response) => setBlogList(response.data.data))
                .catch((error) => console.log(error)
                );
        }
        blogList();
    }, [refresh])

    const handleDelete = async (Id) => {
        const response = await api.delete(`/api/v1/blogs/${Id}`)
        toast.success(response.data.message)
        setRefresh(!refresh)
    };

    return (
        <div className="flex">
            <AdminSidebar />

            <div className="overflow-x-auto  p-10 w-full">
                <table className="w-[1150px] bg-customGray shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-customGray1 text-white">
                            <th className="py-2 px-4">Author</th>
                            <th className="py-2 px-4">Category</th>
                            <th className="py-2 px-4">Title</th>
                            <th className="py-2 px-4">Date Published</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogList.map((blog, index) => (
                            <tr key={index} className="text-center border-b border-gray-500">
                                <td className="py-3 px-6">{blog.AuthorName}</td>
                                <td className="py-3 px-6">{blog.Category}</td>
                                <td className="py-3 px-6">{blog.BlogTitle}</td>
                                <td className="py-3 px-6">{blog.Date}</td>
                                <td className="py-4 px-8">
                                    <button className="text-blue-500 hover:text-blue-700 mr-2">
                                        <FaEdit />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(blog._id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListBlogPage
