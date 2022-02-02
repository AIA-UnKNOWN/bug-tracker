import { useState } from 'react';

import useProjects from '../useProjectsHook';


const useAddProject = () => {
  const { getProjects } = useProjects();
  const [name, setName] = useState('');

  const addProject = async () => {
    const response = await fetch('/api/projects/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      },
      body: JSON.stringify({ projectName: name })
    });
    const data = await response.json();
    if (data.message === 'project created') getProjects();
  }

  return { name, setName, addProject };
}

export default useAddProject;