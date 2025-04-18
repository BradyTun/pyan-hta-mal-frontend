import React, { useState } from "react";
import ZoneCard from "../components/common/ZoneCard";

const Zones = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [severityFilter, setSeverityFilter] = useState(10);
    const [needFilter, setNeedFilter] = useState("");

    const zones = [
        {
            name: "Zone A",
            location: "Region 1",
            timestamp: "2023-10-01",
            severityLevel: 5,
            prioritizedNeeds: ["Water", "Food", "Shelter"],
            affectedPopulation : "~ 5000",
            risks: [
                { name: "Flood", severity: 7 },
                { name: "Landslide", severity: 5 },
            ],
        },
        {
            name: "Zone B",
            location: "Region 2",
            timestamp: "2023-10-02",
            severityLevel: 8,
            affectedPopulation : "~ 5000",
            prioritizedNeeds: ["Food", "Medicine", "Clothing"],
            risks: [
                { name: "Earthquake", severity: 9 },
                { name: "Fire", severity: 6 },
            ],
        },
        {
            name: "Zone C",
            location: "Region 1",
            timestamp: "2023-10-03",
            severityLevel: 3,
            affectedPopulation : "~ 5000",
            prioritizedNeeds: ["Shelter", "Water", "Electricity"],
            risks: [
                { name: "Storm", severity: 4 },
                { name: "Flood", severity: 3 },
            ],
        },
        {
            name: "Zone D",
            location: "Region 3",
            timestamp: "2023-10-04",
            severityLevel: 7,
            affectedPopulation : "~ 5000",
            prioritizedNeeds: ["Medicine", "Food", "Water"],
            risks: [
                { name: "Drought", severity: 8 },
                { name: "Wildfire", severity: 7 },
            ],
        },
    ];

    const filteredZones = zones
        .filter(
            (zone) =>
                zone.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                zone.severityLevel <= severityFilter &&
                zone.prioritizedNeeds.some((need) =>
                    need.toLowerCase().includes(needFilter.toLowerCase())
                )
        )
        .reduce((grouped, zone) => {
            if (!grouped[zone.location]) grouped[zone.location] = [];
            grouped[zone.location].push(zone);
            return grouped;
        }, {});

    return (
        <div className="min-h-screen bg-background text-secondary p-6">
            <h1 className="text-3xl z-20 font-bold text-white bg-primary w-screen top-0 left-0 fixed p-4 mb-6">Zones</h1>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Search by zone name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                    value={severityFilter}
                    onChange={(e) => setSeverityFilter(Number(e.target.value))}
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value={10}>Severity: All</option>
                    <option value={1}>Severity: 1</option>
                    <option value={2}>Severity: 2</option>
                    <option value={3}>Severity: 3</option>
                    <option value={4}>Severity: 4</option>
                    <option value={5}>Severity: 5</option>
                    <option value={6}>Severity: 6</option>
                    <option value={7}>Severity: 7</option>
                    <option value={8}>Severity: 8</option>
                    <option value={9}>Severity: 9</option>
                </select>
                <select
                    value={needFilter}
                    onChange={(e) => setNeedFilter(e.target.value)}
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="">Need: All</option>
                    <option value="Water">Water</option>
                    <option value="Food">Food</option>
                    <option value="Shelter">Shelter</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electricity">Electricity</option>
                </select>
            </div>
            {Object.keys(filteredZones).length > 0 ? (
                Object.keys(filteredZones).map((region) => (
                    <div key={region} className="mb-8">
                        <h2 className="text-2xl font-semibold text-primary mb-4">{region}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredZones[region].map((zone) => (
                                <ZoneCard key={zone.name} zone={zone} />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No zones match the criteria.</p>
            )}
        </div>
    );
};

export default Zones;