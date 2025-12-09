import React from 'react';
import { FaHome, FaChartBar, FaTrophy, FaStar } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="fixed left-0 top-20 h-70px w-[80px] bg-brand-blue flex flex-col items-center py-8 z-50 text-white shadow-xl rounded-r-2xl">

            <SidebarItem icon={<FaHome size={20} />} text="Home" />
            <SidebarItem icon={<FaChartBar size={20} />} text="Dashboard" />

            <SidebarItem icon={<FaTrophy size={20} />} text="Rewards And Performance" />
            <SidebarItem icon={<FaStar size={20} />} text="Redeem Points" />

            {/* Avatar */}
            <div className="mt-auto mb-0 w-10 h-10 bg-brand-red rounded-full flex justify-center items-center font-bold border-2 border-white relative cursor-pointer">
                A
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-brand-blue"></div>
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, text }) => (
    <div className="flex flex-col items-center mb-8 cursor-pointer group opacity-90 hover:opacity-100 transition-all w-full px-1">
        <div className="w-11 h-11 bg-white/20 rounded-xl flex justify-center items-center mb-2 shadow-sm group-hover:bg-white/40 transition-colors">
            {icon}
        </div>
        <span className="text-[10px] font-medium tracking-wide text-center leading-3">
            {text}
        </span>
    </div>
);

export default Sidebar;
