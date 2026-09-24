import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in successfully as ${email}`);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 border rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-darkText text-center mb-6">Client Portal Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input 
                type="email" required 
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 p-2.5 border rounded-lg focus:outline-primaryBlue" 
                placeholder="client@agency.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input 
                type="password" required 
                value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 p-2.5 border rounded-lg focus:outline-primaryBlue" 
                placeholder="••••••••"
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-primaryBlue text-white py-3 rounded-lg font-bold">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;