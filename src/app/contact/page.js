import React, { useState } from 'react';
import { Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-20">
        <ContactHero />
        <ContactForm />
        <FAQ />
      </main>
    </div>
  );
};

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Have questions or want to learn more about Click2Secure? We are here to help.
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you send the data to your backend
    alert('Thank you for your message. We will get back to you shortly!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto reveal">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-2/5 bg-gradient-to-br from-blue-800 to-blue-600 p-10 text-white">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-8 text-blue-100">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-300 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-blue-100">info@click2secure.me</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-300 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-blue-100">
                        Dubai Silicon Oasis<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-300 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Hours</h3>
                      <p className="text-blue-100">
                        Monday - Friday: 9am - 5pm<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-3/5 p-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    I agree to the <button type="button" className="text-blue-600 hover:underline">Privacy Policy</button>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors group"
                  >
                    <FaPaperPlane className="w-5 h-5 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can I get started with Click2Secure?",
      answer: "You can get started with Click2Secure immediately after signing up. Our streamlined onboarding process allows you to integrate our API within days or use our web portal right away. For enterprise solutions, our team will work with you to create a custom implementation plan."
    },
    {
      question: "What types of documents can Click2Secure verify?",
      answer: "Click2Secure can verify a wide range of documents including IDs, passports, driver's licenses, utility bills, bank statements, medical records, insurance policies, and various legal documents. Our AI-powered system is trained on documents from over 190 countries."
    },
    {
      question: "Is Click2Secure compliant with data protection regulations?",
      answer: "Yes, Click2Secure is fully compliant with GDPR, CCPA, and other regional data protection regulations. We implement strict data handling protocols, end-to-end encryption, and secure data storage practices to ensure your information remains protected."
    },
    {
      question: "Do you offer a trial or demo of your services?",
      answer: "Yes, we offer a free demonstration of our services tailored to your specific needs. For qualified businesses, we also provide a limited free trial to test our API integration capabilities. Contact our sales team to arrange a demo or discuss trial options."
    },
    {
      question: "What support options are available?",
      answer: "Click2Secure offers 24/7 technical support for all clients. Enterprise clients receive dedicated account managers and priority support. We provide comprehensive documentation, integration guides, and regular training sessions to ensure you get the most out of our solutions."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button 
                  className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-blue-600 transform ${activeIndex === index ? 'rotate-180' : ''} transition-transform`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeIndex === index && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center reveal">
            <p className="text-gray-600 mb-4">
              Do not see your question here?
            </p>
            <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full">
              <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium">Contact our support team for assistance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;