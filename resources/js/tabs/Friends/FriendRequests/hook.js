import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setFriendRequests } from '@reducers/friendsSlice';


const useFriendRequests = () => {
  const dispatch = useDispatch();
  const defaultPicture = "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";

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

  const acceptFriendRequest = async (friendId) => {
    const response = await fetch(`/api/friends/${friendId}/accept`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      }
    });
    const data = await response.json();
    if (data.message === 'accepted') getFriendRequests();
  }

  const rejectFriendRequest = async (friendId) => {
    const response = await fetch(`/api/friends/${friendId}/reject`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      }
    });
    const data = await response.json();
    if (data.message === 'rejected') getFriendRequests();
  }

  return { defaultPicture, getFriendRequests, acceptFriendRequest, rejectFriendRequest };
}

export default useFriendRequests;