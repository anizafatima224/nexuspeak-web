import React from 'react';
import { Palette, Briefcase, TrendingUp, Code, CheckCircle } from 'lucide-react';
import Button from '../components/common/Button';

const ServicesPage = () => {
  const serviceList = [
    {
      title: "Creative Design",
      desc: "Branding, graphic design, UI/UX design, and design systems.",
      icon: <Palette className="w-8 h-8 text-primaryBlue" />,
      features: ["Brand Identity", "UI/UX Prototyping", "Graphic Design"]
    },
    {
      title: "Business Consulting",
      desc: "Strategy, business growth, financial planning, and operational tools.",
      icon: <Briefcase className="w-8 h-8 text-primaryBlue" />,
      features: ["Growth Strategy", "Financial Planning", "Process Optimization"]
    },
    {
      title: "Digital Marketing",
      desc: "SEO, social media management, lead generation, and content strategies.",
      icon: <TrendingUp className="w-8 h-8 text-primaryBlue" />,
      features: ["SEO Optimization", "Social Media Campaigns", "Lead Generation"]
    },
    {
      title: "Software Development",
      desc: "Full-stack web applications, mobile apps, and custom software architectures.",
      icon: <Code className="w-8 h-8 text-primaryBlue" />,
      features: ["React & Node.js Web Apps", "Flutter Mobile Apps", "API Integration"]
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-darkText">Our Services</h1>
        <p className="text-lightText text-lg mt-3">Comprehensive solutions built to scale your agency operations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {serviceList.map((service, index) => (
          <div key={index} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-lightSky rounded-xl">{service.icon}</div>
              <h3 className="text-2xl font-bold text-darkText">{service.title}</h3>
            </div>
            <p className="text-lightText mb-6">{service.desc}</p>
            <ul className="space-y-2 mb-8">
              {service.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2 text-darkText text-sm">
                  <CheckCircle className="w-4 h-4 text-successGreen" />
                  {feat}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">Request Quote</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;