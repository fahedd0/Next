import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import CogIcon from '../assets/EngIns.png';
import { HardHat, Building, Wrench, Clock, Shield, Construction } from 'lucide-react';

const EngineeringInsurance = () => {
  const features = [
    {
      icon: <Construction className="h-6 w-6 text-blue-500" />,
      title: "Contractors' All Risks (CAR)",
      description: "Covers property damage, material losses, and third-party liabilities on engineering sites."
    },
    {
      icon: <HardHat className="h-6 w-6 text-blue-500" />,
      title: "Erection All Risks (EAR)",
      description: "Protects mechanical/electrical installations during setup and testing phases."
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      title: "Machinery Breakdown",
      description: "Covers repairs and losses due to unforeseen machinery damage during use."
    },
    {
      icon: <Building className="h-6 w-6 text-blue-500" />,
      title: "Electronic Equipment Protection",
      description: "Shields sensitive electronics from mechanical, electrical, and accidental damage."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Delayed Startup Coverage",
      description: "Compensation for income loss due to project delays caused by insured events."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Liability Protection",
      description: "Covers third-party injury or property damage from construction-related activities."
    }
  ];

  const benefits = [
    {
      title: "Project-Specific Solutions",
      description: "Tailored insurance options based on your specific project scope, duration, value, and type—from small-scale builds to large industrial works."
    },
    {
      title: "Digital Efficiency",
      description: "Streamlined quote comparison and policy purchasing process without lengthy calls or back-and-forth with multiple agents."
    },
    {
      title: "Comprehensive Coverage",
      description: "Protection for structures, machinery, third-party liabilities, on-site accidents, and damage during construction or installation phases."
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure your projects meet all insurance requirements mandated by contracts, regulations, and financing institutions with proper documentation."
    }
  ];

  const faqs = [
    {
      question: "What is the difference between CAR and EAR insurance?",
      answer: "Contractors' All Risks (CAR) insurance primarily covers civil engineering and building construction projects. Erection All Risks (EAR) focuses on machinery installation, electrical systems, and mechanical erection projects. CAR typically involves more structural work, while EAR involves more technical equipment assembly and testing."
    },
    {
      question: "Can I get coverage for an ongoing project?",
      answer: "While it's always best to secure insurance before a project begins, some insurers do offer coverage for ongoing projects after a thorough risk assessment. There may be exclusions for existing damage or a waiting period before coverage takes effect."
    },
    {
      question: "Does engineering insurance cover design errors?",
      answer: "Standard engineering insurance typically excludes losses resulting from faulty design or specifications. However, some policies offer Design Error Extension or Professional Indemnity coverage as an add-on to protect against design flaws or professional mistakes."
    },
    {
      question: "How long does the coverage last?",
      answer: "Engineering insurance policies typically cover the entire project period, from mobilization to completion. Many policies also include an extended maintenance period (usually 12 months) after project handover to cover defects that appear during this time."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Engineering Insurance Solutions"
      description="Ameni supports engineering firms, developers, and contractors with specialized digital insurance solutions designed for high-risk, high-value projects. Whether it’s civil, mechanical, or electrical works, our platform helps you safeguard your equipment, materials, and workforce from unexpected disruptions. With fast access to expert-backed policies, Ameni ensures smoother operations, minimized downtime, and enhanced risk control — all through a modern, streamlined experience."
      icon={CogIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default EngineeringInsurance;