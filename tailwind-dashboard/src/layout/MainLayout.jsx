import React, { useState } from 'react';
// These imports were missing or incorrect
import Sidebar from '../components/Navigation/Sidebar';
import Header from '../components/Navigation/Header';

const MainLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen font-sans bg-ui-bg">

            {/* 1. Sidebar is called here, so it must be imported above */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* 2. Header is called here */}
            <Header toggleSidebar={toggleSidebar} />

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                ></div>
            )}

            {/* Main Content Area */}
            {/* Margin-left [90px] pushes content to the right of the sidebar */}
            <main className="pt-[60px] md:ml-[90px] min-h-screen transition-all duration-300">
                <div className="p-4 md:p-6 h-full">
                    {children}
                </div>
            </main>

        </div>
    );
};

export default MainLayout;