import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setFriendRequests } from '@reducers/friendsSlice';


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
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    const friendRequests = await response.json();
    dispatch(setFriendRequests({ friendRequests }));
  }

  return { getFriendRequests };
}

export default useFriendRequests;