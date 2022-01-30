import { useState, useEffect } from 'react';


const useAssignee = (issueId, currentAssigneeId) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [assignees, setAssignees] = useState([]);
  const [assigneeId, setAssigneeId] = useState(0);
  const [assignee, setAssignee] = useState({});

  useEffect(() => {
    setAssigneeId(currentAssigneeId);
    getAssignees(issueId);
  }, []);

  const getAssignees = async (issueId) => {
    const response = await fetch(`/api/issue/${issueId}/assignees`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    const data = await response.json();
    setAssignees(data);
    setAssignee(data.length > 0 ? data[0] : {});
  }

  return { isCollapsed, setIsCollapsed, assignees, assignee, setAssigneeId, setAssignee, getAssignees };
}

export default useAssignee;