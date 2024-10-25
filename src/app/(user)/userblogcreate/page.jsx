"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import api from '@/api/interSepter';
import toast from 'react-hot-toast';
import LogoNavbar from '@/components/Navbar';

const UserBlogPage = () => {

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        const response = await api.post('/api/v1/blogs/create', data)
        toast.success(response.data.message)
    };

    const categories = ["Technology", "Health & Fitness", "Lifestyle", "Business & Finance", "Travel", "Food & Recipes", "Entertainment", "Education", "Fashion & Beauty", "Sports", "Politics", "Automobile", "Finance", "Wellness"]
    return (
        <>
            <LogoNavbar />
            <div className="flex justify-center items-center min-h-screen w-full bg-black text-white p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-customGray rounded-lg shadow-lg p-8 w-[1000px]  h-[850px]">
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="image">Blog Image</label>
                        <input
                            {
                            ...register('image')
                            }
                            type="file"
                            accept="image/*"
                            // onChange={(e) => setImage(e.target.files[0])}
                            className="w-full text-gray-900 p-2 rounded-md border border-gray-600"
                        />
                    </div>
                    <div className="flex mb-6">
                        <div className="w-2/3 pr-2">
                            <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="title">Blog Title</label>
                            <input
                                {...register('BlogTitle', {
                                    required: "Blog Title is required",
                                })}
                                type="text"
                                className="w-full text-white p-2 rounded-md  bg-gray-800 "
                            />
                            {errors.BlogTitle && (
                                <p className='text-red-500'>{`${errors.BlogTitle.message}`}</p>
                            )}
                        </div>
                        <div className="w-2/3 pl-2">
                            <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="publishingDate">Publishing Date</label>
                            <input
                                {...register('Date', {
                                    required: "Date is required",
                                })}
                                type="date"
                                className="w-full text-white p-2 rounded-md  bg-gray-800"
                            />
                            {errors.Date && (
                                <p className='text-red-500'>{`${errors.Date.message}`}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex mb-6">
                        <div className="w-2/3 pr-2">
                            <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="category">Category</label>
                            <select className="w-full text-white p-2 rounded-md  bg-gray-800"
                                id='Category'
                                {...register('Category', {
                                    required: "Category is required",
                                })}
                            >
                                <option value="">Select Category</option>
                                {categories.map((value, index) => (
                                    <option key={index} value={value}>{value}</option>
                                ))}
                            </select>
                            {errors.Category && (
                                <p className='text-red-500'>{`${errors.Category.message}`}</p>
                            )}
                        </div>
                        <div className="w-2/3 pr-2">
                            <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="authorName">Author Name</label>
                            <input
                                {...register('AuthorName', {
                                    required: "Author Name is required",
                                })}
                                type="text"
                                className="w-full text-white p-2 rounded-md  bg-gray-800"
                            />
                            {errors.AuthorName && (
                                <p className='text-red-500'>{`${errors.AuthorName.message}`}</p>
                            )}
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="paragraphTitle">Paragraph Title</label>
                        <input
                            {...register('ParagraphTitle', {
                                required: "Paragraph Title is required",
                            })}
                            type="text"
                            className="w-full text-white p-2 rounded-md  bg-gray-800"
                        />
                        {errors.ParagraphTitle && (
                            <p className='text-red-500'>{`${errors.ParagraphTitle.message}`}</p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2 text-gray-400" htmlFor="description">Description</label>
                        <textarea
                            {...register('Description', {
                                required: "Description is required",
                            })}
                            className="w-full text-white p-2 rounded-md  bg-gray-800 h-32"
                        ></textarea>
                        {errors.Description && (
                            <p className='text-red-500'>{`${errors.Description.message}`}</p>
                        )}
                    </div>
                    <div className="flex justify-end items-end  h-[180px]">
                        <button
                            type="submit"
                            className="bg-yellow-500 text-gray-900 h-10 px-8 rounded-md hover:bg-yellow-400 "
                        >
                            Create Blog
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserBlogPage;