import React, { useState } from 'react';
// 1. Summary Trophy
import { FiAward, FiTrendingUp, FiBarChart2 } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import leaderboardData from '../data/data.json';

const bannerImage = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80";

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 14;

    const filteredData = leaderboardData.filter((user) => {
        if (searchTerm === "") return user;
        else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) return user;
        return null;
    });

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = filteredData.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filteredData.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    return (
        <div className="p-5 overflow-y-auto h-[calc(100vh-60px)]">

            {/* HERO BANNER */}
            <div
                className="w-full h-[160px] bg-cover bg-center relative rounded-md mb-5 flex items-center justify-center text-center shadow-md"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <div className="absolute inset-0 bg-black/50 rounded-md"></div>
                <div className="relative z-10 text-white max-w-3xl px-4">
                    <h2 className="text-xl md:text-2xl font-medium drop-shadow-md leading-relaxed">Performance is not about being perfect,</h2>
                    <h2 className="text-xl md:text-2xl font-medium drop-shadow-md leading-relaxed">but about giving your best effort every single time.</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                {/* --- LEFT COLUMN --- */}
                <div className="flex flex-col gap-6 w-full">

                    {/* Summary Cards */}
                    <div>
                        <h3 className="text-blue-900 font-bold mb-3 text-base">Summary</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <SummaryCard number="10" text="Lifetime Total Points" icon={<FiAward />} />
                            <SummaryCard number="1" text="Lifetime Rewards Won" icon={<LuTrophy />} />
                            <SummaryCard number="1" text="Rank in Cohort (FY)" icon={<FiTrendingUp />} />
                            <SummaryCard number="13" text="Rank Pan-India (FY)" icon={<FiBarChart2 />} />
                        </div>
                        <p className="mt-2 text-[11px] font-bold text-gray-700">As of 02-12-2025</p>
                    </div>


                    <div>
                        <h3 className="text-blue-900 font-bold mb-3 text-base">Updates & Notification</h3>
                        <div className="bg-white p-5 rounded shadow-sm min-h-[200px] border border-gray-100">
                            <div className="flex gap-4 items-start">
                                <div className="w-9 h-9 bg-brand-blue text-white rounded flex justify-center items-center shrink-0 shadow-sm">
                                    <LuTrophy />
                                </div>
                                <div>
                                    <h4 className="text-[13px] font-medium text-gray-800 mb-1">Congratulations! You are selected for test campaign</h4>
                                    <span className="text-[11px] text-gray-500">26 Aug 2025 11:08</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN (Leaderboard) --- */}
                <div className="w-full overflow-x-hidden bg-white rounded pb-[15px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] gap-6">

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 mb-5 p-4">
                        <input
                            type="text"
                            placeholder="Search Name..."
                            className="flex-1 border border-gray-300 p-2 rounded text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <select className="border border-gray-300 p-2 rounded text-sm outline-none bg-white"><option>In Your Cohort</option></select>
                        <select className="border border-gray-300 p-2 rounded text-sm outline-none bg-white"><option>All Scale</option></select>
                        <button className="bg-brand-blue text-white px-5 py-2 rounded text-sm hover:opacity-90 transition-opacity shadow-sm">Submit</button>
                    </div>

                    <h3 className="text-blue-900 font-bold mb-4 text-base px-4">Reward Leaderboard</h3>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[500px]">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="text-left p-3 text-xs text-gray-500 font-medium w-[50px]">Rank</th>
                                    <th className="text-left p-3 text-xs text-gray-500 font-medium">Employee Name</th>
                                    <th className="text-right p-3 text-xs text-gray-500 font-medium">Points Earned</th>
                                    <th className="text-right p-3 text-xs text-gray-500 font-medium">Rewards Won</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.length > 0 ? (
                                    records.map((user, index) => (
                                        <tr key={index} className="border-b border-gray-50 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                                            <td className="p-3 text-center text-red-600 font-bold">{user.rank}</td>
                                            <td className="p-3 text-brand-blue uppercase">{user.name}</td>
                                            <td className="p-3 text-right">{user.points}</td>
                                            <td className="p-3 text-right text-yellow-600">{user.rewards}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center p-5 text-red-500 text-sm">No employees found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {npage > 1 && (
                        <div className="flex justify-end items-center mt-5 gap-1 px-4">
                            <button className="text-gray-500 hover:text-brand-blue p-1" onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}><FaChevronLeft /></button>
                            {numbers.map((n) => (
                                <button key={n}
                                    className={`w-6 h-6 flex items-center justify-center text-xs rounded ${currentPage === n ? 'bg-brand-blue text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                                    onClick={() => setCurrentPage(n)}
                                >{n}</button>
                            ))}
                            <button className="text-gray-500 hover:text-brand-blue p-1" onClick={() => currentPage < npage && setCurrentPage(currentPage + 1)}><FaChevronRight /></button>
                        </div>
                    )}
                </div>

            </div>
        </div >
    );
};

const SummaryCard = ({ number, text, icon }) => (
    <div className="bg-card-bg p-4 rounded-md flex justify-between items-start hover:shadow-sm transition-shadow">
        <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{number}</h3>
            <p className="text-xs text-gray-600 font-medium leading-tight">{text}</p>
        </div>
        <div className="text-3xl text-blue-900 pt-1">
            {icon}
        </div>
    </div>
);

export default Dashboard;