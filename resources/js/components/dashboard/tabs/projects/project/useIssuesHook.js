import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setIssues } from '../../../../../reducers/issuesSlice';


const useIssues = projectId => {
  const issues = useSelector(state => state.issues.issues);
  const dispatch = useDispatch();

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
    dispatch(setIssues({ issues }));
  }

  return { issues, setIssues, getIssues };
}

export default useIssues;