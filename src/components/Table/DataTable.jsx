import React, { useState } from 'react';
import { MdEdit, MdDelete, MdVisibility, MdSearch, MdPeople } from 'react-icons/md';

// =============================================
// REUSABLE TABLE COMPONENT - COPY THIS TO A SEPARATE FILE
// File: components/DataTable.jsx
// =============================================
export const DataTable = ({
    columns,
    data,
    onView,
    onEdit,
    onDelete,
    searchable = true,
    entriesPerPageOptions = [10, 25, 50, 100]
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState(entriesPerPageOptions[0]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    // Filter data based on search
    const filteredData = data.filter(row =>
        columns.some(column => {
            const value = row[column.key];
            return value && value.toString().toLowerCase().includes(searchTerm.toLowerCase());
        })
    );

    // Sort data
    const sortedData = React.useMemo(() => {
        if (!sortConfig.key) return filteredData;

        return [...filteredData].sort((a, b) => {
            const aVal = a[sortConfig.key];
            const bVal = b[sortConfig.key];

            if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [filteredData, sortConfig]);

    // Pagination
    const totalPages = Math.ceil(sortedData.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const paginatedData = sortedData.slice(startIndex, startIndex + entriesPerPage);

    const handleSort = (key) => {
        setSortConfig({
            key,
            direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
        });
    };

    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            {/* Header Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                {/* Entries per page */}
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Show</span>
                    <select
                        value={entriesPerPage}
                        onChange={(e) => {
                            setEntriesPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                        className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                        {entriesPerPageOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <span className="text-gray-600 dark:text-gray-400">entries</span>
                </div>

                {/* Search */}
                {searchable && (
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Search:</span>
                        <input
                            type="text"
                            placeholder=""
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="px-4 py-1.5 w-64 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    onClick={() => column.sortable && handleSort(column.key)}
                                    className={`px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider ${column.sortable ? 'cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors' : ''
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        {column.label}
                                        {column.sortable && sortConfig.key === column.key && (
                                            <span className="text-gray-400">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                                        )}
                                    </div>
                                </th>
                            ))}
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                    {columns.map((column, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300"
                                        >
                                            {column.render ? column.render(row) : row[column.key]}
                                        </td>
                                    ))}
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            {onView && (
                                                <button
                                                    onClick={() => onView(row)}
                                                    className="p-2 text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all border border-teal-400 hover:border-teal-500"
                                                    title="View"
                                                >
                                                    <MdVisibility className="text-lg" />
                                                </button>
                                            )}
                                            {onEdit && (
                                                <button
                                                    onClick={() => onEdit(row)}
                                                    className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all border border-blue-400 hover:border-blue-500"
                                                    title="Edit"
                                                >
                                                    <MdEdit className="text-lg" />
                                                </button>
                                            )}
                                            {onDelete && (
                                                <button
                                                    onClick={() => onDelete(row)}
                                                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all border border-red-400 hover:border-red-500"
                                                    title="Delete"
                                                >
                                                    <MdDelete className="text-lg" />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length + 1}
                                    className="px-4 py-8 text-center text-gray-500 dark:text-gray-400"
                                >
                                    No data found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Info - Only show if there's data */}
            {sortedData.length > 0 && (
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        Showing {startIndex + 1} to {Math.min(startIndex + entriesPerPage, sortedData.length)} of {sortedData.length} entries
                    </div>

                    {totalPages > 1 && (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Previous
                            </button>
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                let pageNum;
                                if (totalPages <= 5) {
                                    pageNum = i + 1;
                                } else if (currentPage <= 3) {
                                    pageNum = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    pageNum = currentPage - 2 + i;
                                }
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${currentPage === pageNum
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// =============================================
// USERS COMPONENT - COPY THIS TO YOUR Users.jsx FILE
// =============================================


export default DataTable;

