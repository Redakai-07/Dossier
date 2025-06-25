import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-950/80 shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo or Brand */}
                <h1 className="text-orange-400 font-bold text-xl md:text-2xl">Logo Comes Here</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 text-white font-medium tracking-wide">
                    {["Home", "Education", "About Me", "Contact Me"].map((item, index) => (
                        <li
                            key={index}
                            className="cursor-pointer text-lg hover:text-orange-400 transition duration-300"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden relative">
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        className="text-white hover:text-orange-400 transition"
                        onClick={() => setOpen(!open)}
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Mobile Dropdown */}
                    {open && (
                        <ul className="absolute right-0 mt-3 w-44 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2 z-50">
                            {["Home", "Education", "About Me", "Contact Me"].map((item, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 text-sm text-white hover:bg-orange-500 hover:text-white cursor-pointer transition duration-200"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
