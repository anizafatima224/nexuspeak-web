import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../components/common/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you within 24 hours.');
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-darkText">Wanna Talk With Us?</h1>
        <p className="text-lightText text-lg mt-3">Drop us a message and our team will get back to you shortly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-deepNavy text-white p-8 sm:p-12 rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-primaryBlue mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-primaryBlue w-6 h-6" />
                <span>support@nexuspeak.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-primaryBlue w-6 h-6" />
                <span>+92 (300) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-primaryBlue w-6 h-6" />
                <span>Islamabad / Dubai / London</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-200 rounded-2xl space-y-4">
          <div>
            <label className="block text-sm font-medium text-darkText mb-1">Full Name</label>
            <input 
              type="text" required 
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-primaryBlue" 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-darkText mb-1">Email Address</label>
            <input 
              type="email" required 
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-primaryBlue" 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-darkText mb-1">Message</label>
            <textarea 
              rows="4" required 
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-primaryBlue"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <Button variant="primary" type="submit" className="w-full flex items-center justify-center gap-2">
            <Send className="w-4 h-4" /> Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;