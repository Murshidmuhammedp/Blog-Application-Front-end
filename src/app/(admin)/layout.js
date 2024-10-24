// app/layout.js or app/(auth)/layout.js, depending on the folder structure
import AdminSidebar from '@/components/AdminSidebar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <AdminSidebar />
            <main className='flex-1 overflow-y-auto'>
                <div className="p-4">
                    {children} {/* Render the child components */}
                </div>
            </main>
        </div>
    );
};

export default layout;
