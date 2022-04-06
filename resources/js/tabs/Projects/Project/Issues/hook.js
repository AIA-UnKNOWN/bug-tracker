import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setIssues } from '@reducers/issuesSlice';


const useIssues = projectId => {
  const issues = useSelector(state => state.issues.issues);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getIssues(projectId);
  }, [projectId]);

  const getIssues = async (projectId) => {
    setIsLoading(true);
    const response = await fetch(`/api/issues/${projectId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    const issues = await response.json();
    dispatch(setIssues({ issues }));
    setIsLoading(false);
  }

  return { issues, isLoading, getIssues };
}

export default useIssues;