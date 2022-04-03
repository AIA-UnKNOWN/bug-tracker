import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setFriends } from '@reducers/friendsSlice';


const useFriendsList = () => {
  const dispatch = useDispatch();
  const defaultPicture = "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = async () => {
    const response = await fetch('/api/friends', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
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
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      },
      body: JSON.stringify({ userId })
    });
    const data = await response.json();
    if (data.message === 'added') return;
  }

  return { defaultPicture, getFriends, addFriend };
}

export default useFriendsList;