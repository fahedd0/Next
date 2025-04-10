'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FileText, ShieldCheck, SlidersHorizontal, Network } from 'lucide-react';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // placeholder for email storage
    alert('Thank you for your interest! We will contact you shortly.');
    setEmail('');
  };

  const featureCards = [
    {
      icon: <FileText className="h-5 w-5 text-blue-300" />,
      title: "Paperless Experience",
      description: "Reduce clutter and simplify document management." 
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-blue-300" />,
      title: "Security & Compliance",
      description: "Ensure data protection and regulatory compliance." 
    },
    {
      icon: <Network className="h-5 w-5 text-blue-300" />,
      title: "Seamless Integration",
      description: "Connect effortlessly with existing systems." 
    },
    {
      icon: <SlidersHorizontal className="h-5 w-5 text-blue-300" />,
      title: "Customizable Platform",
      description: "Adapt our platform to your unique needs and offer tailored insurance solutions." 
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-40 pb-24 relative z-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="-mt-20">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-600 bg-opacity-40 text-blue-100 text-sm font-medium mb-4">
                Insurance Technology Solutions
              </span>
              <h1 className="text-3xl md:text-4xl font-syne uppercase tracking-tight font-extrabold mb-6 leading-snug text-white">
                Revolutionizing the Insurance Industry with
                <span className="block font-syne text-blue-100 text-2xl md:text-3xl tracking-wider animate-pulse">
                  Cutting-Edge Solutions
                </span>
              </h1>

              <p className="text-base md:text-lg text-blue-100 max-w-lg leading-relaxed tracking-normal font-inter font-light opacity-90 mb-8">
                The Middle East trusted Insurtech partner. We empower insurance providers with seamless digital solutions—customized for efficiency, security, and scalable growth.
              </p>

              {/* Email subscription form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-xl mb-8 gap-3">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your work email"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Request a demo
                </button>
              </form>
            </div>
          </div>
          
          {/* Right side with feature cards */}
          <div className="w-full lg:w-1/2 relative -top-8">
            <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 blur-xl"></div>
              <div className="bg-white bg-opacity-10 p-8 backdrop-blur-xl border border-white border-opacity-20 rounded-xl shadow-2xl relative z-10">
                <div className="flex items-center mb-8">
                  <div className="bg-white rounded-xl p-2 mr-4 shadow-sm">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/squares.png"
                      alt="Squares Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-inter">Trusted by Industry Leaders</h3>
                    <p className="text-blue-200">Securing documents across insurance, banking, and healthcare</p>
                  </div>
                </div>
                
                {/* Feature cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featureCards.map((card, index) => (
                    <FeatureCard 
                      key={index}
                      icon={card.icon}
                      title={card.title}
                      description={card.description} 
                    />
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-blue-800 border-opacity-30">
                  <p className="text-center text-blue-200 text-sm">
                    processed 500,000+ costumers across Mena region
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     {/* Wave separator */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 320" className="w-full h-auto translate-y-1">
        <path
          fill="#f9fafb"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224V320H0Z"
        />
      </svg>
    </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-blue-800 bg-opacity-50 p-5 rounded-xl flex flex-col hover:bg-opacity-70 transition-all duration-300 transform hover:-translate-y-1 shadow-md">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-lg font-bold ml-2">{title}</h3>
    </div>
    <p className="text-blue-100 text-sm">{description}</p>
  </div>
);

export default HeroSection;