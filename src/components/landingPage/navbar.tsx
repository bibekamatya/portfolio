import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Icon from "./../Icons";
import useDarkMode from "../../hooks/useDarkmode";
import { NAVITEMS } from "../../dataSheet";

const Navbar = () => {
  const [active, setActive] = useState("About");
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-lg border-b border-gray-200 dark:border-gray-900 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="About"
            spy
            smooth
            duration={500}
            offset={-100}
            className="cursor-pointer group"
          >
            <span className="text-2xl font-display font-bold gradient-text group-hover:scale-105 transition-transform inline-block">
              Portfolio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {NAVITEMS.map(({ title }) => (
              <Link
                key={title}
                to={title}
                spy
                smooth
                duration={1200}
                offset={-80}
                onSetActive={() => setActive(title)}
                className={`px-4 py-2 rounded-lg font-medium cursor-pointer transition-all duration-200 ${
                  active === title
                    ? 'bg-brand-600 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {title}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2.5 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-brand-100 dark:hover:bg-white/20 transition-all border border-gray-200 dark:border-white/10"
            >
              <Icon icon={!isDarkMode ? "sun" : "moon"} className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-brand-100 dark:hover:bg-white/20 transition-all border border-gray-200 dark:border-white/10"
            >
              <Icon icon={!isDarkMode ? "sun" : "moon"} className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-brand-100 dark:hover:bg-white/20 transition-all border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white dark:bg-gray-900 rounded-2xl p-4 space-y-2 border border-gray-200 dark:border-gray-800 shadow-xl">
            {NAVITEMS.map(({ title }) => (
              <Link
                key={title}
                to={title}
                spy
                smooth
                duration={1200}
                offset={-80}
                onClick={() => setIsMobileMenuOpen(false)}
                onSetActive={() => setActive(title)}
                className={`block px-4 py-3 rounded-lg font-medium cursor-pointer transition-all ${
                  active === title
                    ? 'bg-brand-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
