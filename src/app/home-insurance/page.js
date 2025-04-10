import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import HomeIcon from '../assets/HomeIns.png';
import { Home, Shield, Umbrella, Wrench, Bell, CreditCard } from 'lucide-react';

const HomeInsurance = () => {
  const features = [
    {
      icon: <Home className="h-6 w-6 text-blue-500" />,
      title: "Property Coverage",
      description: "Covers structural damage from fire, flooding, water leaks, or natural disasters."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Contents Protection",
      description: "Protects valuables like electronics, furniture, and personal items from theft or damage."
    },
    {
      icon: <Umbrella className="h-6 w-6 text-blue-500" />,
      title: "Liability Coverage",
      description: "Coverage for tenant liability and legal expenses related to property incidents."
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Emergency Services",
      description: "24/7 support for plumbing, electrical, or lock-related emergencies."
    },
    {
      icon: <Bell className="h-6 w-6 text-blue-500" />,
      title: "Alternative Accommodation",
      description: "Covers temporary housing costs if your home becomes uninhabitable."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-500" />,
      title: "Flexible Payment Options",
      description: "Multiple payment plans with access to discounts and competitive pricing."
    }
  ];

  const benefits = [
    {
      title: "Simplified Shopping Experience",
      description: "Compare multiple quotes side by side in a user-friendly dashboard, eliminating the need to visit multiple websites."
    },
    {
      title: "Instant Policy Issuance",
      description: "Purchase your policy online in minutes and receive instant confirmation with digital access to all your documents."
    },
    {
      title: "Customizable Coverage",
      description: "Filter and sort insurance options based on your specific needs and budget, ensuring you get exactly what you need."
    },
    {
      title: "Optional Add-ons",
      description: "Enhance your protection with add-ons like worldwide personal possessions cover or specialized high-value item coverage."
    }
  ];

  const faqs = [
    {
      question: "Does home insurance cover both owned and rented properties?",
      answer: "Yes, we offer different types of home insurance for homeowners and tenants. Homeowners can get building and contents coverage, while tenants typically need contents insurance to protect their personal belongings."
    },
    {
      question: "Are natural disasters covered under standard home insurance?",
      answer: "Most of our policies cover damage from fire, storms, and water leaks. Coverage for specific natural disasters like floods or earthquakes may vary by policy and provider. We recommend checking the specific coverage details when comparing policies."
    },
    {
      question: "How do I make a claim if my home is damaged?",
      answer: "Claims can be submitted directly through your insurer's website or app. You'll need to provide details of the incident, photos of the damage, and any relevant documentation. Our partner insurers typically have 24/7 claims assistance available."
    },
    {
      question: "Can I insure specific high-value items separately?",
      answer: "Yes, most of our partners offer options to schedule high-value items like jewelry, art, or collectibles separately on your policy to ensure they're fully covered at their appraised value."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Home Insurance Solutions"
      description="Protect your home with confidence through Ameni’s digital-first insurance experience. Whether you own or rent, our platform connects you to reliable home coverage options that safeguard your property, belongings, and liabilities — all accessible online in minutes. From fire and flood protection to theft and temporary housing coverage, our technology simplifies the way you secure what matters most. Enjoy flexibility, transparency, and full control over your insurance journey."
      icon={HomeIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default HomeInsurance;