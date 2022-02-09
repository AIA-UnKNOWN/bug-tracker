import { useState } from 'react';
import { useSelector } from 'react-redux';

import SearchFriend from './friends/SearchFriend';
import FriendsList from './friends/FriendsList';
import FriendRequests from './friends/FriendRequests';


const Friends = () => {
  const friends = useSelector(state => state.friends.friends);
  const friendRequests = useSelector(state => state.friends.friendRequests);
  const tabs = ['all friends', 'friend requests'];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const renderPage = tab => {
    switch (tab) {
      case tabs[1]:
        return (<FriendRequests data={friendRequests} />);
        break;
      default:
        return (<FriendsList data={friends} />);
    }
  }
  
  return (
    <div className="flex flex-col min-h-screen px-2 pb-2">
      <p className="text-[50px] font-medium my-5 text-center">
        Friends
      </p>

      <div className="flex flex-col flex-1">

        <SearchFriend />

        <div className="inline-block w-full border border-y-gray border-x-white my-[40px] py-2 overflow-x-auto">
          <div
            className={`flex justify-center items-center w-full mr-16 cursor-pointer ${currentTab === tabs[0] ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => setCurrentTab(tabs[0])}
          >
            <span className="inline-block font-medium text-[25px]">All friends</span>
            <div className="flex justify-center items-center w-[30px] h-[30px] bg-gray rounded-full ml-3">
              <span className="text-white text-[13px] font-semibold">{friends.length}</span>
            </div>
          </div>
          <div
            className={`flex justify-center items-center w-full cursor-pointer ${currentTab === tabs[1] ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => setCurrentTab(tabs[1])}
          >
            <span className="inline-block font-medium text-[25px]">Friend requests</span>
            <div className="flex justify-center items-center w-[30px] h-[30px] bg-gray rounded-full ml-3">
              <span className="text-white text-[13px] font-semibold">{friendRequests.length}</span>
            </div>
          </div>
        </div>

        {renderPage(currentTab)}

      </div>
    </div>
  );
}

export default Friends;