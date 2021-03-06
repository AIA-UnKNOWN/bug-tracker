import { useSelector } from 'react-redux';

import Profile from '@tabs/Profile';
import Friends from '@tabs/Friends';
import Projects from '@tabs/Projects';


const Tabs = () => {
  const currentTab = useSelector(state => state.tab.currentTab);

  const renderTab = currentTab => {
    switch (currentTab) {
      case 'profile':
        return (<Profile />);
      case 'friends':
        return (<Friends />);
      default:
        return (<Projects />);
    }
  }

  return (
    <div className="absolute lg:static top-0 left-0 w-full lg:h-screen lg:overflow-y-auto">
      {renderTab(currentTab)}
    </div>
  );
}

export default Tabs;