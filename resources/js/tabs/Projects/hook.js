import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setProjects } from '@reducers/projectsSlice';


const useProjects = () => {
  const projects = useSelector(state => state.projects.projects);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState(false);
  const [projectId, setProjectId] = useState(0);
  
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    setIsLoading(true);
    const response = await fetch('/api/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    const projects = await response.json();
    dispatch(setProjects({ projects }));
    setIsLoading(false);
  }

  const viewProject = id => {
    setProjectId(id);
    setViewMode(true);
  }

  return { projects, isLoading, viewMode, projectId, viewProject, setViewMode, getProjects };
}

export default useProjects;