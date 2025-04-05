import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaClock, FaInfoCircle } from 'react-icons/fa';

const NeedCard = ({ need }) => {
    const [isExpanded, setIsExpanded] = useState(false);

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

            {/* Expandable Section for Logistics */}
            {need.logistics && (
                <>
                    <button
                        className="mt-4 flex items-center text-blue-600 font-semibold text-sm hover:underline"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? (
                            <>
                                Show Less <FaChevronUp className="ml-2" />
                            </>
                        ) : (
                            <>
                                Show More <FaChevronDown className="ml-2" />
                            </>
                        )}
                    </button>

                    {isExpanded && (
                        <div className="mt-4 space-y-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 dark:text-white text-sm">Logistics Info:</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <strong>Donors:</strong> {need.logistics?.donors || 'N/A'}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <strong>Suppliers:</strong> {need.logistics?.suppliers || 'N/A'}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <strong>Estimated Arrival:</strong> {need.logistics?.estimatedArrival || 'N/A'}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <strong>Solution Suggestions:</strong> {need.logistics?.solutionSuggestions || 'N/A'}
                            </p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default NeedCard;
