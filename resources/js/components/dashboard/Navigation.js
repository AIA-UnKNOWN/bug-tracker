import User from './navigation/User';
import Navigations from './navigation/Navigations';


const Navigation = () => {
  return (
    <div className="flex flex-col absolute top-0 left-0 z-10 bg-white w-full h-screen hidden">
      <User />
      <Navigations />
    </div>
  );
}

export default Navigation;