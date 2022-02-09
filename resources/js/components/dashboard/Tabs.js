import { useSelector } from 'react-redux';

import Profile from './tabs/Profile';
import Friends from './tabs/Friends';
import Projects from './tabs/Projects';


const Tabs = () => {
  const currentTab = useSelector(state => state.tab.currentTab);

  const renderTab = currentTab => {
    switch (currentTab) {
      case 'profile':
        return (<Profile />);
        break;
      case 'friends':
        return (<Friends />);
        break;
      default:
        return (<Projects />);
    }
  }

  return (
    <div className="absolute top-0 left-0 w-full">
      {renderTab(currentTab)}
    </div>
  );
}

export default Tabs;