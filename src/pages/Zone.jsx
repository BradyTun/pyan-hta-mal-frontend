import React from "react";
import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Zone = () => {
  const zone = {
    name: "Zone A",
    location: "Region 1",
    riskLevel: 8,
    affectedPopulation: 5000, // Added affectedPopulation
    topNeeds: [
      {
        name: "Water",
        level: "Critical",
        note: "Shortage of clean drinking water",
      },
      { name: "Food", level: "High", note: "Limited food supplies available" },
      {
        name: "Shelter",
        level: "Moderate",
        note: "Temporary shelters are overcrowded",
      },
    ],
    description:
      "Zone A is heavily affected by recent floods, requiring immediate attention.",
    lastUpdated: "2023-10-01",
    risks: [
      { name: "Flood", severity: 9 },
      { name: "Landslide", severity: 7 },
    ],
  };

  const getRiskLevelColor = (level) => {
    if (level >= 8) return "bg-red-500 text-white";
    if (level >= 5) return "bg-yellow-400 text-black";
    return "bg-green-500 text-white";
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-secondary p-6">
      {/* Header */}
      <header className="bg-primary z-20 text-white fixed top-0 left-0 w-full shadow-md py-4 px-6 text-2xl font-bold">
        {zone.name}
      </header>

      <div className="max-w-3xl mx-auto mt-16 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        {/* Last Updated */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last Updated: {zone.lastUpdated}
        </p>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          {zone.description}
        </p>

        {/* Location */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" /> Location
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{zone.location}</p>
        </div>

        {/* Affected Population */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
            <FaUsers className="text-blue-500" /> Affected Population
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {zone.affectedPopulation.toLocaleString()} people
          </p>
        </div>

        {/* Risk Level */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-primary">Risk Level</h2>
          <span
            className={`inline-block px-4 py-2 rounded-lg font-medium mt-2 ${getRiskLevelColor(
              zone.riskLevel
            )}`}
          >
            {zone.riskLevel} / 10
          </span>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-primary">Top Needs</h2>
          <ul className="mt-2 space-y-3">
            {zone.topNeeds.map((need, index) => (
              <li key={index}>
                <Link
                  to={`/needs/${index + 1}`} // Dynamic route
                  className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaExclamationTriangle className="text-red-500" />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {need.name}:
                    </span>
                    <span className="text-primary ml-1">{need.level}</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {need.note}
                    </p>
                    <p className="text-sm text-blue-500 mt-1 underline">
                      Click to view more info (e.g., donors, suppliers)
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Risks */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-primary">Risks</h2>
          <ul className="mt-2 space-y-3">
            {zone.risks.map((risk, index) => (
              <li
                key={index}
                className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg"
              >
                <FaCheckCircle className="text-yellow-400" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {risk.name}{" "}
                  <span className="text-primary">
                    (Severity: {risk.severity})
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <button className="w-full mt-6 bg-primary text-white py-3 rounded-lg font-medium text-center hover:bg-secondary hover:text-primary transition-colors duration-300">
          Take Action
        </button>
      </div>
    </div>
  );
};

export default Zone;
