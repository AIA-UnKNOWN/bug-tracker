import User from './navigation/User';
import Navigations from './navigation/Navigations';


const Navigation = () => {
  return (
    <div className="flex flex-col w-[300px] h-screen shadow-md shadow-light-black">
      <User />
      <Navigations />
    </div>
  );
}

export default Navigation;