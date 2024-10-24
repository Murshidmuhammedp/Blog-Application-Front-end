// app/layout.js or app/(auth)/layout.js, depending on the folder structure
import AdminSidebar from '@/components/AdminSidebar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <AdminSidebar />
            <main>
                {children} {/* Render the child components */}
            </main>
            <footer>
                <p>My Application Footer</p>
            </footer>
        </div>
    );
};

export default layout;
