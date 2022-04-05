import useFriends from './hook';
import SearchFriend from './SearchFriend';
import Tabs from './Tabs';

const Friends = () => {
  const { friends, friendRequests, tabs, currentTab, setCurrentTab, renderPage } = useFriends();
  
  return (
    <div className="flex flex-col min-h-screen px-2 pb-2">
      <p className="text-[50px] font-medium my-5 text-center">
        Friends
      </p>
      <div className="flex flex-col flex-1">
        <SearchFriend />
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          friendsCount={friends.length}
          friendRequestsCount={friendRequests.length}
          setCurrentTab={setCurrentTab}
        />
        
        {renderPage(currentTab)}

      </div>
    </div>
  );
}

export default Friends;