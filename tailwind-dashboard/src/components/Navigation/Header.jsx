import React from 'react';
import { FiLogOut, FiMenu } from 'react-icons/fi';
import content from '../../constants/content.json';

const Header = ({ toggleSidebar }) => {
    const { style } = content.sidebar;
    const { userName } = content.userProfile;

    return (
        <header
            style={{ backgroundColor: style.backgroundColor }}
            className="fixed top-0 left-0 z-40 h-[60px] w-full shadow-md flex justify-between xl:justify-end items-center px-6 text-white transition-all duration-300"
        >

            {/* Mobile/Zoom Hamburger Menu */}
            <button
                onClick={toggleSidebar}
                className="xl:hidden text-white focus:outline-none"
            >
                <FiMenu size={24} />
            </button>

            {/* Right Side: Name and Logout */}
            <div className="flex items-center gap-4">
                {/* User Name from JSON */}
                <span className="hidden sm:block text-sm font-medium">
                    {userName}
                </span>

                {/* Logout Icon */}
                <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <FiLogOut size={24} />
                </div>
            </div>

        </header>
    );
};

export default Header;