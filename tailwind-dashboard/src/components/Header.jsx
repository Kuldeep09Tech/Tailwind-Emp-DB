import React from 'react';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
    return (

        <div className="fixed top-0  left-0 right-[100px] w-[calc(100%-0px)] h-[60px] bg-brand-blue flex justify-end items-center px-6 text-white shadow-md z-40">
            <div className="cursor-pointer hover:opacity-80 transition-opacity">
                <FiLogOut size={24} />
            </div>
        </div>
    );
};

export default Header;