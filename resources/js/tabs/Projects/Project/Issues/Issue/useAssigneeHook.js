import { useState, useEffect } from 'react';


const useAssignee = (issueId) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [assignees, setAssignees] = useState([]);
  const [nonAssignees, setNonAssignees] = useState([]);

  useEffect(() => {
    getAssigneesAndNonAssignees();
  }, []);

  const getAssigneesAndNonAssignees = () => {
    getAssignees(issueId);
    getNonAssignees(issueId);
  }

  const getAssignees = async (issueId) => {
    const response = await fetch(`/api/issue/${issueId}/assignees`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    const data = await response.json();
    setAssignees(data.map(assignee => ({ ...assignee, isAssigned: true })));
  }

  const getNonAssignees = async (issueId) => {
    const response = await fetch(`/api/issue/${issueId}/non-assignees`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    const data = await response.json();
    setNonAssignees(data.map(assignee => ({ ...assignee, isAssigned: false })));
  }

  const assign = async (userId) => {
    const response = await fetch(`/api/issue/${issueId}/assign`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      },
      body: JSON.stringify({ userId })
    });
    const data = await response.json();
    if (data.message === 'assigned') getAssigneesAndNonAssignees();
  }

  const unAssign = async (userId) => {
    const response = await fetch(`/api/issue/${issueId}/assignee/${userId}/unassign`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      }
    });
    const data = await response.json();
    if (data.message === 'unassigned') getAssigneesAndNonAssignees();
  }

  return {
    isCollapsed, setIsCollapsed,
    assignees, getAssignees,
    nonAssignees, getNonAssignees,
    getAssigneesAndNonAssignees,
    assign, unAssign
  };
}

export default useAssignee;