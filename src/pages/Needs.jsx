import React, { useState } from "react";
import NeedCard from "../components/common/NeedCard";

const Needs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");
    const [termFilter, setTermFilter] = useState("");
    const [zoneFilter, setZoneFilter] = useState("");
    const [urgencyFilter, setUrgencyFilter] = useState("");

    const mockNeeds = [
        {
            id: 1,
            type: "Food",
            priority: "high",
            term: "short-term",
            zone: "Zone 1",
            urgency: "High",
            description: "Provide food supplies to Zone 1.",
            area: "Zone 1",
            duration: "1 week",
            logistics: {
                donors: "Local NGOs",
                suppliers: "Food Suppliers Inc.",
                estimatedArrival: "3 days",
                solutionSuggestions: "Increase food stock in nearby warehouses.",
            },
        },
        {
            id: 2,
            type: "Shelter",
            priority: "medium",
            term: "long-term",
            zone: "Zone 2",
            urgency: "Medium",
            description: "Build temporary shelters in Zone 2.",
            area: "Zone 2",
            duration: "3 months",
            logistics: {
                donors: "International Aid",
                suppliers: "Construction Co.",
                estimatedArrival: "2 weeks",
                solutionSuggestions: "Use prefabricated materials for faster setup.",
            },
        },
        {
            id: 3,
            type: "Medical",
            priority: "low",
            term: "short-term",
            zone: "Zone 3",
            urgency: "Low",
            description: "Distribute medical kits in Zone 3.",
            area: "Zone 3",
            duration: "2 weeks",
            logistics: {
                donors: "Health Organizations",
                suppliers: "Pharma Supplies Ltd.",
                estimatedArrival: "5 days",
                solutionSuggestions: "Partner with local clinics for distribution.",
            },
        },
    ];

    const filteredNeeds = mockNeeds.filter(
        (need) =>
            need.type.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (!priorityFilter || need.priority === priorityFilter) &&
            (!termFilter || need.term === termFilter) &&
            (!zoneFilter || need.zone === zoneFilter) &&
            (!urgencyFilter || need.urgency >= parseInt(urgencyFilter))
    );

    return (
        <div className="min-h-screen bg-background text-secondary p-6">
            <h1 className="text-3xl font-bold text-white bg-primary w-screen top-0 left-0 fixed p-4 mb-6">Needs</h1>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Search by need type"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="">All Priorities</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <select
                    value={termFilter}
                    onChange={(e) => setTermFilter(e.target.value)}
                    className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="">All Terms</option>
                    <option value="short-term">Short-Term</option>
                    <option value="long-term">Long-Term</option>
                </select>
                <select
                    value={zoneFilter}
                    onChange={(e) => setZoneFilter(e.target.value)}
                    className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="">All Zones</option>
                    <option value="Zone 1">Zone 1</option>
                    <option value="Zone 2">Zone 2</option>
                    <option value="Zone 3">Zone 3</option>
                </select>
            </div>
            {filteredNeeds.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNeeds.map((need) => (
                        <NeedCard key={need.id} need={need} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No needs match the criteria.</p>
            )}
        </div>
    );
};

export default Needs;
