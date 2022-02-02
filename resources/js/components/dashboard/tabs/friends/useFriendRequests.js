import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setFriendRequests } from '../../../../reducers/friendsSlice';


const useFriendRequests = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getFriendRequests();
  }, []);

  const getFriendRequests = async () => {
    const response = await fetch('/api/friends/requesting', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    const friendRequests = await response.json();
    dispatch(setFriendRequests({ friendRequests }));
  }

  const acceptFriendRequest = async (friendId) => {
    const response = await fetch(`/api/friends/${friendId}/accept`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      }
    });
    const data = await response.json();
    if (data.message === 'accepted') getFriendRequests();
  }

  return { getFriendRequests, acceptFriendRequest };
}

export default useFriendRequests;