import React from 'react';
import { CheckCircle } from 'lucide-react';

const ToastNotification = ({ message }) => {
  if (!message) return null;
  return (
    <div className="fixed bottom-5 right-5 bg-deepNavy text-white px-5 py-3 rounded-lg shadow-xl flex items-center gap-3 border border-primaryBlue">
      <CheckCircle className="text-successGreen w-5 h-5" />
      <span className="text-sm font-semibold">{message}</span>
    </div>
  );
};

export default ToastNotification;