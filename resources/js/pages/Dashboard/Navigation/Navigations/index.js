import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faProjectDiagram, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import useApp from '@App/hook';
import { updateUser } from '@reducers/userSlice';
import { switchTab } from '@reducers/tabSlice';


const Navigations = ({ onClickTab }) => {
  const { clearCookies } = useApp();
  const dispatch = useDispatch();

  const links = [
    {
      icon: faUser,
      name: 'Profile',
      onSwitch: () => {
        dispatch(switchTab({ currentTab: 'profile' }));
        onClickTab();
      }
    },
    {
      icon: faUsers,
      name: 'Friends',
      onSwitch: () => {
        dispatch(switchTab({ currentTab: 'friends' }));
        onClickTab();
      }
    },
    {
      icon: faProjectDiagram,
      name: 'Projects',
      onSwitch: () => {
        dispatch(switchTab({ currentTab: 'projects' }));
        onClickTab();
      }
    },
    {
      icon: faSignOutAlt,
      name: 'Logout',
      onSwitch: () => {
        if (confirm('Are you sure you want to logout?'))
          logout(Cookies.get('token'));
      }
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
          clearCookies();
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
      <nav className="py-[20px] px-4">
        {links.map(link => (
          <div
            className="flex items-center w-full h-[50px] mb-[10px] hover:bg-light-gray rounded-lg cursor-pointer"
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