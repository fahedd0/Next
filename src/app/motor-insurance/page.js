import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import CarIcon from '../assets/CarIns.png';
import { Shield, Car, CreditCard, Clock, CheckSquare, Wrench } from 'lucide-react';

const MotorInsurance = () => {
  const features = [
    {
      icon: <Car className="h-6 w-6 text-blue-500" />,
      title: "Coverage Options",
      description: "Select from Third Party Liability (TPL) or comprehensive plans tailored to your vehicle type and usage."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Streamlined Digital Access",
      description: "Manage quotes, documents, and renewals easily through your Ameni dashboard."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-500" />,
      title: "Competitive Premiums",
      description: "Access exclusive online offers and seasonal discounts from leading providers."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Instant Policy Issuance",
      description: "Secure and receive your motor insurance policy digitally in just minutes."
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "24/7 Roadside Assistance",
      description: "Enjoy emergency support anytime with included roadside services."
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-blue-500" />,
      title: "Agency Repair Options",
      description: "Choose between agency or non-agency repairs based on your preferences and budget."
    }
  ];

  const benefits = [
    {
      title: "Time-Saving Comparison",
      description: "No need to visit multiple websites or make phone calls - compare all available options in one place with complete transparency."
    },
    {
      title: "Informed Decision Making",
      description: "Make confident choices based on side-by-side comparisons of coverage details, pricing, benefits, and policy terms."
    },
    {
      title: "Vehicle-Specific Solutions",
      description: "Find policies tailored to your specific vehicle type - whether it's a sedan, SUV, motorcycle, or commercial vehicle."
    },
    {
      title: "Simplified Documentation",
      description: "Store all your insurance documents digitally in one secure place for easy access and management, with convenient renewal reminders."
    }
  ];

  const faqs = [
    {
      question: "What's the difference between TPL and comprehensive motor insurance?",
      answer: "Third Party Liability (TPL) insurance is the minimum legal requirement in the UAE and covers damages you cause to other people's property or injuries to third parties. Comprehensive insurance includes TPL coverage plus protection for your own vehicle against accidents, theft, fire, and natural disasters."
    },
    {
      question: "How quickly can I get my motor insurance policy?",
      answer: "With our digital platform, most policies are issued instantly after payment is confirmed. You'll receive your digital insurance certificate immediately, which is valid for driving and registration purposes."
    },
    {
      question: "What factors affect my motor insurance premium?",
      answer: "Several factors influence your premium, including your vehicle's make, model, year, and value; your driving history and claims record; your age and driving experience; and optional coverage add-ons you select. Our comparison tool helps you understand how these factors impact pricing."
    },
    {
      question: "Can I transfer my no-claims discount from another insurer?",
      answer: "Yes, most insurance providers recognize no-claims discounts from other companies. You'll typically need to provide proof of your claims-free period from your previous insurer to benefit from continued discounts."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Motor Insurance Solutions"
      description="Experience fast, reliable motor insurance designed for the digital age. Ameni simplifies the way individuals and businesses access vehicle coverage, offering flexible options that suit every driver. Whether you need basic protection or full-risk coverage, our platform ensures instant access to trusted insurance providers, competitive premiums, and real-time support. Enjoy seamless policy issuance, flexible repair options, and enhanced roadside assistance — all in one place."
      icon={CarIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default MotorInsurance;