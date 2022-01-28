import { useState, useEffect } from 'react';


const useIssues = projectId => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues(projectId);
  }, [projectId]);

  const getIssues = async (projectId) => {
    const response = await fetch(`/api/issues/${projectId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    const issues = await response.json();
    setIssues(issues);
  }

  return { issues, setIssues, getIssues };
}

export default useIssues;