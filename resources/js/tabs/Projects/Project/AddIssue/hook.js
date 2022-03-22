import { useState } from 'react';

import useIssues from '@tabs/Projects/Project/Issues/hook';


const useAddIssue = projectId => {
  const { getIssues } = useIssues(projectId);
  const [name, setName] = useState('');
  const [assigneeId, setAssigneeId] = useState(0);

  const addIssue = async () => {
    const response = await fetch(`/api/project/${projectId}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      },
      body: JSON.stringify({ issueName: name })
    });
    const data = await response.json();
    if (data.message === 'added') {
      getIssues(projectId);
      setName('');
    }
  }

  return { name, setName, addIssue };
}

export default useAddIssue;