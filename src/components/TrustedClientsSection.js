import React from 'react';
import ABNIC from '../assets/ABNIC.png';
import ALLIANZ from '../assets/ALLIANZ.png';
import FIDELITY from '../assets/FIDELITY.png';
import GOVUAQ from '../assets/GOVUAQ.png';
import NEXTCARE from '../assets/NEXTCARE.png';
import RAKBANK from '../assets/RAKBANK.png';
import RAKIns from '../assets/RAKIns.png';
import UAQFTZ from '../assets/UAQFTZ.png';
import UAQU from '../assets/UAQU.png';


const TrustedClientsSection = () => {
  const clients = [
    {
      name: "Al Buhaira National Insurance Co.",
      logo: ABNIC
    },
    {
      name: "Allianz",
      logo: ALLIANZ
    },
    {
      name: "Fidelity United",
      logo: FIDELITY
    },
    {
      name: "Government of Umm Al Quwain",
      logo: GOVUAQ
    },
    {
      name: "NEXTCARE",
      logo: NEXTCARE
    },
    {
      name: "RAKBANK",
      logo: RAKBANK
    },
    {
      name: "RAK Insurance",
      logo: RAKIns
    },
    {
      name: "UAQ Free Zone",
      logo: UAQFTZ
    },
    {
      name: "Umm Al Quwain University",
      logo: UAQU
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            TRUSTED BY LEADING COMPANIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Esteemed Clients</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborating with top-tier enterprises for enhanced document security
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 reveal">
          <p className="text-gray-600 text-center">
            At Click2Secure, we are proud to partner with leading companies that
            recognize the potential of our platform to transform their businesses. Our clients trust us
            to provide exceptional technology solutions and the highest level of support, allowing
            them to remain competitive and meet their customers evolving needs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 mb-16 reveal">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* logos */}
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <div className="text-sm text-gray-400 mt-2">{client.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 reveal">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:-translate-y-1 shadow-md">
            View all clients
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedClientsSection;