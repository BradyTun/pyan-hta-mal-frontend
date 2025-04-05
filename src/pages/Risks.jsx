import React from "react";
import RiskCard from "../components/common/RiskCard";

const Risks = () => {
    const risk = {
        riskType: "Clean Water Supply",
        frequency: "High",
        seriousness: 8,
        lastReported: "2023-10-01",
        affectedZone: "Zone A",
        preventionTips: "Install water purification systems, distribute bottled water.",
        comments: "Urgent need for clean water in Zone A.",
    };

    return (
        <div className="min-h-screen bg-background text-secondary p-6">
            <div className="">
            <h1 className="text-3xl z-20 z-20 font-bold text-white bg-primary w-screen top-0 left-0 fixed p-4 mb-6">Risks</h1>
                <div className="bg-white rounded-lg mb-6">
                    <RiskCard
                        riskType={risk.riskType}
                        frequency={risk.frequency}
                        seriousness={risk.seriousness}
                        lastReported={risk.lastReported}
                        affectedZone={risk.affectedZone}
                        preventionTips={risk.preventionTips}
                        comments={risk.comments}
                    />
                </div>
            </div>
        </div>
    );
};

export default Risks;
