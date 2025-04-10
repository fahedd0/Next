'use client';

import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Documents?</h2>
            <p className="text-lg text-blue-100 max-w-2xl">
              Join hundreds of businesses that trust Click2Secure for their document verification needs. Get started today with a free demo.
            </p>
          </div>
          <div className="w-full lg:w-1/3 text-center lg:text-right">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 mr-4">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1 mt-4 lg:mt-0">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;