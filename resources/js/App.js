import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authenticate } from './reducers/userSlice';

import AuthPage from './components/auth/AuthPage';


const App = () => {
  const user = useSelector(state => state.user.user);
  const isAuthenticated = user.isAuthenticated;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      dispatch(authenticate({ isAuthenticated: true }));
    }
  });

  if (!isAuthenticated) return (
    <div className="flex justify-center items-center h-screen w-screen">
      <AuthPage />
    </div>
  );

  return (
    <div className="">
      <h1>Welcome back {user.name}!</h1>
    </div>
  );
}

export default App;