import React from 'react';
import { Award, Users, Globe, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-primaryBlue font-semibold uppercase tracking-wider text-sm bg-lightSky px-4 py-2 rounded-full">
          About Nexuspeak
        </span>
        <h1 className="text-4xl font-extrabold text-darkText mt-4">We Work To Ensure Your Success</h1>
        <p className="text-lightText text-lg max-w-2xl mx-auto mt-4">
          Nexuspeak is a creative business solutions agency delivering digital transformation across Pakistan, UAE, UK, and USA.
        </p>
      </div>

      {/* Badges / Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
        <div className="bg-lightSky/50 p-6 rounded-xl text-center border border-blue-100">
          <Award className="w-12 h-12 text-primaryBlue mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-darkText">25+ Years</h3>
          <p className="text-lightText text-sm mt-1">Combined Team Experience</p>
        </div>
        <div className="bg-lightSky/50 p-6 rounded-xl text-center border border-blue-100">
          <Users className="w-12 h-12 text-primaryBlue mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-darkText">50+ Clients</h3>
          <p className="text-lightText text-sm mt-1">Global Active Clients</p>
        </div>
        <div className="bg-lightSky/50 p-6 rounded-xl text-center border border-blue-100">
          <Target className="w-12 h-12 text-primaryBlue mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-darkText">150+ Projects</h3>
          <p className="text-lightText text-sm mt-1">Successfully Delivered</p>
        </div>
        <div className="bg-lightSky/50 p-6 rounded-xl text-center border border-blue-100">
          <Globe className="w-12 h-12 text-primaryBlue mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-darkText">4+ Countries</h3>
          <p className="text-lightText text-sm mt-1">International Reach</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;