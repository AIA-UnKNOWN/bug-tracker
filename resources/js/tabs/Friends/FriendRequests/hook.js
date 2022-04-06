import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setFriendRequests } from '@reducers/friendsSlice';


const useFriendRequests = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFriendRequests();
  }, []);

  const getFriendRequests = async () => {
    setIsLoading(true);
    const response = await fetch('/api/friends/requesting', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    const friendRequests = await response.json();
    dispatch(setFriendRequests({ friendRequests }));
    setIsLoading(false);
  }

  return { getFriendRequests, isLoading };
}

export default useFriendRequests;