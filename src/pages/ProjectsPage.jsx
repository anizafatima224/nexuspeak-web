import React, { useEffect, useState } from 'react';
import { fetchProjectsData } from '../services/api';
import { Loader2 } from 'lucide-react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjectsData().then(data => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="flex justify-center my-20"><Loader2 className="animate-spin text-primaryBlue w-10 h-10" /></div>;

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-darkText mb-6">Client Projects Directory</h2>
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b text-sm font-semibold text-lightText">
              <th className="p-4">Project ID</th>
              <th className="p-4">Project Name</th>
              <th className="p-4">Client</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-b text-sm hover:bg-gray-50">
                <td className="p-4 font-mono">#00{p.id}</td>
                <td className="p-4 font-bold text-darkText">{p.name}</td>
                <td className="p-4 text-lightText">{p.client}</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-successGreen">
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsPage;