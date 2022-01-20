import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateUser, authenticate } from './reducers/userSlice';

import AuthPage from './components/auth/AuthPage';
import Dashboard from './components/Dashboard';


const App = () => {
  const user = useSelector(state => state.user.user);
  const isAuthenticated = user.isAuthenticated;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      getCurrentUser(token);
    }
  }, []);

  const getCurrentUser = token => {
    fetch('/api/user', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      }
    })
      .then(response => response.json())
      .then(data => {
        dispatch(updateUser({
          user: {
            id: data.user.id,
            email: data.user.email,
            name: data.user.name,
            profilePicture: '',
            isAuthenticated: true
          }
        }));
      })
      .catch(error => console.log(error));
  }

  if (!isAuthenticated) return (
    <div className="flex justify-center items-center h-screen w-screen">
      <AuthPage />
    </div>
  );

  return (
    <Dashboard />
  );
}

export default App;