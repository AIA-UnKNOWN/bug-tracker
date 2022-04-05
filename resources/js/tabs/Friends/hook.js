import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFriendRequests from './FriendRequests/hook';
import FriendsList from './FriendsList';
import FriendRequests from './FriendRequests';

const useFriends = () => {
  const { getFriendRequests } = useFriendRequests();
  const friends = useSelector(state => state.friends.friends);
  const friendRequests = useSelector(state => state.friends.friendRequests);
  const tabs = ['all friends', 'friend requests'];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  
  useEffect(() => {
    getFriendRequests();
  }, []);

  const renderPage = tab => {
    switch (tab) {
      case tabs[1]:
        return (<FriendRequests data={friendRequests} />);
      default:
        return (<FriendsList data={friends} />);
    }
  }

  return { friends, friendRequests, tabs, currentTab, setCurrentTab, renderPage }
}

export default useFriends;