import Navigation from './dashboard/Navigation';
import Tabs from './dashboard/Tabs';


const Dashboard = () => {
  return (
    <div className="flex relative border border-red">
      <Navigation />
      <Tabs />
    </div>
  );
}

export default Dashboard;