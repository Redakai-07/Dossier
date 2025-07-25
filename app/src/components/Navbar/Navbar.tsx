import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (index: number) => {
    switch (index) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/education");
        break;
      case 2:
        navigate("/about");
        break;
      case 3:
        navigate("/contact");
        break;
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-500 ${
        scrolled ? "bg-gray-900/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand */}
        <h1 className="text-orange-400 font-extrabold text-2xl md:text-3xl cursor-pointer select-none" onClick={() => navigate("/")}>
          MyUniqueLogo
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 text-white font-semibold tracking-wide">
          {["Home", "Education", "About Me", "Contact Me"].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-lg hover:text-orange-500 transition duration-300"
              onClick={() => handleNavigate(index)}
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
            className="text-white hover:text-orange-500 transition"
            onClick={() => setOpen(!open)}
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
            <ul className="absolute right-0 mt-3 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-3 z-50 animate-fadeIn">
              {["Home", "Education", "About Me", "Contact Me"].map((item, index) => (
                <li
                  key={index}
                  className="px-5 py-3 text-base text-white hover:bg-orange-500 hover:text-white cursor-pointer transition duration-200"
                  onClick={() => handleNavigate(index)}
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
