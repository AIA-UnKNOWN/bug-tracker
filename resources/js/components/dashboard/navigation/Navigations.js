import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faProjectDiagram, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { updateUser } from '@reducers/userSlice';
import { switchTab } from '@reducers/tabSlice';


const Navigations = () => {
  const dispatch = useDispatch();

  const links = [
    {
      icon: faUser,
      name: 'Profile',
      onSwitch: () => dispatch(switchTab({ currentTab: 'profile' }))
    },
    {
      icon: faUsers,
      name: 'Friends',
      onSwitch: () => dispatch(switchTab({ currentTab: 'friends' }))
    },
    {
      icon: faProjectDiagram,
      name: 'Projects',
      onSwitch: () => dispatch(switchTab({ currentTab: 'projects' }))
    },
    {
      icon: faSignOutAlt,
      name: 'Logout',
      onSwitch: () => logout(sessionStorage.getItem('token'))
    }
  ];

  const logout = token => {
    fetch('/api/user/logout', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'logged out') {
          sessionStorage.clear();
          dispatch(updateUser({
            user: {
              id: 0,
              name: '',
              email: '',
              profilePicture: null,
              isAuthenticated: false
            }
          }));
        }
      })
      .catch(error => console.log(error));
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
            <div className="flex justify-center items-center w-[20px] h-207px] mx-5 text-black">
              <FontAwesomeIcon icon={link.icon} />
            </div>
            <span className="text-[17px] font-medium">{link.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Navigations;