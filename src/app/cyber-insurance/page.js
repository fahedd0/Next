import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import ShieldIcon from '../assets/CyberIns.png';
import { ShieldAlert, Lock, Server, GanttChart, Scale, LifeBuoy } from 'lucide-react';

const CyberInsurance = () => {
  const features = [
    {
      icon: <ShieldAlert className="h-6 w-6 text-blue-500" />,
      title: "Data Breach Protection",
      description: "Covers costs related to customer notification, recovery, and credit monitoring."
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-500" />,
      title: "Ransomware Coverage",
      description: "Includes ransom payments, data restoration, and system downtime protection."
    },
    {
      icon: <Server className="h-6 w-6 text-blue-500" />,
      title: "Forensic Investigation",
      description: "Access expert services to trace, analyze, and prevent breach incidents."
    },
    {
      icon: <Scale className="h-6 w-6 text-blue-500" />,
      title: "Legal Expense Coverage",
      description: "Covers regulatory fines, penalties, and cyber-related legal fees."
    },
    {
      icon: <GanttChart className="h-6 w-6 text-blue-500" />,
      title: "Business Interruption",
      description: "Protects income and covers expenses during cyber-related outages."
    },
    {
      icon: <LifeBuoy className="h-6 w-6 text-blue-500" />,
      title: "Incident Response Team",
      description: "On-call cyber specialists for immediate damage control and recovery."
    }
  ];

  const benefits = [
    {
      title: "Enterprise-Grade Protection",
      description: "Access to comprehensive cyber protection typically available only to large enterprises, now tailored for businesses of all sizes."
    },
    {
      title: "User-Friendly Risk Assessment",
      description: "Simple process to evaluate your digital footprint and cyber risk exposure without requiring deep technical expertise."
    },
    {
      title: "Transparent Policy Comparison",
      description: "Compare features, pricing, response times, and policy terms from multiple insurers in one easy-to-use interface."
    },
    {
      title: "Preventive Services",
      description: "Optional access to risk assessments, employee training, and digital hygiene tools to strengthen your cyber resilience."
    }
  ];

  const faqs = [
    {
      question: "Who needs cyber insurance?",
      answer: "Any business or individual who stores sensitive data, conducts business online, uses cloud services, or could face financial loss from a cyber attack would benefit from cyber insurance. This includes small businesses, freelancers, and enterprises across all industries."
    },
    {
      question: "What types of cyber attacks are covered?",
      answer: "Our cyber insurance policies typically cover a wide range of incidents including data breaches, ransomware attacks, phishing scams, business email compromise, cyber extortion, identity theft, and financial fraud. Coverage specifics may vary by policy."
    },
    {
      question: "How quickly can I get help if I experience a cyber attack?",
      answer: "Most of our partner insurers offer 24/7 incident response services with dedicated hotlines. You can typically get initial guidance within minutes of reporting an incident and have experts working on your case within hours."
    },
    {
      question: "Does cyber insurance cover losses from social engineering attacks?",
      answer: "Many policies do cover losses from social engineering attacks, such as when an employee is tricked into transferring funds or sharing sensitive information. However, coverage limits and requirements for security measures may vary by insurer."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Cyber Insurance Solutions"
      description="In today’s connected world, cyber threats are constant — and costly. Ameni’s Cyber Insurance Solutions offer digital-first protection designed for businesses of all sizes, helping you stay secure, resilient, and compliant. From ransomware attacks to data breaches, our platform connects you with specialized coverage that minimizes downtime, safeguards your reputation, and provides expert support when it matters most. Secure your digital environment with fast, flexible insurance built for the modern threat landscape."
      icon={ShieldIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default CyberInsurance;