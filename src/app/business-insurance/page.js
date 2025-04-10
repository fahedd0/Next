import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import BriefcaseIcon from '../assets/BusinessIns.png';
import { Building, ShieldCheck, Users, Truck, FileText, Clock } from 'lucide-react';

const BusinessInsurance = () => {
  const features = [
    {
      icon: <Building className="h-6 w-6 text-blue-500" />,
      title: "Property Insurance",
      description: "Protects your office, equipment, and inventory from fire, theft, and natural disasters."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-500" />,
      title: "Liability Coverage",
      description: "Covers legal claims for injury, damage, or professional errors during business operations."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Employee Protection",
      description: "Includes worker compensation, benefits, and injury claims support."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Business Interruption",
      description: "Covers income loss and expenses during forced operational downtime."
    },
    {
      icon: <Truck className="h-6 w-6 text-blue-500" />,
      title: "Fleet Insurance",
      description: "Insures company vehicles with flexible third-party and comprehensive plans."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: "Professional Indemnity",
      description: "Safeguards against negligence or mistakes in services or professional advice."
    }
  ];

  const benefits = [
    {
      title: "Industry-Specific Solutions",
      description: "Tailored insurance packages designed for your specific industry—from tech and retail to construction, hospitality, and professional services."
    },
    {
      title: "Simple Comparison Tools",
      description: "Easily compare key features, policy limits, premiums, and exclusions from multiple insurers to make the most informed decision for your business."
    },
    {
      title: "Scalable Coverage",
      description: "Flexible policies that can grow with your business, allowing you to adjust coverage as your operations expand or change."
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure your business meets all mandatory insurance requirements with proper documentation and verification for licensing and contracts."
    }
  ];

  const faqs = [
    {
      question: "What types of businesses can get coverage through your platform?",
      answer: "Our platform offers insurance solutions for a wide range of businesses including startups, SMEs, and established enterprises across various industries like retail, technology, hospitality, construction, professional services, manufacturing, and more."
    },
    {
      question: "How much business insurance coverage do I need?",
      answer: "Coverage needs depend on factors like your industry, business size, assets, revenue, number of employees, and risk exposure. Our platform helps you assess these factors and compare options that match your specific requirements and budget constraints."
    },
    {
      question: "Can I bundle different types of business insurance?",
      answer: "Yes, many insurers offer comprehensive packages like Business Owner's Policies (BOP) that combine property, liability, and business interruption coverage at a discounted rate. You can also customize additional coverages to create a solution tailored to your needs."
    },
    {
      question: "How quickly can I get proof of insurance for a contract or lease?",
      answer: "With our digital platform, you can receive proof of insurance (Certificate of Insurance) immediately after purchasing a policy. These documents can be downloaded, printed, or electronically shared with clients, landlords, or contractors as needed."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Business Insurance Solutions"
      description="Ameni helps modern businesses stay resilient with customizable insurance solutions designed to protect people, property, and operations. From small startups to large enterprises, our platform offers flexible policies covering everything from liability to employee protection. Get insured against unforeseen disruptions, legal claims, or asset loss all through a secure and intuitive digital experience. Simplify your risk management while staying compliant and confident, every step of the way."
      icon={BriefcaseIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default BusinessInsurance;