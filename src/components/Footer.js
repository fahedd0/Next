/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <Link href="/" className="block mb-4">
              <div className="bg-white px-3 py-2 rounded-lg inline-block">
                <img src="/logo.png" alt="Click2Secure Logo" className="h-10" />
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted partner for document verification and security technology solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com"><FaFacebook size={24} /></SocialLink>
              <SocialLink href="https://twitter.com"><FaTwitter size={24} /></SocialLink>
              <SocialLink href="https://instagram.com"><FaInstagram size={24} /></SocialLink>
              <SocialLink href="https://linkedin.com"><FaLinkedin size={24} /></SocialLink>
            </div>
          </div>

          <FooterColumn title="Company">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/about#leadership-team">Our Team</FooterLink>
            <FooterText>Careers</FooterText>
            <FooterText>News</FooterText>
          </FooterColumn>

          <FooterColumn title="Services">
            <FooterLink href="/motor-insurance">Motor Insurance Solutions</FooterLink>
            <FooterLink href="/health-insurance">Health Insurance Solutions</FooterLink>
            <FooterLink href="/home-insurance">Home Insurance Solutions</FooterLink>
            <FooterLink href="/cyber-insurance">Cyber Insurance Solutions</FooterLink>
            <FooterLink href="/pet-insurance">Pet Insurance Solutions</FooterLink>
            <FooterLink href="/travel-insurance">Travel Insurance Solutions</FooterLink>
            <FooterLink href="/engineering-insurance">Engineering Insurance Solutions</FooterLink>
            <FooterLink href="/business-insurance">Business Insurance Solutions</FooterLink>
          </FooterColumn>

          <FooterColumn title="Contact">
            <FooterText>Dubai Silicon Oasis</FooterText>
            <FooterText>Dubai, United Arab Emirates</FooterText>
            <a href="mailto:info@click2secure.me" className="text-gray-400 hover:text-white transition-colors">info@click2secure.me</a>
          </FooterColumn>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Click2Secure. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink href="/cookie-policy">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
      <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
}

function FooterText({ children }) {
  return <li className="text-gray-400">{children}</li>;
}
