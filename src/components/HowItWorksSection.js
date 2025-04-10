'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';
import useRevealEffect from '@/hooks/useRevealEffect';

const solutions = [
  {
    icon: '/CarIns.png',
    title: 'Motor Insurance Solutions',
    description: 'Expand your reach by offering customers a seamless online experience for motor insurance policies...',
    path: '/motor-insurance',
  },
  {
    icon: '/HealthIns.png',
    title: 'Health Insurance Solutions',
    description: 'Digitally transform your health insurance offerings with customizable coverage options...',
    path: '/health-insurance',
  },
  {
    icon: '/HomeIns.png',
    title: 'Home Insurance Solutions',
    description: 'Stay competitive by enabling customers to purchase home insurance policies online...',
    path: '/home-insurance',
  },
  {
    icon: '/CyberIns.png',
    title: 'Cyber Insurance Solutions',
    description: 'Meet the growing demand for cyber insurance with our state-of-the-art platform...',
    path: '/cyber-insurance',
  },
  {
    icon: '/PetIns.png',
    title: 'Pet Insurance Solutions',
    description: 'Protect beloved family pets with comprehensive insurance coverage for veterinary care...',
    path: '/pet-insurance',
  },
  {
    icon: '/TravelIns.png',
    title: 'Travel Insurance Solutions',
    description: 'Offer worry-free travel experiences with our customizable travel insurance packages...',
    path: '/travel-insurance',
  },
  {
    icon: '/EngIns.png',
    title: 'Engineering Insurance Solutions',
    description: 'Provide specialized coverage for engineering projects, machinery, and equipment...',
    path: '/engineering-insurance',
  },
  {
    icon: '/BusinessIns.png',
    title: 'Business Insurance Solutions',
    description: 'Safeguard businesses with tailored insurance packages covering property, liability, and more...',
    path: '/business-insurance',
  },
];

export default function HowItWorksSection() {
  useRevealEffect(); // Activate scroll animations

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            INSURTECH REIMAGINED
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Innovative Insurance Solutions for the Digital Age
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Embrace the power of technology with our end-to-end digital insurance products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="reveal flex flex-col justify-between h-[430px] text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="p-4 rounded-full border-2 border-blue-500 mx-auto mb-4 hover:scale-105 transition-transform duration-300 w-fit">
                  <div className="relative h-8 w-8">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      fill
                      sizes="32px"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 min-h-[60px]">{solution.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{solution.description}</p>
              </div>

              <Link
                href={solution.path}
                className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center transition-colors"
              >
                Explore <HiArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
