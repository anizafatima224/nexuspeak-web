import axios from 'axios';

// Mock API instance
export const fetchProjectsData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Nexus Peak Portal', client: 'TechNexus', status: 'Active' },
        { id: 2, name: 'E-Store UAE', client: 'Gulf Traders', status: 'Completed' },
        { id: 3, name: 'Fintech Dashboard', client: 'London Capital', status: 'Pending' },
      ]);
    }, 500);
  });
};