import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

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
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled 
          ? "bg-gradient-to-br from-gray-900/95 via-slate-900/95 to-gray-900/95 shadow-2xl border-b border-blue-500/30" 
          : "bg-gradient-to-br from-gray-900/80 via-slate-900/80 to-gray-900/80"
      }`}
    >
      {/* Background decorative elements for scrolled state */}
      {scrolled && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-24 h-24 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="group">
          <img
            src={logo}
            alt="VPK Logo"
            className="h-8 md:h-10 cursor-pointer select-none hover:scale-105 transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl filter brightness-100 hover:brightness-110"
            onClick={() => navigate("/")}
          />
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-white font-semibold tracking-wide" role="menubar">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="cursor-pointer text-lg hover:text-blue-400 transition-all duration-300 relative group"
              onClick={() => handleNavigate(item.path)}
              role="menuitem"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") handleNavigate(item.path);
              }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-indigo-400 transition-all duration-300 group-hover:w-full rounded-full delay-75"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden relative">
          <button
            type="button"
            aria-label="Toggle menu"
            className={`p-2 rounded-lg transition-all duration-300 ${
              open 
                ? "bg-gradient-to-r from-blue-600/20 to-teal-600/20 text-blue-400" 
                : "text-white hover:text-blue-400 hover:bg-slate-800/50"
            }`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 w-56 bg-slate-900/95 backdrop-blur-md border border-blue-500/20 rounded-2xl shadow-2xl py-4 z-50 animate-fadeIn">
              <div className="px-4 py-2 mb-2 border-b border-blue-500/20">
                <p className="text-xs text-blue-300 font-medium">Navigation</p>
              </div>
              <ul
                id="mobile-menu"
                ref={mobileMenuRef}
                className="space-y-1"
                role="menu"
              >
                {NAV_ITEMS.map((item) => (
                  <li
                    key={item.path}
                    className="px-4 py-3 text-base text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-teal-600/20 hover:text-blue-300 cursor-pointer transition-all duration-300 mx-2 rounded-xl group"
                    onClick={() => handleNavigate(item.path)}
                    role="menuitem"
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === "Enter" || e.key === " ") handleNavigate(item.path);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.label}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
