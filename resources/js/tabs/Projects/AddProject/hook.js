import { useState } from 'react';
import Cookies from 'js-cookie';
import useProjects from '@tabs/Projects/hook';


const useAddProject = () => {
  const { getProjects } = useProjects();
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [addButtonText, setAddButtonText] = useState('Add');

  const validate = () => {
    let error = '';
    if (name === '')
      error = 'Project name is required';
    setErrorMessage(error);
    return error === '';
  }

  const addProject = async () => {
    if (!validate()) return;
    setAddButtonText('Adding...');
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
    if (data.message === 'project created')
      getProjects();
    setName('');
    setAddButtonText('Add');
  }

  return { name, setName, addProject, errorMessage, addButtonText };
}

export default useAddProject;