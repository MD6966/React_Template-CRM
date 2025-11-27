import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Header from '../Header';
import useTheme from "../../hooks/useTheme";

const Layout = () => {

    // Theme hook (so Layout also responds to dark mode)
    const { theme } = useTheme();

    return (
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
            
            {/* Header */}
            <header className="w-full bg-white dark:bg-gray-800 shadow-sm z-10">
                <Header />
            </header>

            <div className="flex flex-1 overflow-hidden">

                {/* Sidebar (already supports dark mode) */}
                <SideBar />

                {/* Main Content area (Outlet) */}
                <main className="flex-1 h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 text-black dark:text-white p-4">
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default Layout;
