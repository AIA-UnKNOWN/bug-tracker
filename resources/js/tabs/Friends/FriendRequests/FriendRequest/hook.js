import { useState } from 'react';
import Cookies from 'js-cookie';
import useFriendRequests from '../hook';

const useFriendRequest = () => {
  const defaultPicture = "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";
  const { getFriendRequests } = useFriendRequests();
  const [acceptButtonText, setAcceptButtonText] = useState('Accept');
  const [rejectButtonText, setRejectButtonText] = useState('Reject');

  const acceptFriendRequest = async (friendId) => {
    setAcceptButtonText('Accepting...');
    const response = await fetch(`/api/friends/${friendId}/accept`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      }
    });
    const data = await response.json();
    if (data.message !== 'accepted') return;
    getFriendRequests();
    setAcceptButtonText('Accepted!');
  }

  const rejectFriendRequest = async (friendId) => {
    setRejectButtonText('Rejecting...');
    const response = await fetch(`/api/friends/${friendId}/reject`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      }
    });
    const data = await response.json();
    if (data.message !== 'rejected') return;
    getFriendRequests();
    setRejectButtonText('Rejected!');
  }

  return { defaultPicture, acceptButtonText, rejectButtonText, acceptFriendRequest, rejectFriendRequest }
}

export default useFriendRequest;