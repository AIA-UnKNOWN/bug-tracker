import { useState, useEffect } from 'react';


const useProject = id => {
  const [project, setProject] = useState({});

  useEffect(() => {
    getProject(id);
  }, []);

  const getProject = async (projectId) => {
    const response = await fetch(`/api/project/${projectId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    const project = await response.json();
    setProject({
      id: project.id,
      name: project.name,
      issues: project.issues,
      userId: project.user_id
    });
  }

  return { project, setProject, getProject };
}

export default useProject;