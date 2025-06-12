import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full">
            <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex-1 flex justify-center">
                    <ul className="hidden md:flex gap-8 text-white-800 font-medium">
                        <li className="hover:text-orange-700 transition-colors cursor-pointer font-bold text-xl">Home</li>
                        <li className="hover:text-orange-700 transition-colors cursor-pointer font-bold text-xl">Education</li>
                        <li className="hover:text-orange-700 transition-colors cursor-pointer font-bold text-xl">About Me</li>
                        <li className="hover:text-orange-700 transition-colors cursor-pointer font-bold text-xl">Contact Me</li>
                    </ul>
                </div>
                {/* Dropdown menu for navbar list elements */}
                <div className="md:hidden relative">
                    <button
                        type="button"
                        className="text-white-700 hover:text-orange-700 focus:outline-none"
                        aria-label="Open menu"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    {open && (
                        <ul className="absolute right-0 mt-2 w-48 bg-blue/90 rounded-md shadow-lg py-2 z-50">
                            <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-700 cursor-pointer font-bold text-lg text-white-800">Home</li>
                            <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-700 cursor-pointer font-bold text-lg text-white-800">Education</li>
                            <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-700 cursor-pointer font-bold text-lg text-white-800">About Me</li>
                            <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-700 cursor-pointer font-bold text-lg text-white-800">Contact Me</li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar