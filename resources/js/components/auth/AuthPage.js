import { useState } from 'react';
import { useSelector } from 'react-redux';

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