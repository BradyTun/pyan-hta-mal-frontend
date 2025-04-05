import React from "react";

const Need = () => {
    const need = {
        title: "Clean Water Supply",
        description: "Provide clean drinking water to affected areas.",
        zone: "Zone A",
        priority: 8,
        type: "Infrastructure",
        term: "Short-term",
        donors: ["Donor A", "Donor B"],
        suppliers: ["Supplier X", "Supplier Y"],
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
        <div className="min-h-screen text-gray-800 p-6">
            <div className="mx-auto bg-white rounded-lg p-6">
                <h1 className="text-3xl font-bold text-primary mb-4">{need.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{need.description}</p>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-primary mb-2">Details</h2>
                    <div className="grid grid-cols-2 gap-4">
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

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-primary mb-2">Donors</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        {need.donors.map((donor, index) => (
                            <li key={index}>{donor}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-primary mb-2">Suppliers</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        {need.suppliers.map((supplier, index) => (
                            <li key={index}>{supplier}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-primary mb-2">Suggested Solutions</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        {need.suggestedSolutions.map((solution, index) => (
                            <li key={index}>{solution}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6 border-t border-gray-300 pt-4">
                    <h3 className="text-lg font-semibold text-primary mb-2">Comments</h3>
                    <p className="text-gray-600">No comments yet.</p>

                    <h3 className="text-lg font-semibold text-primary mt-4 mb-2">Update Log</h3>
                    <p className="text-gray-600">No updates yet.</p>
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-lg font-medium text-center hover:bg-secondary hover:text-primary transition-colors duration-300 mt-6">
                    Take Action
                </button>
            </div>
        </div>
    );
};

export default Need;