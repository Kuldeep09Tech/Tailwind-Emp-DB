import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import content from '../../constants/content.json';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Leaderboard se primary color le rahe hain
    const primaryColor = content.dashboard.leaderboard.style.primaryColor;

    if (totalPages <= 1) return null;

    const getVisiblePages = () => {
        const delta = 2;
        const range = [];
        for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
            range.push(i);
        }
        return range;
    };

    const pages = getVisiblePages();

    return (
        <div
            className="flex justify-center md:justify-end items-center mt-6 gap-2"
            // Sirf ek baar yahan variable define kiya
            style={{ '--active-bg': primaryColor }}
        >
            {/* PREVIOUS BUTTON */}
            <button
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <FaChevronLeft size={16} />
            </button>

            {/* PAGE NUMBERS */}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`
                        w-10 h-10 text-sm rounded-lg transition-all font-bold
                        ${currentPage === page
                            ? 'text-white shadow-md scale-110 bg-[var(--active-bg)]' // Inline style hata kar Tailwind variable use kiya
                            : 'text-gray-600 hover:bg-gray-100'
                        }
                    `}
                >
                    {page}
                </button>
            ))}

            {/* NEXT BUTTON */}
            <button
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <FaChevronRight size={16} />
            </button>
        </div>
    );
};

export default Pagination;