import React from 'react';
import { FileText, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold text-darkText mb-8">Client Overview Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-5 border rounded-xl flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-lg text-primaryBlue"><FileText /></div>
          <div>
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-lightText">Total Projects</div>
          </div>
        </div>
        <div className="bg-white p-5 border rounded-xl flex items-center gap-4">
          <div className="p-3 bg-amber-100 rounded-lg text-amber-600"><Clock /></div>
          <div>
            <div className="text-2xl font-bold">1</div>
            <div className="text-xs text-lightText">In Progress</div>
          </div>
        </div>
        <div className="bg-white p-5 border rounded-xl flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-lg text-successGreen"><CheckCircle2 /></div>
          <div>
            <div className="text-2xl font-bold">2</div>
            <div className="text-xs text-lightText">Completed</div>
          </div>
        </div>
        <div className="bg-white p-5 border rounded-xl flex items-center gap-4">
          <div className="p-3 bg-red-100 rounded-lg text-warningRed"><AlertCircle /></div>
          <div>
            <div className="text-2xl font-bold">$0</div>
            <div className="text-xs text-lightText">Pending Invoices</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;