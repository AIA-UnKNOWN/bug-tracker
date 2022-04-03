import { useState, useEffect } from 'react';
import useUser from './Navigation/User/hook';

const useDashboard = () => {
  const { getProfilePicture } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    getProfilePicture();
  }, []);

  return { isSidebarOpen, setIsSidebarOpen }
}

export default useDashboard;