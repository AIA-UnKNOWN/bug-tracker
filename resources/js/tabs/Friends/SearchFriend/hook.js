import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setFriends } from '@reducers/friendsSlice';


const useSearchFriend = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState('');

  const search = async () => {
    const response = await fetch(`/api/friends/search?developer=${searchKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    const results = await response.json();
    dispatch(setFriends({ friends: results }));
  }
  
  return { searchKey, setSearchKey, search };
}

export default useSearchFriend;