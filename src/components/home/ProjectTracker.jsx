import React, { useState } from 'react';
import { Search, Clock, CheckCircle, ShieldAlert } from 'lucide-react';

const ProjectTracker = () => {
  const [searchId, setSearchId] = useState('');
  const [projectData, setProjectData] = useState(null);
  const [searched, setSearched] = useState(false);

  // Mock Database
  const mockProjects = {
    'NX-101': { client: 'Apex Tech', title: 'Web Redesign', status: 'In Progress', progress: 65, step: 'Frontend Development' },
    'NX-102': { client: 'Global Mart', title: 'E-commerce App', status: 'Completed', progress: 100, step: 'Final Delivery' },
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const result = mockProjects[searchId.trim().toUpperCase()];
    setProjectData(result || null);
    setSearched(true);
  };

  return (
    <div className="py-12 px-4 max-w-3xl mx-auto my-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-darkText">Track Project Status</h2>
        <p className="text-lightText text-sm mt-1">Enter your Project ID (e.g., NX-101, NX-102)</p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input 
          type="text" 
          placeholder="Enter Project ID (NX-101)" 
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-primaryBlue"
        />
        <button type="submit" className="bg-primaryBlue text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
          <Search className="w-4 h-4" /> Track
        </button>
      </form>

      {searched && (
        projectData ? (
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-darkText">{projectData.title}</h3>
                <p className="text-xs text-lightText">Client: {projectData.client}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                projectData.status === 'Completed' ? 'bg-green-100 text-successGreen' : 'bg-blue-100 text-primaryBlue'
              }`}>
                {projectData.status}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-primaryBlue h-3 rounded-full transition-all duration-500" 
                style={{ width: `${projectData.progress}%` }}
              ></div>
            </div>

            <div className="flex items-center gap-2 text-xs text-lightText">
              <Clock className="w-4 h-4 text-primaryBlue" /> Current Phase: <span className="font-semibold text-darkText">{projectData.step}</span>
            </div>
          </div>
        ) : (
          <div className="bg-red-50 text-warningRed p-4 rounded-xl flex items-center gap-3 border border-red-200">
            <ShieldAlert className="w-5 h-5" />
            <span className="text-sm font-medium">No project found with ID "{searchId}". Try NX-101 or NX-102.</span>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectTracker;