import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setFriends } from '../../../../reducers/friendsSlice';


const useFriendsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = async () => {
    const response = await fetch('/api/friends', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
    const friends = await response.json();
    dispatch(setFriends({ friends }));
  }

  const addFriend = async (userId) => {
    const response = await fetch('/api/friends/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      },
      body: JSON.stringify({ userId })
    });
    const data = await response.json();
    if (data.message === 'added') return;
  }

  return { getFriends, addFriend };
}

export default useFriendsList;