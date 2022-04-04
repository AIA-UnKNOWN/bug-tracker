import { useState } from 'react';

const useProjectInfoField = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return { isCollapsed, setIsCollapsed }
}

export default useProjectInfoField;