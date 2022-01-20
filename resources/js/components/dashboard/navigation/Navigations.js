import { useDispatch } from 'react-redux';
import { updateUser } from '../../../reducers/userSlice';


const Navigations = () => {
  const dispatch = useDispatch();

  const links = [
    {
      icon: 'fas fa-user',
      name: 'Profile',
      onSwitch: () => console.log('Profile')
    },
    {
      icon: 'fas fa-users',
      name: 'Friends',
      onSwitch: () => console.log('Friends')
    },
    {
      icon: 'fas fa-project-diagram',
      name: 'Projects',
      onSwitch: () => console.log('Projects')
    },
    {
      icon: 'fas fa-sign-out-alt',
      name: 'Logout',
      onSwitch: () => logout()
    }
  ];

  const logout = () => {
    sessionStorage.removeItem('token');
    dispatch(updateUser({
      user: {
        id: 0,
        name: '',
        email: '',
        profilePicture: '',
        isAuthenticated: false
      }
    }));
  }

  return (
    <div className="grow">
      <nav className="py-[20px]">
        {links.map(link => (
          <div
            className="flex items-center w-[260px] h-[50px] m-auto mb-[10px] hover:bg-light-gray rounded-lg cursor-pointer"
            key={link.name}
            onClick={link.onSwitch}
          >
            <div className="flex justify-center items-center w-[20px] h-207px] mx-5">
              <i className={link.icon}></i>
            </div>
            <span className="text-[17px] font-medium">{link.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Navigations;