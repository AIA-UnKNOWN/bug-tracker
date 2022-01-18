import { useSelector } from 'react-redux';

import AuthPage from './components/auth/AuthPage';


const App = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  if (!isAuthenticated) return (
    <div className="flex justify-center items-center h-screen w-screen">
      <AuthPage />
    </div>
  );

  return (
    <div className="">
      
    </div>
  );
}

export default App;