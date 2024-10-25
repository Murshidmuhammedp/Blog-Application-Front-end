"use client"

import React, { useEffect, useState } from 'react'
import api from '@/api/interSepter'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const ListBlogPage = () => {
    const router = useRouter();
    
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

    const handleEdit = async (Id) => {
        router.push(`/blogedit?id=${Id}`);
    };

    return (
        <div className="overflow-x-auto p-8 w-full">
            <table className="min-w-fit max-w-fit bg-customGray shadow-md rounded-lg mx-auto">
                <thead>
                    <tr className="bg-customGray1 text-white">
                        <th className="py-2 px-2 ">Author</th>
                        <th className="py-2 px-2 ">Category</th>
                        <th className="py-2 px-2 ">Title</th>
                        <th className="py-2 px-2 ">Date Published</th>
                        <th className="py-2 px-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogList.map((blog, index) => (
                        <tr key={index} className="text-center border-b border-gray-500 hover:bg-gray-700 transition-colors duration-200">
                            <td className="py-2 px-4">{blog.AuthorName}</td>
                            <td className="py-2 px-4">{blog.Category}</td>
                            <td className="py-2 px-4">{blog.BlogTitle}</td>
                            <td className="py-2 px-4">{blog.Date}</td>
                            <td className="py-4 px-4 flex justify-center space-x-2">
                                <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEdit(blog._id)}>
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
    )
}

export default ListBlogPage
