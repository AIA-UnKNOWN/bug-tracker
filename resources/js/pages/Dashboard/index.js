import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Navigation from './Navigation';
import Tabs from './Tabs';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex relative lg:static">
      <div
        className="w-[30px] h-[30px] bg-white shadow-md rounded-md fixed z-10 top-3 left-3 flex justify-center items-center lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>

      <Navigation
        isSidebarOpen={isSidebarOpen}
        onClickXMark={() => setIsSidebarOpen(false)}
      />
      <Tabs />
    </div>
  );
}

export default Dashboard;