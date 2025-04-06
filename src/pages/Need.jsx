import React from "react";
import { FaExclamationTriangle, FaCheckCircle, FaUsers, FaTruck, FaExternalLinkAlt } from "react-icons/fa";

const Need = () => {
    const need = {
        title: "Clean Water Supply",
        description: "Provide clean drinking water to affected areas.",
        zone: "Zone A",
        priority: 8,
        type: "Infrastructure",
        term: "Short-term",
        donors: [
            { name: "Donor A", link: "https://example.com/donor-a" },
            { name: "Donor B", link: "https://example.com/donor-b" },
        ],
        suppliers: [
            { name: "Supplier X", link: "https://example.com/supplier-x" },
            { name: "Supplier Y", link: "https://example.com/supplier-y" },
        ],
        suggestedSolutions: [
            "Install water purification systems",
            "Distribute bottled water",
        ],
        deliveryETA: "2023-11-15",
    };

    const getPriorityColor = (priority) => {
        if (priority >= 8) return "bg-red-500 text-white";
        if (priority >= 5) return "bg-yellow-400 text-black";
        return "bg-green-500 text-white";
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-secondary p-6">
            {/* Header */}
            <header className="bg-primary z-20 text-white fixed top-0 left-0 w-full shadow-md py-4 px-6 text-2xl font-bold">
                {need.title}
            </header>

            <div className="max-w-3xl mx-auto mt-16 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                {/* Description */}
                <p className="text-lg text-gray-200 dark:text-gray-300 mt-2">{need.description}</p>

                {/* Details */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-primary">Details</h2>
                    <div className="grid grid-cols-2 text-gray-200 gap-4 mt-4">
                        <p>
                            <strong>Zone:</strong> {need.zone}
                        </p>
                        <p>
                            <strong>Priority:</strong>{" "}
                            <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(
                                    need.priority
                                )}`}
                            >
                                {need.priority} / 10
                            </span>
                        </p>
                        <p>
                            <strong>Type:</strong> {need.type}
                        </p>
                        <p>
                            <strong>Term:</strong> {need.term}
                        </p>
                        <p>
                            <strong>Delivery ETA:</strong> {need.deliveryETA}
                        </p>
                    </div>
                </div>

                {/* Donors */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                        <FaUsers className="text-blue-500" /> Donors
                    </h2>
                    <ul className="mt-2 space-y-3">
                        {need.donors.map((donor, index) => (
                            <li key={index} className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                <FaCheckCircle className="text-green-500" />
                                <a
                                    href={donor.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    {donor.name}
                                </a>
                                <FaExternalLinkAlt className="text-blue-500" />

                            </li>
                        ))}
                    </ul>
                </div>

                {/* Suppliers */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                        <FaTruck className="text-yellow-500" /> Suppliers
                    </h2>
                    <ul className="mt-2 space-y-3">
                        {need.suppliers.map((supplier, index) => (
                            <li key={index} className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                <FaCheckCircle className="text-yellow-400" />
                                <a
                                    href={supplier.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    {supplier.name}
                                </a>
                                <FaExternalLinkAlt className="text-blue-500" />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Suggested Solutions */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-primary">Suggested Solutions</h2>
                    <ul className="mt-2 space-y-3">
                        {need.suggestedSolutions.map((solution, index) => (
                            <li key={index} className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                <FaExclamationTriangle className="text-red-500" />
                                <span className="text-gray-800 dark:text-gray-200">{solution}</span>
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

export default Need;