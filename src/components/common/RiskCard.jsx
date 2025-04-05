import React, { useState } from "react";

const RiskCard = ({ riskType, frequency, seriousness, lastReported, affectedZone, preventionTips, comments }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const getSeriousnessColor = (level) => {
        if (level >= 8) return "bg-red-500 text-white";
        if (level >= 5) return "bg-yellow-400 text-black";
        return "bg-green-500 text-white";
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{riskType}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeriousnessColor(seriousness)}`}>
                    Seriousness: {seriousness}
                </span>
            </div>
            <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Frequency:</span> {frequency}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Last Reported:</span> {lastReported}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Affected Zone:</span> {affectedZone}
                </p>
            </div>

            {(preventionTips || comments) && (
                <button
                    className="mt-4 text-blue-500 font-semibold text-sm underline"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? "Show More" : "Show Less"}
                </button>
            )}

            {!isCollapsed && (
                <div className="mt-4 space-y-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    {preventionTips && (
                        <div>
                            <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Prevention Tips:</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{preventionTips}</p>
                        </div>
                    )}
                    {comments && (
                        <div>
                            <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Comments:</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{comments}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default RiskCard;
