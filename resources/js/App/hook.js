import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '@reducers/userSlice';
import Cookies from 'js-cookie';

const useApp = () => {
  const token = Cookies.get('token');
  const isAuthenticated = useSelector(state => state.user.user.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) getCurrentUser(token);
  }, [isAuthenticated]);

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
      .then(response => {
        if (!response.ok) return;
        return response.json();
      })
      .then(data => {
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
      })
      .catch(error => clearCookies());
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