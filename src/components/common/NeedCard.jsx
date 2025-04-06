import React from 'react';
import { FaChevronDown, FaMapMarkerAlt, FaClock, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NeedCard = ({ need }) => {
    const getUrgencyColor = (urgency) => {
        return urgency === 'High'
            ? 'bg-red-500 text-white'
            : urgency === 'Medium'
            ? 'bg-yellow-400 text-black'
            : 'bg-green-500 text-white';
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{need.type}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(need.urgency)}`}>
                    {need.urgency}
                </span>
            </div>

            {/* Need Details */}
            <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaMapMarkerAlt className="text-blue-500 mr-2" />
                    <span className="text-sm">
                        <strong className="text-gray-800 dark:text-white">Area:</strong> {need.area}
                    </span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaClock className="text-gray-500 mr-2" />
                    <span className="text-sm">
                        <strong className="text-gray-800 dark:text-white">Duration:</strong> {need.duration}
                    </span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaInfoCircle className="text-gray-500 mr-2" />
                    <span className="text-sm">
                        <strong className="text-gray-800 dark:text-white">Description:</strong> {need.description}
                    </span>
                </div>
            </div>

            {/* Link to Details Page */}
            {need.logistics && (
                <Link
                    to={`/needs/${need.id}`}
                    className="mt-4 flex items-center text-blue-600 font-semibold text-sm hover:underline"
                >
                    Show More
                </Link>
            )}
        </div>
    );
};

export default NeedCard;
