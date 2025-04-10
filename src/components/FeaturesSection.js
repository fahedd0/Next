import React, { useEffect, useRef } from 'react';
import { ShieldCheck, MessageCircle, SlidersHorizontal, FileText, Network, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
  const featuresRef = useRef(null);
  
  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      featureElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Security & Compliance",
      description: "Ensure data protection and regulatory compliance with our robust security measures.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <SlidersHorizontal className="h-10 w-10 text-blue-600" />,
      title: "Customizable Platform",
      description: "Adapt our platform to your unique needs and offer tailored insurance solutions to your customers.",
      color: "from-blue-500 to-purple-700"
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Paperless Experience",
      description: "Reduce clutter and simplify document management with our entirely paperless approach.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Network className="h-10 w-10 text-blue-600" />,
      title: "Seamless Integration",
      description: "Connect effortlessly with existing systems using our Connector Kit and ACORD-based messaging services.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-blue-600" />,
      title: "Ongoing Support",
      description: "Benefit from our friendly and responsive customer service team, available seven days a week.",
      color: "from-blue-500 to-blue-700"
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-blue-50" ref={featuresRef}>
      {/* background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
            Powerful Security <span className="text-blue-700">Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What makes Click2Secure the leading choice for document verification and security
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
  {/* First Row (2 cards) */}
  {features.slice(0, 2).map((feature, index) => (
    <div
      key={index}
      className="feature-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 w-full sm:w-[45%] md:w-[48%]"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start">
        <div className={`relative mr-6`}>
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} opacity-20 blur-md`}></div>
          <div className="relative bg-white p-4 rounded-xl shadow-md">
            {feature.icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 mb-4">{feature.description}</p>
          <button className="group inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-all duration-300">
            Learn more 
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  ))}

  {/* Second Row (2 cards) */}
  {features.slice(2, 4).map((feature, index) => (
    <div
      key={index + 2}
      className="feature-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 w-full sm:w-[45%] md:w-[48%]"
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
    >
      <div className="flex items-start">
        <div className={`relative mr-6`}>
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} opacity-20 blur-md`}></div>
          <div className="relative bg-white p-4 rounded-xl shadow-md">
            {feature.icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 mb-4">{feature.description}</p>
          <button className="group inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-all duration-300">
            Learn more 
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  ))}

  {/* Third Row (1 centered card) */}
  {features[4] && (
    <div
      key={4}
      className="feature-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 card-hover border border-gray-100 w-full sm:w-[60%] md:w-[48%]"
      style={{ transitionDelay: `200ms` }}
    >
      <div className="flex items-start">
        <div className={`relative mr-6`}>
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${features[4].color} opacity-20 blur-md`}></div>
          <div className="relative bg-white p-4 rounded-xl shadow-md">
            {features[4].icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-gray-800">{features[4].title}</h3>
          <p className="text-gray-600 mb-4">{features[4].description}</p>
          <button className="group inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-all duration-300">
            Learn more 
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )}
</div>


        <div className="mt-16 flex justify-center">
          <div className="bg-white p-8 rounded-xl max-w-4xl shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to experience secure document verification?</h3>
                <p className="text-gray-600">
                  Our platform combines cutting-edge security features with a simple, user-friendly interface.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <button className="btn-primary bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;