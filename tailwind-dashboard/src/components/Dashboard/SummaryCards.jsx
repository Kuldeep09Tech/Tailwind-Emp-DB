import React from 'react';
import { FiAward, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';
import content from '../../constants/content.json';

const SummaryCards = () => {
    const { title, cardList } = content.dashboard.summary;
    const { style: leaderboardStyle } = content.dashboard.leaderboard;
    const dateFormat = content.general?.dateFormat || "As of Today";

    const ICON_MAP = {
        "award": <FiAward />,
        "trophy": <FaTrophy />,
        "trending": <FiTrendingUp />,
        "chart": <FiBarChart2 />
    };

    const summaryTheme = {
        '--primary-color': leaderboardStyle?.primaryColor || '#2D3E8B',
    };

    return (
        <div
            style={summaryTheme}
            className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-full"
        >
            <h3 className="font-bold mb-4 text-base text-[var(--primary-color)]">
                {title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cardList.map((item) => (
                    <Card
                        key={item.id}
                        value={item.value}
                        label={item.label}
                        icon={ICON_MAP[item.iconKey]}
                    />
                ))}
            </div>

            <p className="mt-6 text-[11px] font-bold text-gray-400">
                {dateFormat}
            </p>
        </div>
    );
};

// Card Component 
const Card = ({ value, label, icon }) => (
    <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-center hover:shadow-md transition-all duration-200 border border-transparent hover:border-gray-200 min-w-0">
        <div className="flex flex-col gap-1 min-w-0 flex-1 mr-2">
            <h4 className="text-xl md:text-2xl font-black text-gray-800">
                {value}
            </h4>
            <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wide leading-tight whitespace-nowrap overflow-hidden text-ellipsis" title={label}>
                {label}
            </p>
        </div>

        {/* Icon color using Variable --- */}
        <div className="text-2xl md:text-3xl opacity-80 shrink-0 text-[var(--primary-color)]">
            {icon}
        </div>
    </div>
);

export default SummaryCards;