import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Globe, TrendingUp, Shield } from 'lucide-react';
//import { Users } from 'lucide-react';


const About = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
};

const AboutHero = () => {
  return (
    <section className="bg-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Click2Secure</h1>
          <p className="text-xl text-blue-100 mb-4">
            Your trusted partner in document verification and security technology
          </p>
          <p className="text-blue-200">
            Founded in 2018, Click2Secure has been at the forefront of developing innovative security solutions 
            to protect businesses and their customers in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 reveal">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Click2Secure was founded with a vision to revolutionize how businesses verify documents and authenticate identities in the digital age. 
              What started as a small team of security experts and AI enthusiasts has grown into a leading provider of document verification solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              As cyber threats evolved, so did our solutions. We have continuously innovated to stay ahead of fraudsters 
              and provide our clients with cutting-edge security tools that are both powerful and user-friendly.
            </p>
            <p className="text-lg text-gray-600">
              Today, Click2Secure serves clients across banking, insurance, healthcare, and government sectors, 
              helping them secure their operations against document fraud and identity theft.
            </p>
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-12 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">500,000+</div>
                <div className="text-gray-600">Clients across the Mena region</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">20M+</div>
                <div className="text-gray-600">Documents Verified</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
                <div className="text-gray-600">Verification Accuracy</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurMission = () => {
  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl mb-8">
            To provide state-of-the-art document verification and security solutions that enable businesses 
            to operate with confidence in a digital world fraught with risks.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1 bg-blue-800 bg-opacity-50 p-6 rounded-lg reveal" style={{ transitionDelay: '100ms' }}>
              <Globe className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Protection</h3>
              <p className="text-blue-100">
                Protecting businesses across borders with localized security solutions.
              </p>
            </div>
            <div className="flex-1 bg-blue-800 bg-opacity-50 p-6 rounded-lg reveal" style={{ transitionDelay: '200ms' }}>
              <TrendingUp className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Continuous Innovation</h3>
              <p className="text-blue-100">
                Constantly evolving our technology to stay ahead of emerging threats.
              </p>
            </div>
            <div className="flex-1 bg-blue-800 bg-opacity-50 p-6 rounded-lg reveal" style={{ transitionDelay: '300ms' }}>
              <Shield className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Uncompromising Security</h3>
              <p className="text-blue-100">
                Maintaining the highest standards of data protection and privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurValues = () => {
  const values = [
    {
      title: "Integrity",
      description: "We operate with honesty and transparency in all that we do, building trust with our clients and partners."
    },
    {
      title: "Innovation",
      description: "We embrace new ideas and technologies to continuously improve our solutions and stay ahead of evolving threats."
    },
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality solutions and services that exceed our clients' expectations."
    },
    {
      title: "Security",
      description: "We prioritize security in every aspect of our operations, from product development to data handling."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique challenges and develop tailored solutions."
    },
    {
      title: "Responsibility",
      description: "We take responsibility for the security and privacy of our clients' data and the impact of our technology."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at Click2Secure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
/*
const TeamSection = () => {
  const team = [
    {
      name: "Test",
      role: "Chief Executive Officer",
      bio: "Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview"
    },
    {
      name: "Test",
      role: "Chief Technology Officer",
      bio: "Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview"
    },
    {
      name: "Test",
      role: "Chief Security Officer",
      bio: "Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview"
    },
    {
      name: "Test",
      role: "Head of Product",
      bio: "Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview, Self Overview"
    }
  ];

  return (
    <section id="leadership-team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experts behind Click2Secure's innovative security solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-blue-600 h-32 flex items-center justify-center">
                <Users className="h-16 w-16 text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <p className="text-gray-600 mb-6">
            Our team of 50+ security experts, developers, and customer success professionals work 
            tirelessly to protect our clients' businesses.
          </p>
          <button
            type="button"
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            View all team members
          </button>
        </div>
      </div>
    </section>
  );
};
*/


const AboutCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center reveal">
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
      </div>
    </section>
  );
};

export default About;