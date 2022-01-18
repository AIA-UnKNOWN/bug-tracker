import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../reducers/userSlice';

import Register from './Register';
import Login from './Login';


const AuthPage = () => {
  const user = useSelector(state => state.user);
  const [currentPage, setCurrentPage] = useState('login');

  if (currentPage === 'register') return (
    <Register
      onSwtichLoginTab={() => setCurrentPage('login')}
    />
  );

  return (
    <Login
      onSwitchRegisterTab={() => setCurrentPage('register')}
    />
  );
}

export default AuthPage;