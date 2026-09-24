import React, { useState } from 'react';
import { Check, Shield, Zap } from 'lucide-react';

const InteractiveEstimator = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [addons, setAddons] = useState({ seo: false, maintenance: false, speed: false });

  const plans = {
    starter: { name: 'Starter', price: 499, features: ['5 Pages Website', 'Responsive Design', 'Basic SEO'] },
    pro: { name: 'Professional', price: 999, features: ['10 Pages Website', 'E-commerce Ready', 'Advanced SEO', '1 Year Hosting'] },
    enterprise: { name: 'Enterprise', price: 1999, features: ['Custom Web App', 'Mobile App Included', '24/7 Dedicated Support', 'Unlimited Pages'] }
  };

  const toggleAddon = (key) => setAddons(prev => ({ ...prev, [key]: !prev[key] }));

  const calculateTotal = () => {
    let total = plans[selectedPlan].price;
    if (addons.seo) total += 150;
    if (addons.maintenance) total += 200;
    if (addons.speed) total += 100;
    return total;
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-darkText">Custom Package Estimator</h2>
        <p className="text-lightText mt-2">Select your core plan and add-ons to get an instant estimate</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {Object.keys(plans).map((key) => {
          const plan = plans[key];
          return (
            <div 
              key={key}
              onClick={() => setSelectedPlan(key)}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                selectedPlan === key ? 'border-primaryBlue bg-lightSky/30 shadow-md' : 'border-gray-200 bg-white'
              }`}
            >
              <h3 className="text-xl font-bold text-darkText">{plan.name}</h3>
              <div className="text-3xl font-black text-primaryBlue my-3">${plan.price}</div>
              <ul className="space-y-2 text-sm text-lightText">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-successGreen" /> {f}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
        <h4 className="font-bold text-darkText mb-4">Optional Add-ons:</h4>
        <div className="grid sm:grid-cols-3 gap-4">
          <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer">
            <input type="checkbox" checked={addons.seo} onChange={() => toggleAddon('seo')} className="accent-primaryBlue" />
            <span className="text-sm font-medium">Monthly SEO (+$150)</span>
          </label>
          <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer">
            <input type="checkbox" checked={addons.maintenance} onChange={() => toggleAddon('maintenance')} className="accent-primaryBlue" />
            <span className="text-sm font-medium">AMC Support (+$200)</span>
          </label>
          <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer">
            <input type="checkbox" checked={addons.speed} onChange={() => toggleAddon('speed')} className="accent-primaryBlue" />
            <span className="text-sm font-medium">Speed Optimization (+$100)</span>
          </label>
        </div>
      </div>

      <div className="bg-deepNavy text-white p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-gray-400 text-sm">Estimated Project Cost:</span>
          <div className="text-4xl font-extrabold text-primaryBlue">${calculateTotal()}</div>
        </div>
        <button className="bg-primaryBlue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg">
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default InteractiveEstimator;