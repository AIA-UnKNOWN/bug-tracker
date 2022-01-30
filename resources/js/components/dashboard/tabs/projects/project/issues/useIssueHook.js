import { useState, useEffect } from 'react';


const useIssue = issue => {
  const statuses = ['closed', 'open'];
  const [issueName, setIssueName] = useState('');
  const [assigneeId, setAssigneeId] = useState(0);
  const [issueStatus, setIssueStatus] = useState(statuses[1]);
  const [newIssueStatus, setNewIssueStatus] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  useEffect(() => {
    setIssueName(issue.name);
    setAssigneeId(issue.assignee_id);
    setIssueStatus(issue.status);
    setNewIssueStatus(issue.status);
  }, []);

  const updateIssue = async ({ id, issueName, assigneeId, issueStatus }) => {
    const response = await fetch(`/api/issue/${id}/update`, {
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
    return;
  }

  return {
    statuses,
    issueName,
    setIssueName,
    assigneeId,
    setAssigneeId,
    issueStatus,
    setIssueStatus,
    isCollapsed,
    setIsCollapsed,
    isSaved,
    setIsSaved,
    updateIssue,
    newIssueStatus,
    setNewIssueStatus
  };
}

export default useIssue;