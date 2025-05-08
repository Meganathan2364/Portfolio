import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';  // Add classNames for dynamic class handling

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on navigation
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Dynamically apply active class
  const isActive = (path) => classNames({
    'text-blue-400 font-semibold': pathname === path,
    'text-white': pathname !== path,
  });

  return (
    <nav className="bg-gray-900 p-4 text-white fixed w-full z-10 top-0 shadow-lg" aria-label="Main navigation">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand Logo */}
        <div className="text-3xl sm:text-2xl font-extrabold">
          <Link to="/" className="hover:text-blue-400 transition-colors">Portfolio</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 text-sm items-center">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/projects" className={isActive('/projects')}>Projects</Link>
          <Link to="/experience" className={isActive('/experience')}>Skills & Experience</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-xl focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-900 text-white text-center transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button
          onClick={closeMobileMenu}
          className="text-xl absolute top-4 right-4 focus:outline-none"
          aria-label="Close mobile menu"
        >
          ✕
        </button>
        <ul className="font-medium text-2xl space-y-6 mt-20">
          <li><Link to="/" onClick={closeMobileMenu} className={isActive('/')}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu} className={isActive('/about')}>About</Link></li>
          <li><Link to="/projects" onClick={closeMobileMenu} className={isActive('/projects')}>Projects</Link></li>
          <li><Link to="/skills" onClick={closeMobileMenu} className={isActive('/skills')}>Skills</Link></li>
          <li><Link to="/experience" onClick={closeMobileMenu} className={isActive('/experience')}>Experience</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu} className={isActive('/contact')}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
