import React from 'react';
import * as FaIcons from 'react-icons/fa';
import content from '../../constants/content.json';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const { style, menuConfig } = content.sidebar;
    const { initial, avatarBg } = content.userProfile;
    const sidebarStyles = {
        '--sb-bg': style.backgroundColor,
        '--sb-h': style.height,
        '--sb-top': style.topGap,
        '--sb-w': isOpen ? style.mobileWidth : style.desktopWidth,
        '--avatar-bg': avatarBg,
        '--active-hover': style.hoverColor || 'rgba(255, 255, 255, 0.1)'
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <aside
                style={sidebarStyles}
                className={`fixed z-50 transition-all duration-300 shadow-2xl rounded-r-[40px] rounded-br-[40px] 
                    bg-[var(--sb-bg)] h-[var(--sb-h)] top-[var(--sb-top)] w-[var(--sb-w)]
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
            >
                <div className="flex flex-col items-center py-8 h-full">

                    {/* Menu items */}
                    <div className="flex flex-col gap-6 w-full overflow-y-auto no-scrollbar">
                        {menuConfig.map((item) => {
                            const Icon = FaIcons[item.icon];
                            return (
                                <div
                                    key={item.id}
                                    className="flex flex-col items-center cursor-pointer group px-2"
                                    <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-white/10 mb-1 group-hover:bg-[var(--active-hover)] transition-all">
                                        {Icon && <Icon size={22} className="text-white" />}
                                    </div>

                                    {/* Label */}
                                    <span className="text-[10px] text-white text-center font-medium leading-tight break-words w-full px-1">
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* User Profile Section */}
                    <div className="mt-auto mb-4 relative">
                        <div
                            className="w-12 h-12 rounded-full flex justify-center items-center font-bold border-2 border-white/20 text-white text-lg shadow-md bg-[var(--avatar-bg)]"
                        >
                            {initial}
                        </div>
                        {/* Status Dot */}
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-[var(--sb-bg)] bg-green-500"></div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
