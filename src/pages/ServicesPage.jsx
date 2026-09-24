import React, { useState } from 'react';
import { Search, Code, Palette, TrendingUp, Cpu } from 'lucide-react';

const ServicesPage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const services = [
    { id: 1, title: 'Web App Development', cat: 'Development', desc: 'Custom React & Node.js scalable web applications.', icon: <Code /> },
    { id: 2, title: 'UI/UX Redesign', cat: 'Design', desc: 'Modern interfaces for web and mobile platforms.', icon: <Palette /> },
    { id: 3, title: 'SEO Optimization', cat: 'Marketing', desc: 'Rank #1 on Google with data-driven strategies.', icon: <TrendingUp /> },
    { id: 4, title: 'AI Automation', cat: 'Development', desc: 'Integrate AI workflows & chatbots in your app.', icon: <Cpu /> },
  ];

  const filteredServices = services.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === 'All' || s.cat === category;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-darkText">Explore Our Services</h1>
        <p className="text-lightText mt-2">Filter through our agency deliverables</p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search services..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            className="w-full pl-10 p-3 border rounded-lg focus:outline-primaryBlue"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto">
          {['All', 'Development', 'Design', 'Marketing'].map((cat) => (
            <button 
              key={cat} 
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                category === cat ? 'bg-primaryBlue text-white' : 'bg-gray-100 text-darkText hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredServices.map(s => (
          <div key={s.id} className="p-6 border rounded-xl bg-white hover:shadow-md transition-shadow">
            <div className="p-3 bg-lightSky w-fit rounded-lg text-primaryBlue mb-4">{s.icon}</div>
            <h3 className="text-xl font-bold text-darkText">{s.title}</h3>
            <span className="inline-block bg-gray-100 text-xs px-2.5 py-1 rounded mt-1 text-lightText font-semibold">{s.cat}</span>
            <p className="text-lightText text-sm mt-3">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;