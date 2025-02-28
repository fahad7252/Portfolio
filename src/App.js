import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  HashRouter,
} from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Menu,
  X,
  User,
  Briefcase,
  Code,
  MessageSquare,
} from "lucide-react";

// Import page components
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";
// Import components
import ParticleBackground from "./components/ParticleBackground";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle initial theme based on user preference
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="relative mb-10">
            <div className="w-24 h-24 rounded-full border-4 border-purple-200 animate-spin"></div>
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-t-4 border-l-4 border-purple-600 animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">
              DEV
            </div>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Loading Experience...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <HashRouter>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <ParticleBackground />

        <Header
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route
              path="/projects"
              element={<Projects darkMode={darkMode} />}
            />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>

        <Footer darkMode={darkMode} />

        <MobileNavigation />
      </div>
    </HashRouter>
  );
};

const Header = ({ menuOpen, toggleMenu, darkMode, toggleDarkMode }) => {
  const NavLinks = () => {
    const location = useLocation();
    const links = [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/projects", label: "Projects" },
      { path: "/contact", label: "Contact" },
    ];

    return (
      <>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`relative font-medium text-base transition-all duration-300 hover:text-purple-600 ${
              location.pathname === link.path
                ? "text-purple-600"
                : darkMode
                ? "text-white"
                : "text-gray-800"
            } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-purple-600 after:to-pink-600 after:transition-all after:duration-300 hover:after:w-full ${
              location.pathname === link.path ? "after:w-full" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg ${
        darkMode ? "bg-gray-900/80 text-white" : "bg-white/80 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold relative group">
          <span className="block transform transition-all duration-300 group-hover:scale-110">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Dev
            </span>
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              Folio
            </span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <button
            className={`text-2xl hover:text-purple-500 transition-colors`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileMenu
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        darkMode={darkMode}
      />
    </header>
  );
};

const MobileMenu = ({ menuOpen, toggleMenu }) => {
  const location = useLocation();

  return (
    <div
      className={`md:hidden fixed inset-0 bg-gradient-to-b from-gray-900 to-black bg-opacity-98 z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <nav className="flex flex-col items-center space-y-8">
        <Link
          to="/"
          className={`text-3xl font-bold transition-all duration-300 hover:text-purple-500 ${
            location.pathname === "/" ? "text-purple-500" : "text-white"
          }`}
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-3xl font-bold transition-all duration-300 hover:text-purple-500 ${
            location.pathname === "/about" ? "text-purple-500" : "text-white"
          }`}
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`text-3xl font-bold transition-all duration-300 hover:text-purple-500 ${
            location.pathname === "/projects" ? "text-purple-500" : "text-white"
          }`}
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={`text-3xl font-bold transition-all duration-300 hover:text-purple-500 ${
            location.pathname === "/contact" ? "text-purple-500" : "text-white"
          }`}
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-8 mt-20 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-600"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 . All rights reserved.</p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors"
            >
              <Code size={20} />
            </a>
            <a
              href="mailto:your@email.com"
              className="hover:text-purple-500 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MobileNavigation = () => {
  const location = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg shadow-purple-500/10 z-30">
      <div className="grid grid-cols-4 divide-x divide-gray-200 dark:divide-gray-700">
        <Link
          to="/"
          className={`flex flex-col items-center py-3 ${
            location.pathname === "/"
              ? "text-purple-600"
              : "text-gray-600 dark:text-gray-400"
          }`}
        >
          <User size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          to="/about"
          className={`flex flex-col items-center py-3 ${
            location.pathname === "/about"
              ? "text-purple-600"
              : "text-gray-600 dark:text-gray-400"
          }`}
        >
          <Briefcase size={20} />
          <span className="text-xs mt-1">About</span>
        </Link>
        <Link
          to="/projects"
          className={`flex flex-col items-center py-3 ${
            location.pathname === "/projects"
              ? "text-purple-600"
              : "text-gray-600 dark:text-gray-400"
          }`}
        >
          <Code size={20} />
          <span className="text-xs mt-1">Projects</span>
        </Link>
        <Link
          to="/contact"
          className={`flex flex-col items-center py-3 ${
            location.pathname === "/contact"
              ? "text-purple-600"
              : "text-gray-600 dark:text-gray-400"
          }`}
        >
          <MessageSquare size={20} />
          <span className="text-xs mt-1">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default App;
