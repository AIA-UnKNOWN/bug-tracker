import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '@reducers/userSlice';

const useApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) getCurrentUser(token);
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
      .catch(error => sessionStorage.clear());
  }

  return { getCurrentUser };
}

export default useApp;