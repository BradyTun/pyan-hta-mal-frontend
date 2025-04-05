import React from "react";
import { FaMapMarkerAlt, FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ZoneCard = ({ zone = {} }) => {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            {/* Header Section */}
            <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{zone.name}</h2>
                <span className="text-xs text-gray-500">{zone.timestamp}</span>
            </div>

            {/* Zone Details */}
            <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaMapMarkerAlt className="text-blue-500 mr-2" />
                    <span className="text-sm">
                        <strong className="text-gray-800 dark:text-white">Location:</strong> {zone.location}
                    </span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaExclamationTriangle className="text-red-500 mr-2" />
                    <span className="text-sm">
                        <strong className="text-gray-800 dark:text-white">Severity Level:</strong> {zone.severityLevel}/10
                    </span>
                </div>
            </div>

            {/* Summary Section */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-md font-semibold text-gray-700 dark:text-white mb-2">Top Prioritized Needs</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {zone.prioritizedNeeds?.map((need, index) => (
                        <li key={index}>{need}</li>
                    ))}
                </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-md font-semibold text-gray-700 dark:text-white mb-2">Top Risks</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {zone.risks?.map((risk, index) => (
                        <li key={index}>
                            {risk.name} <span className="text-red-500 font-semibold">(Severity: {risk.severity})</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Action Button */}
            <Link
                to={`/zones/1`}
                className="block w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition duration-300"
            >
                View More Details
            </Link>
        </div>
    );
};

export default ZoneCard;
