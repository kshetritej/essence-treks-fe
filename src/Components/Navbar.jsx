import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { fadeIn, slideInRight, slideInLeft, scaleIn } from "../utils/animations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "bg-green-600 text-white rounded-lg px-6 py-2 inline-flex items-center transform hover:scale-105 transition-all duration-300"
      : "inline-flex items-center hover:bg-green-500 hover:text-white rounded-lg px-6 py-2 transition-all duration-300 text-gray-200 hover:scale-105";

  return (
    <div className="w-full mb-16">
      <div className={`fixed top-0 left-0 z-50 w-full lg:px-10 backdrop-blur-md py-3 border-b border-gray-800 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 shadow-lg" : "bg-transparent"
      }`}>
        <div className="navbar max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-0">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-4 group">
            <img
              src={logo}
              alt="Essence Treks Logo"
              className="w-14 h-14 rounded-full border-2 border-green-500 group-hover:border-green-400 transition-colors duration-300"
            />
            <span className="font-bold text-xl md:text-3xl lg:text-2xl xl:text-3xl text-white group-hover:text-green-400 transition-colors duration-300">
              Essence Treks
            </span>
          </NavLink>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="text-gray-200 hover:text-green-400 focus:outline-none p-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/trekking" className={navLinkClasses}>
              Trekkings
            </NavLink>
            <NavLink to="/offering" className={navLinkClasses}>
              Offerings
            </NavLink>
            <NavLink to="/gallery" className={navLinkClasses}>
              Gallery
            </NavLink>
            <NavLink to="/blogs" className={navLinkClasses}>
              Blogs
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div 
          ref={menuRef}
          className={`fixed top-[72px] right-0 h-screen w-64 bg-gray-900 transform transition-all duration-500 ease-in-out lg:hidden ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="flex flex-col gap-3 p-6">
            <NavLink to="/" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/trekking" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              Trekkings
            </NavLink>
            <NavLink to="/offering" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              Offerings
            </NavLink>
            <NavLink to="/gallery" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/blogs" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              Blogs
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses} onClick={() => setIsOpen(false)}>
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
