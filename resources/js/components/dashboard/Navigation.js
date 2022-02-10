import User from './navigation/User';
import Navigations from './navigation/Navigations';


const Navigation = ({ isSidebarOpen, onClickXMark }) => {
  return (
    <div className={`flex flex-col fixed top-0 left-0 z-10 bg-white w-full h-screen ${isSidebarOpen ? '' : 'hidden'}`}>
      <div
        className="rounded-full rotate-45 absolute top-3 left-3 w-[30px] h-[30px]"
        onClick={() => onClickXMark()}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-[20px] h-[3px] bg-light-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[3px] bg-light-black"></div>
      </div>
      <User />
      <Navigations
        onClickTab={() => onClickXMark()}
      />
    </div>
  );
}

export default Navigation;