import React from 'react';

const Risk = () => {
    const riskData = {
        type: 'Flood',
        affectedZones: ['Zone A', 'Zone B'],
        seriousness: 8,
        frequency: 'Recurring',
        lastReports: ['2023-10-01', '2023-09-15', '2023-09-01'],
        preventionTips: [
            'Build proper drainage systems.',
            'Regularly clean gutters and waterways.',
            'Monitor weather forecasts and alerts.',
        ],
        possibleResponses: [
            'Evacuate affected areas.',
            'Provide emergency supplies.',
            'Deploy rescue teams.',
        ],
    };

    return (
        <div className="p-6 bg-background text-secondary font-sans">
            <h1 className="text-2xl font-bold text-primary mb-6">Risk Details</h1>
            <div className="mb-4">
                <strong className="block text-lg">Type:</strong>
                <span className="text-base">{riskData.type}</span>
            </div>
            <div className="mb-4">
                <strong className="block text-lg">Affected Zones:</strong>
                <span className="text-base">{riskData.affectedZones.join(', ')}</span>
            </div>
            <div className="mb-4">
                <strong className="block text-lg">Seriousness:</strong>
                <div className="flex items-center">
                    <span className="text-base">{riskData.seriousness} / 10</span>
                    <div
                        className={`ml-4 w-4 h-4 rounded-full ${
                            riskData.seriousness > 7 ? 'bg-red-500' : 'bg-yellow-500'
                        }`}
                        title={`Seriousness: ${riskData.seriousness}`}
                    ></div>
                </div>
            </div>
            <div className="mb-4">
                <strong className="block text-lg">Frequency:</strong>
                <span
                    className={`text-base font-semibold ${
                        riskData.frequency === 'Recurring' ? 'text-red-500' : 'text-green-500'
                    }`}
                >
                    {riskData.frequency}
                </span>
            </div>
            <div className="mb-4">
                <strong className="block text-lg">Last Reports:</strong>
                <ul className="list-disc list-inside text-base">
                    {riskData.lastReports.map((report, index) => (
                        <li key={index}>{report}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <strong className="block text-lg">Prevention Tips:</strong>
                <ul className="list-disc list-inside text-base">
                    {riskData.preventionTips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <strong className="block text-lg">Possible Responses:</strong>
                <ul className="list-disc list-inside text-base">
                    {riskData.possibleResponses.map((response, index) => (
                        <li key={index}>{response}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <strong className="block text-lg">Comments:</strong>
                <div className="border border-gray-300 p-4 rounded bg-gray-100">
                    <em className="text-gray-500">Comment log placeholder...</em>
                </div>
            </div>
        </div>
    );
};

export default Risk;