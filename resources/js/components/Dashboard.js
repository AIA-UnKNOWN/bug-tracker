import Navigation from './dashboard/Navigation';
import Tabs from './dashboard/Tabs';


const Dashboard = () => {
  return (
    <div className="flex relative">
      <Navigation />
      <Tabs />
    </div>
  );
}

export default Dashboard;