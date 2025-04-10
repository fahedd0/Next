import React from 'react';
import { Link } from 'react-router-dom';
import CarIcon from '../assets/CarIns.png';
import HomeIcon from '../assets/HomeIns.png';
import ShieldIcon from '../assets/CyberIns.png';
import BriefcaseIcon from '../assets/BusinessIns.png';
import PlaneIcon from '../assets/TravelIns.png';
import CogIcon from '../assets/EngIns.png';
import DogIcon from '../assets/PetIns.png';
import HealthIcon from '../assets/HealthIns.png';
import { HiArrowRight } from 'react-icons/hi';

const HowItWorksSection = () => {
  const solutions = [
    {
      icon: CarIcon,
      title: "Motor Insurance Solutions",
      description: "Expand your reach by offering customers a seamless online experience for motor insurance policies. Our platform enables you to provide TPL and full risk coverage with attractive discounts and rewards while maintaining the highest security standards.",
      path: "/motor-insurance"
    },
    {
      icon: HealthIcon,
      title: "Health Insurance Solutions",
      description: "Digitally transform your health insurance offerings with customizable coverage options for Dubai & Northern Emirates visa residents. Leverage our platform to provide user-friendly and secure services to a wider audience.",
      path: "/health-insurance"
    },
    {
      icon: HomeIcon,
      title: "Home Insurance Solutions",
      description: "Stay competitive by enabling customers to purchase home insurance policies online. Our advanced technology helps you streamline the policy purchasing process while offering attractive discounts and rewards in a secure environment.",
      path: "/home-insurance"
    },
    {
      icon: ShieldIcon,
      title: "Cyber Insurance Solutions",
      description: "Meet the growing demand for cyber insurance with our state-of-the-art platform. Offer comprehensive coverage, competitive pricing, and superior security to stand out in a rapidly evolving market.",
      path: "/cyber-insurance"
    },
    {
      icon: DogIcon,
      title: "Pet Insurance Solutions",
      description: "Protect beloved family pets with comprehensive insurance coverage for veterinary care, accidents, and illnesses. Our digital platform simplifies policy management while providing peace of mind for pet owners.",
      path: "/pet-insurance"
    },
    {
      icon: PlaneIcon,
      title: "Travel Insurance Solutions",
      description: "Offer worry-free travel experiences with our customizable travel insurance packages. Cover medical emergencies, trip cancellations, lost luggage, and more through our secure and user-friendly digital platform.",
      path: "/travel-insurance"
    },
    {
      icon: CogIcon,
      title: "Engineering Insurance Solutions",
      description: "Provide specialized coverage for engineering projects, machinery, and equipment. Our platform enables comprehensive risk assessment and policy management for contractors, developers, and engineering firms.",
      path: "/engineering-insurance"
    },
    {
      icon: BriefcaseIcon,
      title: "Business Insurance Solutions",
      description: "Safeguard businesses with tailored insurance packages covering property, liability, professional indemnity, and business interruption. Our digital solutions streamline commercial coverage with enhanced security and efficiency.",
      path: "/business-insurance"
    }
  ];

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
            <div key={index} className="flex flex-col justify-between h-[430px] text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 reveal">
              <div>
                <div className="p-4 rounded-full border-2 border-blue-500 mx-auto mb-4 hover:scale-105 transition-transform duration-300 w-fit">
                  <img src={solution.icon} alt={solution.title} className="h-8 w-8 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 min-h-[60px]">{solution.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">

                  {solution.description}
                </p>
              </div>
              <Link
                to={solution.path}
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
};

export default HowItWorksSection;
