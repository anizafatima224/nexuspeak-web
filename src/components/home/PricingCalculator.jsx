import React, { useState } from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';

const PricingCalculator = () => {
  const [serviceType, setServiceType] = useState('web');
  const [pages, setPages] = useState(5);
  const [speed, setSpeed] = useState('standard');
  const [includeSeo, setIncludeSeo] = useState(false);

  const calculateTotal = () => {
    let base = serviceType === 'web' ? 300 : serviceType === 'app' ? 600 : 200;
    let pageCost = pages * 30;
    let speedCost = speed === 'urgent' ? 150 : 0;
    let seoCost = includeSeo ? 100 : 0;
    return base + pageCost + speedCost + seoCost;
  };

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto bg-lightSky/40 rounded-2xl border border-blue-100 my-10">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primaryBlue/10 text-primaryBlue px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
          <Calculator className="w-4 h-4" /> Instant Cost Estimator
        </div>
        <h2 className="text-3xl font-bold text-darkText">Estimate Your Project Cost</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-darkText mb-2">Service Type</label>
            <select 
              value={serviceType} 
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 bg-white"
            >
              <option value="web">Web Development</option>
              <option value="app">Mobile App Development</option>
              <option value="design">UI/UX & Branding</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-darkText mb-2">Number of Pages / Screens: {pages}</label>
            <input 
              type="range" min="1" max="20" value={pages} 
              onChange={(e) => setPages(Number(e.target.value))}
              className="w-full accent-primaryBlue cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-darkText mb-2">Delivery Timeline</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="speed" value="standard" checked={speed === 'standard'} onChange={() => setSpeed('standard')} />
                Standard (2-3 Weeks)
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="speed" value="urgent" checked={speed === 'urgent'} onChange={() => setSpeed('urgent')} />
                Urgent (1 Week)
              </label>
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer pt-2">
            <input 
              type="checkbox" 
              checked={includeSeo} 
              onChange={(e) => setIncludeSeo(e.target.checked)}
              className="w-4 h-4 text-primaryBlue rounded"
            />
            <span className="text-sm font-medium text-darkText">Include SEO & Digital Setup (+$100)</span>
          </label>
        </div>

        <div className="bg-deepNavy text-white p-8 rounded-xl flex flex-col justify-between text-center md:text-left">
          <div>
            <span className="text-gray-400 text-sm">Estimated Total</span>
            <div className="text-5xl font-extrabold text-primaryBlue mt-2">${calculateTotal()}</div>
            <p className="text-xs text-gray-300 mt-2">*Final quote may vary based on specific custom requirements.</p>
          </div>

          <ul className="space-y-2 my-6 text-sm text-gray-200">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-successGreen" /> Source Code Included</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-successGreen" /> 30 Days Free Support</li>
          </ul>

          <button className="bg-primaryBlue hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full">
            Proceed With Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;