import { useState, useEffect } from 'react';


const useIssue = issue => {
  const statuses = ['closed', 'open'];
  const [issueName, setIssueName] = useState('');
  const [assigneeId, setAssigneeId] = useState(0);
  const [issueStatus, setIssueStatus] = useState(statuses[1]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  useEffect(() => {
    setIssueName(issue.name);
    setAssigneeId(issue.assignee_id);
    setIssueStatus(issue.status);
  }, []);

  const getIssue = async (issueId) => {
    const response = await fetch(`/api/issue/${issueId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    const issue = await response.json();
    console.log(issue)
  }

  const updateIssue = async (issueId) => {
    const response = await fetch(`/api/issue/${issueId}/update`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      },
      body: JSON.stringify({ issueName, assigneeId, issueStatus })
    });
    const data = await response.json();
    console.log(data.message);
  }

  return {
    issueName,
    setIssueName,
    assigneeId,
    setAssigneeId,
    issueStatus,
    setIssueStatus,
    isCollapsed,
    setIsCollapsed,
    getIssue,
    updateIssue
  };
}

export default useIssue;