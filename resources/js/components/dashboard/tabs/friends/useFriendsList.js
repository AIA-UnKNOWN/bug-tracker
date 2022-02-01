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

  return { getFriends };
}

export default useFriendsList;