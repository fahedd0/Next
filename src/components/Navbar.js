/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white shadow-lg py-2' 
        : isHome 
          ? 'bg-transparent backdrop-blur-sm py-6 border-b border-white border-opacity-20' 
          : 'bg-white shadow-lg py-2'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <div className="bg-white px-3 py-2 rounded-lg shadow-md">
            <img src="/logo.png" alt="Click2Secure Logo" className="h-10" />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <NavLink href="/" currentPath={pathname} isHome={isHome}>Home</NavLink>
          <NavLink href="/services" currentPath={pathname} isHome={isHome}>Services</NavLink>
          <NavLink href="/about" currentPath={pathname} isHome={isHome}>About</NavLink>
          <NavLink href="/contact" currentPath={pathname} isHome={isHome}>Contact</NavLink>
          <Link href="/contact" className="ml-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-md font-medium transition-all duration-300 shadow-md hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-1">
            Request a demo
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`focus:outline-none p-2 rounded-md transition-colors duration-200 ${
              isHome && !scrolled 
                ? 'bg-white bg-opacity-90 text-blue-800 hover:bg-opacity-100' 
                : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white rounded-lg shadow-xl mt-4 py-6 absolute left-4 right-4 border border-gray-100 transition-all duration-300 transform origin-top">
          <div className="flex flex-col space-y-2 px-6">
            <MobileNavLink href="/" currentPath={pathname}>Home</MobileNavLink>
            <MobileNavLink href="/services" currentPath={pathname}>Services</MobileNavLink>
            <MobileNavLink href="/about" currentPath={pathname}>About</MobileNavLink>
            <MobileNavLink href="/contact" currentPath={pathname}>Contact</MobileNavLink>
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link href="/contact" className="block w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-md font-medium transition-colors text-center hover:from-blue-700 hover:to-blue-600">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, currentPath, isHome }) {
  const isActive = currentPath === href;

  return (
    <Link href={href} className={`relative px-4 py-2 rounded-md font-medium group ${
      isActive 
        ? isHome ? 'text-white' : 'text-blue-700' 
        : isHome ? 'text-white text-opacity-90 hover:text-opacity-100' : 'text-gray-800 hover:text-blue-700'
    }`}>
      {children}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isHome ? 'bg-white' : 'bg-blue-600'} transform origin-left transition-transform duration-300 ${
        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`} />
    </Link>
  );
}

function MobileNavLink({ href, children, currentPath }) {
  const isActive = currentPath === href;

  return (
    <Link href={href} className={`block py-3 px-2 rounded-md ${
      isActive 
        ? 'text-blue-700 bg-blue-50 font-medium' 
        : 'text-gray-800 hover:bg-gray-50 hover:text-blue-700'
    }`}>
      {children}
    </Link>
  );
}
