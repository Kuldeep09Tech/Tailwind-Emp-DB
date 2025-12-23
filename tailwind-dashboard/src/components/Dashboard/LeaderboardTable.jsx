import React, { useState, useMemo } from 'react';
import content from '../../constants/content.json';
import mockData from '../../data/mockData.json';
import Pagination from '../Shared/Pagination';

const LeaderboardTable = () => {
    // JSON data extraction
    const {
        title,
        filters,
        columns,
        emptyState,
        settings,
        style
    } = content.dashboard.leaderboard;

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = settings.itemsPerPage;

    // Filter logic
    const filteredData = useMemo(() => {
        return mockData.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const currentData = filteredData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    const tableTheme = {
        '--primary-color': style.primaryColor,
        '--rank-color': style.rankColor,
        '--container-padding': style.containerPadding,
    };

    return (
        <div
            className="bg-white rounded-sm shadow-sm border border-gray-200 min-h-[600px] w-full overflow-hidden p-[var(--container-padding)]"
            style={tableTheme} 
        >
            {/* --- SECTION 1: FILTERS --- */}
            <div className="flex flex-row items-center mb-8 w-full gap-2">
                <input
                    type="text"
                    placeholder={filters.searchPlaceholder}
                    className="flex-1 min-w-[100px] border border-gray-300 p-2 text-sm outline-none focus:ring-1 focus:ring-blue-400 rounded-sm"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                />

                <select className="flex-1 min-w-[80px] border border-gray-300 p-2 text-sm text-gray-700 outline-none bg-white cursor-pointer rounded-sm">
                    <option>{filters.cohortDropdown}</option>
                </select>

                <select className="flex-1 min-w-[80px] border border-gray-300 p-2 text-sm text-gray-700 outline-none bg-white cursor-pointer rounded-sm">
                    <option>{filters.scaleDropdown}</option>
                </select>

                {/* Yahan Tailwind ki arbitrary value [var(--name)] use ki hai */}
                <button className="flex-none px-4 md:px-8 py-2 text-white text-sm font-semibold rounded-sm hover:opacity-90 transition-all whitespace-nowrap bg-[var(--primary-color)]">
                    {filters.submitBtn}
                </button>
            </div>

            {/* --- SECTION 2: TITLE --- */}
            <h2 className="text-xl font-bold mb-8 text-[var(--primary-color)]">
                {title}
            </h2>

            {/* --- SECTION 3: TABLE --- */}
            <div className="overflow-x-auto w-full">
                <table className="w-full border-collapse min-w-[500px]">
                    <thead>
                        <tr className="text-gray-400 text-xs uppercase border-b border-gray-100">
                            {columns.map((col) => (
                                <th key={col.key} className={`pb-4 font-semibold px-2 text-${col.align}`}>
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((user) => (
                                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50/30 transition-colors">
                                    {columns.map((col) => (
                                        <td
                                            key={col.key}
                                            className={`py-4 px-2 text-sm font-bold text-${col.align} ${col.key === 'rank' ? 'text-[var(--rank-color)]' : 'text-[var(--primary-color)]'
                                                }`}
                                        >
                                            {col.key === 'name' ? user[col.key].toUpperCase() : user[col.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="py-10 text-center text-gray-400 italic font-medium">
                                    {emptyState}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="mt-8">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </div>
    );
};

export default LeaderboardTable;
