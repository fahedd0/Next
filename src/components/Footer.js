import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  const location = useLocation();
  
  // Don't show footer on dashboard
  if (location.pathname === '/dashboard') {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <Link to="/" className="block mb-4">
              <div className="bg-white px-3 py-2 rounded-lg inline-block">
                <img src={logo} alt="Click2Secure Logo" className="h-10" />
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted partner for document verification and security technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about#leadership-team" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><button type="button" className="text-left text-gray-400 hover:text-white transition-colors">Careers</button></li>
              <li><button type="button" className="text-left text-gray-400 hover:text-white transition-colors">News</button></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/motor-insurance" className="text-gray-400 hover:text-white transition-colors">Motor Insurance Solutions</Link></li>
              <li><Link to="/health-insurance" className="text-gray-400 hover:text-white transition-colors">Health Insurance Solutions</Link></li>
              <li><Link to="/home-insurance" className="text-gray-400 hover:text-white transition-colors">Home Insurance Solutions</Link></li>
              <li><Link to="/cyber-insurance" className="text-gray-400 hover:text-white transition-colors">Cyber Insurance Solutions</Link></li>
              <li><Link to="/pet-insurance" className="text-gray-400 hover:text-white transition-colors">Pet Insurance Solutions</Link></li>
              <li><Link to="/travel-insurance" className="text-gray-400 hover:text-white transition-colors">Travel Insurance Solutions</Link></li>
              <li><Link to="/engineering-insurance" className="text-gray-400 hover:text-white transition-colors">Engineering Insurance Solutions</Link></li>
              <li><Link to="/business-insurance" className="text-gray-400 hover:text-white transition-colors">Business Insurance Solutions</Link></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/5 px-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Dubai Silicon Oasis</li>
              <li className="text-gray-400">Dubai, United Arab Emirates</li>
              <li><a href="mailto:info@click2secure.me" className="text-gray-400 hover:text-white transition-colors">info@click2secure.me</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Click2Secure. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;