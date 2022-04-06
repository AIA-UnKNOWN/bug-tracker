import { useState } from 'react';
import Cookies from 'js-cookie';

const useFriend = () => {
  const defaultPicture = "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";
  const [addButtonText, setAddButtonText] = useState('Add');

  const addFriend = async (userId) => {
    setAddButtonText('Adding...');
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
    if (data.message === 'added')
      setAddButtonText('Added!');
  }

  return { defaultPicture, addFriend, addButtonText };
}

export default useFriend;