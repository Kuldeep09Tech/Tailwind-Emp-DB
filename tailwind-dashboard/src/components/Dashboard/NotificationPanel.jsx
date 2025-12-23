import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import content from '../../constants/content.json';

const NotificationPanel = () => {
    // 1. JSON se data nikalna
    const { title, sampleMessage, sampleTime } = content.dashboard.notifications;

    // Leaderboard style se primary color uthana taaki consistency bani rahe
    const primaryColor = content.dashboard.leaderboard.style.primaryColor;

    return (
        <div
            className="mt-8"
            // 2. CSS Variable set kiya (Sirf ek baar inline style ka use)
            style={{ '--notif-primary': primaryColor }}
        >
            {/* 3. Hardcoded color ki jagah variable use kiya */}
            <h3 className="font-bold mb-3 text-base text-[var(--notif-primary)]">
                {title}
            </h3>

            <div className="bg-white p-5 rounded-xl shadow-sm min-h-[200px] border border-gray-100 flex items-start">
                <div className="flex gap-4 items-start w-full">

                    {/* Icon Box: Tailwind arbitrary class with variable */}
                    <div className="w-10 h-10 text-white rounded-lg flex justify-center items-center shrink-0 shadow-sm bg-[var(--notif-primary)]">
                        <FaTrophy size={18} />
                    </div>

                    <div className="flex flex-col">
                        <h4 className="text-sm font-semibold text-gray-800 leading-snug">
                            {sampleMessage}
                        </h4>

                        <span className="text-xs text-gray-500 mt-1">
                            {sampleTime}
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotificationPanel;