import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const navLinks = ["Home", "About", "Skills", "Projects"];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header
  className={`fixed top-0 left-0 right-0 w-full overflow-x-hidden z-50 px-6 md:px-12 py-5 transition-all duration-300 ${
    scrolled ? "bg-white shadow-sm" : "bg-transparent"
  }`}
>
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-extrabold text-gray-900">
          SS<span className="text-emerald-500">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <nav>
            <ul className="flex gap-8">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 font-medium hover:text-emerald-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-full"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-lg p-5 max-w-full overflow-hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 font-medium hover:text-emerald-500"
                >
                  {item}
                </a>
              </li>
            ))}

            <a
              href="#contact"
              className="bg-emerald-500 text-white text-center py-2 rounded-full mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact Me
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;