import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setProjects } from '@reducers/projectsSlice';


const useProjects = () => {
  const projects = useSelector(state => state.projects.projects);
  const dispatch = useDispatch();
  const [viewMode, setViewMode] = useState(false);
  const [projectId, setProjectId] = useState(0);
  
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await fetch('/api/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    const projects = await response.json();
    dispatch(setProjects({ projects }));
  }

  const viewProject = id => {
    setProjectId(id);
    setViewMode(true);
  }

  return { projects, viewMode, projectId, viewProject, setViewMode, getProjects };
}

export default useProjects;