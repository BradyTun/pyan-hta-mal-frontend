import { FaHandsHelping, FaBoxOpen, FaRecycle, FaHammer } from "react-icons/fa";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            {/* Header */}
            <header className="bg-primary text-white py-4 px-6 fixed top-0 left-0 w-full shadow-md z-10">
                <h1 className="text-3xl font-extrabold tracking-wide">ပြန်ထမယ်</h1>
            </header>

            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center" 
                style={{ backgroundImage: "url('/images/earthquake-relief.jpg')" }}>
                <div className="bg-black bg-opacity-50 p-10 rounded-lg backdrop-blur-sm">
                    <h2 className="text-4xl font-bold text-white mb-4">Together We Rebuild</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Dedicated to earthquake relief in Myanmar, we focus on <span className="text-yellow-400 font-semibold">Respond</span>, <span className="text-yellow-400 font-semibold">Relief</span>, <span className="text-yellow-400 font-semibold">Recover</span>, and <span className="text-yellow-400 font-semibold">Rebuild</span>.
                    </p>
                </div>
            </section>

            {/* 4 R's Section */}
            <main className="px-6 pt-16 pb-12 max-w-6xl mx-auto">
                <h2 className="text-center text-4xl font-extrabold text-primary mb-8">Our Mission: The 4 R's</h2>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/** Card Component */}
                    {[{
                        icon: <FaHandsHelping />, title: "Respond", color: "from-red-400 to-red-600", desc: "Immediate action to assess and address the needs of affected communities." 
                    }, {
                        icon: <FaBoxOpen />, title: "Relief", color: "from-green-400 to-green-600", desc: "Providing essential supplies and support to those in need." 
                    }, {
                        icon: <FaRecycle />, title: "Recover", color: "from-yellow-400 to-yellow-600", desc: "Helping communities regain stability and rebuild their lives." 
                    }, {
                        icon: <FaHammer />, title: "Rebuild", color: "from-blue-400 to-blue-600", desc: "Supporting long-term reconstruction and resilience efforts." 
                    }].map((item, index) => (
                        <div key={index} className={`relative p-8 rounded-xl shadow-lg bg-gradient-to-br ${item.color} text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}> 
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white text-primary p-4 rounded-full shadow-lg text-3xl">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-center mt-8">{item.title}</h3>
                            <p className="text-center mt-4 text-gray-200">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}