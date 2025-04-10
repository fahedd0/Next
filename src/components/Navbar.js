import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Check if current route is home
  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white shadow-lg py-2' 
        : isHome 
          ? 'bg-transparent backdrop-blur-sm py-6 border-b border-white border-opacity-20' 
          : 'bg-white shadow-lg py-2'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with white background box */}
          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <div className="bg-white px-3 py-2 rounded-lg shadow-md">
              <img src={logo} alt="Click2Secure Logo" className="h-10" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              isActive={location.pathname === '/'} 
              isHome={isHome && !scrolled}
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              isActive={location.pathname === '/services'} 
              isHome={isHome && !scrolled}
            >
              Services
            </NavLink>
            <NavLink 
              to="/about" 
              isActive={location.pathname === '/about'} 
              isHome={isHome && !scrolled}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              isActive={location.pathname === '/contact'} 
              isHome={isHome && !scrolled}
            >
              Contact
            </NavLink>
            
            {/* Get Started button */}
            <Link to="/contact" className="ml-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-md font-medium transition-all duration-300 shadow-md hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-1">
              Request a demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`focus:outline-none p-2 rounded-md transition-colors duration-200 ${
                isHome && !scrolled 
                  ? 'bg-white bg-opacity-90 text-blue-800 hover:bg-opacity-100' 
                  : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
              }`}
            >
              {isOpen 
                ? <X className="h-6 w-6" /> 
                : <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-xl mt-4 py-6 absolute left-4 right-4 border border-gray-100 transition-all duration-300 transform origin-top">
            <div className="flex flex-col space-y-2 px-6">
              <MobileNavLink to="/" isActive={location.pathname === '/'}>Home</MobileNavLink>
              <MobileNavLink to="/services" isActive={location.pathname === '/services'}>Services</MobileNavLink>
              <MobileNavLink to="/about" isActive={location.pathname === '/about'}>About</MobileNavLink>
              <MobileNavLink to="/contact" isActive={location.pathname === '/contact'}>Contact</MobileNavLink>
              
              <div className="pt-4 mt-2 border-t border-gray-100">
                <Link 
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-md font-medium transition-colors text-center hover:from-blue-700 hover:to-blue-600"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isActive, isHome }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick}
      className={`relative px-4 py-2 rounded-md font-medium group ${
        isActive 
          ? isHome ? 'text-white' : 'text-blue-700' 
          : isHome ? 'text-white text-opacity-90 hover:text-opacity-100' : 'text-gray-800 hover:text-blue-700'
      }`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isHome ? 'bg-white' : 'bg-blue-600'} transform origin-left transition-transform duration-300 ${
        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}></span>
    </Link>
  );
};


const MobileNavLink = ({ to, children, isActive }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick}
      className={`block py-3 px-2 rounded-md ${
        isActive 
          ? 'text-blue-700 bg-blue-50 font-medium' 
          : 'text-gray-800 hover:bg-gray-50 hover:text-blue-700'
      }`}
    >
      {children}
    </Link>
  );
};


export default Navbar;