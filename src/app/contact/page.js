'use client';

import { useState } from 'react';
import { Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-20">
        <ContactHero />
        <ContactForm />
        <FAQ />
      </main>
    </div>
  );
}

const ContactHero = () => (
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly!');
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
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-wrap">
            {/* Info Block */}
            <div className="w-full lg:w-2/5 bg-gradient-to-br from-blue-800 to-blue-600 p-10 text-white">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 text-blue-100">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <InfoItem icon={<Mail />} title="Email" content="info@click2secure.me" />
                <InfoItem icon={<MapPin />} title="Address" content="Dubai Silicon Oasis\nDubai, UAE" />
                <InfoItem icon={<Clock />} title="Hours" content="Mon–Fri: 9am–5pm\nSat–Sun: Closed" />
              </div>
            </div>

            {/* Form Block */}
            <div className="w-full lg:w-3/5 p-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <TextInput label="Full Name *" name="name" value={formData.name} onChange={handleChange} required />
                  <TextInput type="email" label="Email Address *" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <TextInput label="Company" name="company" value={formData.company} onChange={handleChange} />
                  <TextInput type="tel" label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-6">
                  <TextInput label="Subject *" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
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
    </section>
  );
};

const TextInput = ({ label, name, value, onChange, type = 'text', required = false }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const InfoItem = ({ icon, title, content }) => (
  <div className="flex items-start">
    {icon && <div className="h-6 w-6 text-blue-300 mr-3 mt-1">{icon}</div>}
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-blue-100 whitespace-pre-line">{content}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can I get started with Click2Secure?",
      answer: "You can get started with Click2Secure immediately after signing up..."
    },
    {
      question: "What types of documents can Click2Secure verify?",
      answer: "Click2Secure can verify a wide range of documents including IDs, passports..."
    },
    {
      question: "Is Click2Secure compliant with data protection regulations?",
      answer: "Yes, Click2Secure is fully compliant with GDPR, CCPA, and more..."
    },
    {
      question: "Do you offer a trial or demo of your services?",
      answer: "Yes, we offer a free demonstration tailored to your specific needs..."
    },
    {
      question: "What support options are available?",
      answer: "Click2Secure offers 24/7 technical support with priority services for enterprise clients..."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Find quick answers to common questions about our services</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden reveal">
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
          <p className="text-gray-600 mb-4">Do not see your question here?</p>
          <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full">
            <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">Contact our support team for assistance</span>
          </div>
        </div>
      </div>
    </section>
  );
};
