import React from 'react';
import { ShieldCheck, SlidersHorizontal, Network, FileText, Database, FileCheck, Users, Server } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-20">
        <ServiceHero />
        <ServiceCategories />
        <DetailedServices />
        <ServiceCTA />
      </main>
    </div>
  );
};

const ServiceHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 mb-8">
            Comprehensive document verification and security solutions for businesses of all sizes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCategories = () => {
  const categories = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "Security & Compliance",
      description: "We protect sensitive data and help you stay compliant with global insurance standards."
    },
    {
      icon: <SlidersHorizontal className="h-8 w-8 text-white" />,
      title: "Customizable Platform",
      description: "Easily adapt the platform to your needs with flexible workflows and branded modules."
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Paperless Experience",
      description: "Simplify your operations with fast, secure digital processes—no paperwork needed."
    },
    {
      icon: <Network className="h-8 w-8 text-white" />,
      title: "Seamless Integration",
      description: "Connect your systems using our modern APIs for real-time, frictionless syncing."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
            Our Core <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light opacity-90">
            Built for modern insurers, our platform provides robust, flexible, and secure foundations for your digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-100"
            >
              <div className="flex justify-center mb-5">
                <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{category.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const DetailedServices = () => {
  const services = [
    {
      icon: <FileCheck className="h-6 w-6 text-white" />,
      title: "Document Verification & Authentication",
      description: "AI-powered checks to detect forgeries, mismatches, and alterations across all insurance documents.",
      features: [
        "ID & Passport Validation",
        "Certificate & License Checks",
        "Legal Document Scanning",
        "Financial Document Analysis",
        "Real-time Verification Reports"
      ],
      bgColor: "from-blue-600 to-blue-800"
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Identity Verification Solutions",
      description: "Multi-layered identity protection that prevents fraud and streamlines KYC compliance.",
      features: [
        "Biometric Matching",
        "Two-Factor Authentication",
        "eSignature Detection",
        "Identity Linking",
        "KYC & Onboarding Tools"
      ],
      bgColor: "from-blue-500 to-blue-700"
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Data Security & Compliance",
      description: "Stay ahead of regulatory requirements with secure infrastructure and encrypted storage.",
      features: [
        "End-to-End Encryption",
        "GDPR/CCPA-Ready",
        "Audit Logs & Access Control",
        "Zero-Knowledge Storage",
        "Compliance Monitoring"
      ],
      bgColor: "from-blue-400 to-blue-600"
    },
    {
      icon: <Server className="h-6 w-6 text-white" />,
      title: "Enterprise Integration & API Services",
      description: "Easily plug into your ecosystem using our developer-friendly APIs and white-label modules.",
      features: [
        "RESTful API Access",
        "SDK & Dev Tools",
        "Custom Integrations",
        "White-Label Dashboards",
        "Dedicated SLAs"
      ],
      bgColor: "from-blue-300 to-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            End-to-End Coverage
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
            Detailed Security Services <br className="hidden md:block" />
            for Growing Insurers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light opacity-90">
            Scalable. Secure. Seamlessly integrated into your existing digital insurance environment.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row reveal"
            >
              {/* Left side */}
              <div className={`bg-gradient-to-br ${service.bgColor} text-white p-8 md:w-1/3 flex flex-col justify-center`}>
                <div className="bg-white/10 p-3 rounded-full w-fit mb-4 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-blue-100 text-sm font-light opacity-90">{service.description}</p>
              </div>

              {/* Right side */}
              <div className="p-8 md:w-2/3 bg-white">
                <h4 className="text-base font-semibold mb-4 text-gray-800 uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const ServiceCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with our team to discuss how Click2Secure can help with your specific security needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
              Schedule a Demo
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;