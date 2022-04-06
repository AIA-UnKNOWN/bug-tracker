import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setFriends } from '@reducers/friendsSlice';


const useFriendsList = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = async () => {
    setIsLoading(true);
    const response = await fetch('/api/friends', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    const friends = await response.json();
    dispatch(setFriends({ friends }));
    setIsLoading(false);
  }

  return { getFriends, isLoading };
}

export default useFriendsList;