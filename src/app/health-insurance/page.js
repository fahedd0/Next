import React from 'react';
import InsuranceSolutionTemplate from '../components/InsuranceSolutionTemplate';
import HealthIcon from '../assets/HealthIns.png';
import { Heart, Activity, Clock, Shield, Users, Award } from 'lucide-react';

const HealthInsurance = () => {
  const features = [
    {
      icon: <Heart className="h-6 w-6 text-blue-500" />,
      title: "Comprehensive Coverage",
      description: "Protection for hospitalization, outpatient visits, diagnostics, medications, and treatments."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Family Plans",
      description: "Flexible options to cover spouses, children, or dependents under one unified plan."
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-500" />,
      title: "Wellness Programs",
      description: "Fitness, screenings, and lifestyle coaching to support long-term well-being."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "24/7 Telemedicine",
      description: "Virtual access to certified doctors anytime, anywhere through your device."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Maternity Coverage",
      description: "Inclusive care for prenatal, delivery, and postnatal services."
    },
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      title: "International Coverage",
      description: "Global emergency care with network hospital access and direct billing support."
    }
  ];

  const benefits = [
    {
      title: "Streamlined Claims Processing",
      description: "Our digital claims submission system reduces processing time by up to 80%, allowing faster reimbursements and less paperwork."
    },
    {
      title: "Personalized Health Management",
      description: "Access to digital health records, appointment scheduling, and medication reminders for better health management."
    },
    {
      title: "Transparent Coverage",
      description: "Clear explanation of benefits with no hidden exclusions, making it easier for customers to understand what's covered."
    },
    {
      title: "Affordable Premiums",
      description: "Our efficient digital processes allow us to offer competitive premiums without compromising on coverage quality."
    }
  ];

  const faqs = [
    {
      question: "Does this health insurance cover pre-existing conditions?",
      answer: "Yes, our health insurance covers pre-existing conditions after a waiting period of 24 months for most conditions. Some specific conditions may have different waiting periods as specified in the policy documents."
    },
    {
      question: "How do I find doctors in your network?",
      answer: "You can easily search for in-network doctors through our mobile app or website. The directory is regularly updated and allows filtering by specialty, location, and languages spoken."
    },
    {
      question: "What is the process for getting prescriptions filled?",
      answer: "You can fill prescriptions at any of our partner pharmacies by showing your digital insurance card. For certain medications, we also offer a home delivery service that can be requested through our app."
    },
    {
      question: "Are mental health services covered?",
      answer: "Yes, our health insurance includes coverage for mental health services including therapy sessions, psychiatric consultations, and certain treatments. The specific coverage limits are detailed in your policy."
    }
  ];

  return (
    <InsuranceSolutionTemplate 
      title="Health Insurance Solutions"
      description="Empower your health journey with digital-first insurance options designed for individuals, families, and professionals. Ameni simplifies how you access quality healthcare protection, connecting you to customizable plans that cover everything from emergencies to preventive care. With instant policy access, 24/7 digital support, and trusted providers, we make it easier than ever to secure the coverage you need — wherever life takes you."
      icon={HealthIcon}
      features={features}
      benefits={benefits}
      faqs={faqs}
    />
  );
};

export default HealthInsurance;