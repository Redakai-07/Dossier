import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Education", path: "/education" },
  { label: "About Me", path: "/about" },
  { label: "Contact Me", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-500 ${
        scrolled ? "bg-gray-900/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand */}
        <h1
          className="text-orange-400 font-extrabold text-2xl md:text-3xl cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          MyUniqueLogo
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-white font-semibold tracking-wide" role="menubar">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="cursor-pointer text-lg hover:text-orange-500 transition duration-300"
              onClick={() => handleNavigate(item.path)}
              role="menuitem"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") handleNavigate(item.path);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden relative">
          <button
            type="button"
            aria-label="Toggle menu"
            className="text-white hover:text-orange-500 transition"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Dropdown */}
          {open && (
            <ul
              id="mobile-menu"
              ref={mobileMenuRef}
              className="absolute right-0 mt-3 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-3 z-50 animate-fadeIn"
              role="menu"
            >
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.path}
                  className="px-5 py-3 text-base text-white hover:bg-orange-500 hover:text-white cursor-pointer transition duration-200"
                  onClick={() => handleNavigate(item.path)}
                  role="menuitem"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") handleNavigate(item.path);
                  }}
                >
                  {item.label}
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
