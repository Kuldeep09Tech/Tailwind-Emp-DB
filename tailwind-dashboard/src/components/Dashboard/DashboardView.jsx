import React from 'react';
import HeroSection from './HeroSection';
import SummaryCards from './SummaryCards';
import NotificationPanel from './NotificationPanel';
import LeaderboardTable from './LeaderboardTable';

const DashboardView = () => {
    return (
        <div className="w-full">

            {/* 1. Top Banner */}
            <HeroSection />

            {/* 2. Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                {/* Left Column (Stats & Updates) */}
                <div className="flex flex-col gap-6 w-full">
                    <SummaryCards />
                    <NotificationPanel />
                </div>

                {/* Right Column (Data Table) */}
                <div className="w-full">
                    <LeaderboardTable />
                </div>

            </div>
        </div>
    );
};

export default DashboardView;