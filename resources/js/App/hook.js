import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { updateUser } from '@reducers/userSlice';

const useApp = () => {
  const token = Cookies.get('token');
  const isAuthenticated = useSelector(state => state.user.user.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) getCurrentUser(token);
  }, [isAuthenticated]);

  const getCurrentUser = async token => {
    const response = await fetch('/api/user', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      }
    });
    if (!response.ok) return clearCookies();
    const data = await response.json();
    if (!data) return;
    dispatch(updateUser({
      user: {
        id: data.user.id,
        email: data.user.email,
        firstname: data.user.first_name,
        lastname: data.user.last_name,
        profilePicture: data.user.profile_picture,
        isAuthenticated: true
      }
    }));
  }

  const clearCookies = () => {
    const cookies = Object.keys(Cookies.get());
    cookies.forEach(cookie => {
      Cookies.remove(cookie);
    });
  }

  return { getCurrentUser, clearCookies };
}

export default useApp;