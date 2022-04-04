import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import useProjects from '@tabs/Projects/hook';

const useProjectInfoField = project => {
  const { getProjects } = useProjects();
  const [saveButton, setSaveButton] = useState('Save');
  const [removeButton, setRemoveButton] = useState('Remove');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    setProjectName(project.name);
  }, []);

  const handleProjectNameChanges = e => {
    setSaveButton('Save');
    setProjectName(e.target.value);
  }

  const update = async () => {
    setSaveButton('Saving...');
    const response = await fetch(`/api/project/${project.id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      },
      body: JSON.stringify({ name: projectName })
    });
    if (!response.ok) return;
    getProjects();
    setSaveButton('Saved!');
  }

  const remove = async () => {
    setRemoveButton('Removing...');
    const response = await fetch(`/api/project/${project.id}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      }
    });
    if (!response.ok) return;
    getProjects();
    setRemoveButton('Removed!');
  }

  return {
    saveButton, removeButton,
    isCollapsed, setIsCollapsed,
    projectName, handleProjectNameChanges,
    update, remove
  }
}

export default useProjectInfoField;