import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import DogIcon from '../assets/PetIns.png';
import { Heart, Stethoscope, Dog, Pill, Activity, Smile } from 'lucide-react';

const PetInsurance = () => {
  const features = [
    {
      icon: <Stethoscope className="h-6 w-6 text-blue-500" />,
      title: "Veterinary Care Coverage",
      description: "Covers emergency vet visits, surgeries, and hospital stays for your pets."
    },
    {
      icon: <Dog className="h-6 w-6 text-blue-500" />,
      title: "Accident & Illness Protection",
      description: "Protection against injuries, sickness, and chronic conditions."
    },
    {
      icon: <Pill className="h-6 w-6 text-blue-500" />,
      title: "Medication Coverage",
      description: "Support for prescribed medications, including long-term or recurring treatments."
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-500" />,
      title: "Preventive Care Options",
      description: "Optional coverage for checkups, vaccines, dental, and routine care."
    },
    {
      icon: <Smile className="h-6 w-6 text-blue-500" />,
      title: "Alternative Therapy Coverage",
      description: "Covers vet-recommended treatments like acupuncture or hydrotherapy."
    },
    {
      icon: <Heart className="h-6 w-6 text-blue-500" />,
      title: "Multi-Pet Discounts",
      description: "Save with bundled plans when insuring more than one pet."
    }
  ];

  const benefits = [
    {
      title: "Personalized Plan Selection",
      description: "Easily compare plans tailored to your pet's breed, age, and health status to find the perfect coverage at the right price."
    },
    {
      title: "Transparent Policy Terms",
      description: "Clear explanation of coverage, exclusions, and waiting periods with no complicated jargon or hidden conditions."
    },
    {
      title: "Quick Digital Enrollment",
      description: "Simple online application process that takes minutes to complete, with instant policy issuance and digital documentation."
    },
    {
      title: "Streamlined Claims Process",
      description: "Hassle-free digital claims submission with fast processing times and direct payment options from our partner insurers."
    }
  ];

  const faqs = [
    {
      question: "What types of pets can be insured?",
      answer: "Most of our partner insurers cover dogs and cats, while some also offer coverage for exotic pets, birds, and small mammals. Coverage availability may vary based on pet species, breed, and age."
    },
    {
      question: "Are pre-existing conditions covered?",
      answer: "Generally, pre-existing conditions (health issues that existed before enrollment) aren't covered by pet insurance. However, some conditions may be covered after a certain waiting period if your pet has been symptom-free. We recommend checking specific policy details."
    },
    {
      question: "How do reimbursements work?",
      answer: "Typically, you pay the vet upfront and then submit a claim for reimbursement. Depending on your policy, you'll receive a percentage (usually 70-90%) of covered expenses after your deductible. Some partners may offer direct payment to vets in their network."
    },
    {
      question: "Is there an age limit for enrolling pets?",
      answer: "Most insurers have minimum and maximum age requirements. Puppies and kittens usually need to be at least 6-8 weeks old, while maximum enrollment age varies by provider and breed. Senior pets may have limited coverage options or higher premiums."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Pet Insurance Solutions"
      description="Give your pets the care they deserve with Ameni’s seamless digital pet insurance experience. From routine checkups to emergency treatments, our platform offers a range of customizable plans to support your pet’s health at every stage. Easily access coverage for illnesses, accidents, medications, and even alternative therapies — all managed online in just a few clicks. Whether you’re a first-time pet parent or managing multiple pets, we make insurance simple, affordable, and tailored for peace of mind."
      icon={DogIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default PetInsurance;