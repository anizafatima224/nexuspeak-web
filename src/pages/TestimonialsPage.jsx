import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const reviews = [
    {
      name: "Ahmed Khan",
      company: "Tech Startups UAE",
      rating: 5,
      comment: "Nexuspeak completely revamped our website and branding. Their AI estimators and tracking features made working with them seamless!"
    },
    {
      name: "Sarah Jenkins",
      company: "Growth Media UK",
      rating: 5,
      comment: "Outstanding digital marketing results! Our organic leads grew by 150% in just two months."
    },
    {
      name: "Usman Ali",
      company: "E-Commerce Logistics PK",
      rating: 5,
      comment: "The full-stack platform they developed for us is rock-solid. Exceptional backend and client dashboard."
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-darkText">Client Testimonials</h1>
        <p className="text-lightText text-lg mt-3">Read what our global clients say about working with Nexuspeak.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-lightSky/30 border border-gray-200 p-8 rounded-2xl relative">
            <Quote className="w-10 h-10 text-primaryBlue/20 absolute top-6 right-6" />
            <div className="flex gap-1 text-amber-500 mb-4">
              {[...Array(rev.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500" />
              ))}
            </div>
            <p className="text-darkText italic mb-6">"{rev.comment}"</p>
            <div>
              <h4 className="font-bold text-darkText">{rev.name}</h4>
              <p className="text-xs text-lightText">{rev.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;