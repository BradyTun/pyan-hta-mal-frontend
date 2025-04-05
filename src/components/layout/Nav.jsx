import { useState } from "react";
import { FaMapMarkedAlt, FaTint, FaExclamationTriangle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
    const [activeTab, setActiveTab] = useState("home");

    const tabs = [
        { id: "home", label: "ပြန်ထမယ်", icon: <FaHome />, link: "/" },
        { id: "zones", label: "Zones", icon: <FaMapMarkedAlt />, link: "/zones" },
        { id: "needs", label: "Needs", icon: <FaTint />, link: "/needs" },
        {
            id: "risks",
            label: "Risks",
            icon: <FaExclamationTriangle />,
            link: "/risks",
        },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 shadow-md rounded-t-lg">
            <ul className="flex justify-around items-center py-2">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={`flex flex-col items-center cursor-pointer transition-all ${
                            activeTab === tab.id ? "text-primary" : "text-gray-300"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <Link to={tab.link} className="flex flex-col items-center">
                            <div
                                className={`text-2xl ${
                                    activeTab === tab.id ? "scale-110" : ""
                                } transition-transform`}
                            >
                                {tab.icon}
                            </div>
                            <span className="text-sm">{tab.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
