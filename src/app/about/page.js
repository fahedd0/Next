/* eslint-disable react/jsx-key */
// src/app/about/page.js
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Globe, TrendingUp, Shield } from 'lucide-react';

export default function AboutPage() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-20">
        <AboutHero />
        <OurStory />
        <OurMission />
        <OurValues />
        {/* <TeamSection /> */}
        <AboutCTA />
      </main>
    </div>
  );
}

// COMPONENTS BELOW (same as before)
function AboutHero() {
  return (
    <section className="bg-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl reveal">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Click2Secure</h1>
        <p className="text-xl text-blue-100 mb-4">
          Your trusted partner in document verification and security technology
        </p>
        <p className="text-blue-200">
          Founded in 2018, Click2Secure has been at the forefront of developing innovative security solutions 
          to protect businesses and their customers in the digital age.
        </p>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 reveal">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            Click2Secure was founded with a vision to revolutionize how businesses verify documents and authenticate identities in the digital age. 
            What started as a small team of security experts and AI enthusiasts has grown into a leading provider of document verification solutions.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            As cyber threats evolved, so did our solutions...
          </p>
          <p className="text-lg text-gray-600">
            Today, Click2Secure serves clients across banking, insurance, healthcare, and government sectors...
          </p>
        </div>
        <div className="w-full lg:w-1/2 pl-0 lg:pl-12 reveal">
          <div className="grid grid-cols-2 gap-4">
            {[
              ['500,000+', 'Clients across the MENA region'],
              ['20M+', 'Documents Verified'],
              ['99.8%', 'Verification Accuracy'],
              ['12', 'Countries Served'],
            ].map(([number, text], index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
                <div className="text-gray-600">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OurMission() {
  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center max-w-3xl reveal">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl mb-8">
          To provide state-of-the-art document verification and security solutions...
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {[
            [<Globe className="h-12 w-12 text-blue-300 mx-auto mb-4" />, 'Global Protection', 'Protecting businesses across borders...'],
            [<TrendingUp className="h-12 w-12 text-blue-300 mx-auto mb-4" />, 'Continuous Innovation', 'Constantly evolving our tech...'],
            [<Shield className="h-12 w-12 text-blue-300 mx-auto mb-4" />, 'Uncompromising Security', 'Maintaining high standards...'],
          ].map(([icon, title, desc], index) => (
            <div key={index} className="flex-1 bg-blue-800 bg-opacity-50 p-6 rounded-lg reveal">
              {icon}
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-blue-100">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurValues() {
  const values = [
    { title: "Integrity", description: "We operate with honesty and transparency..." },
    { title: "Innovation", description: "We embrace new ideas and technologies..." },
    { title: "Excellence", description: "We are committed to delivering the highest quality..." },
    { title: "Security", description: "We prioritize security in every aspect..." },
    { title: "Collaboration", description: "We work closely with our clients..." },
    { title: "Responsibility", description: "We take responsibility for the security and privacy..." }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">These principles guide everything we do at Click2Secure</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm reveal">
              <h3 className="text-xl font-bold mb-4 text-blue-600">{val.title}</h3>
              <p className="text-gray-600">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center max-w-4xl reveal">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Click2Secure Community</h2>
        <p className="text-xl text-blue-100 mb-8">
          Discover how our document verification and security solutions can transform your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-blue-800 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
            Request a Demo
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
