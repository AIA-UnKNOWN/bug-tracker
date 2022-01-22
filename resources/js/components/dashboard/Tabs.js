import { useSelector } from 'react-redux';

import Profile from './tabs/Profile';


const Tabs = () => {
  const currentTab = useSelector(state => state.tab.currentTab);

  const renderTab = currentTab => {
    switch (currentTab) {
      case 'profile':
        return (<Profile />);
        break;
      case 'friends':
        return (<h1>Friends</h1>);
        break;
      default:
        return (<h1>Projects</h1>);
    }
  }

  return (
    <div className="grow">
      {renderTab(currentTab)}
    </div>
  );
}

export default Tabs;