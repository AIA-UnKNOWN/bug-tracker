import { useState } from 'react';
import Cookies from 'js-cookie';
import useProjects from '@tabs/Projects/hook';


const useAddProject = () => {
  const { getProjects } = useProjects();
  const [name, setName] = useState('');

  const addProject = async () => {
    const response = await fetch('/api/projects/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
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