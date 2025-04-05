import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaTelegram } from 'react-icons/fa';
import Nav from './Nav';

export default function Layout({ children }) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [location.pathname]); // Trigger on route change

    return (
        <div className="flex flex-col min-h-screen mb-14 mt-14">
            <main className="flex-grow">
                {children}
            </main>
            <Nav />
            {/* Floating Telegram Icon */}
            <div className="fixed top-0 right-6 flex flex-row items-center justify-center gap-2 space-y-2 z-50">
                <p className='text-xs text-white'>Join Telegram</p>
                <a
                    href="https://t.me/Pyanhtamal" // Replace with your actual Telegram link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-110 flex items-center justify-center w-12 h-12"
                    aria-label="Telegram"
                >
                    <FaTelegram className="text-2xl text-white" />
                </a>
            </div>
        </div>
    );
}
