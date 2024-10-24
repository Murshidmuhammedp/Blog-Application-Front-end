"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from '../dashboard/page';
import api from '@/api/interSepter';
import toast from 'react-hot-toast';

const UserCard = ({ user }) => {
    const [userData, setUserdata] = useState([]);
    const [refresh, setRefresh] = useState(false)

    const toggleBlockStatus = async (id) => {
        await api.patch(`/api/v1/admin/users/${id}/block`)
            .then((res) => {
                toast.success(res.data.message)
            }).catch((err) => {
                console.log(err)
            })
        setRefresh(!refresh)
    };

    useEffect(() => {
        const fetchUsers = async () => {
            await api.get('/api/v1/admin/users')
                .then((response) => {
                    setUserdata(response.data.data)
                }).catch((error) => {
                    console.log(error)
                });
        }
        fetchUsers()
    }, [refresh])

    return (
        <div className="flex">
            <Sidebar />

            {userData.map((user, index) => (
                <div key={index} className="bg-userCard rounded-lg shadow-lg p-6 w-64 text-center mx-auto my-10 h-[350px]">
                    <div className="flex justify-center mb-4">
                        <img
                            src={user?.image || 'https://via.placeholder.com/100'}
                            alt={user?.name || 'User Avatar'}
                            className="w-24 h-24 rounded-full border-2 border-gray-300"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-1">{user?.FullName}</h2>
                    <p className="text-gray-400 mb-4">{user?.Designation || 'Software Developer'}</p>
                    <div className="flex justify-around text-gray-400 mb-4">
                        <div>
                            <p className="text-sm">Likes</p>
                            <p className="font-semibold">{user?.likes || 10}</p>
                        </div>
                        <div>
                            <p className="text-sm">Comments</p>
                            <p className="font-semibold">{user?.comments || 50}</p>
                        </div>
                        <div>
                            <p className="text-sm">Shares</p>
                            <p className="font-semibold">{user?.shares || 5}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => toggleBlockStatus(user._id)}
                        className={`px-4 py-2 rounded-lg text-white ${user.isDeleted ? 'bg-red-500' : 'bg-green-500'}`}
                    >
                        {user.isDeleted ? 'Unblock' : 'Block'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default UserCard;
