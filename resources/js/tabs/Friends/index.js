import useFriends from './hook';
import SearchFriend from './SearchFriend';

const Friends = () => {
  const { friends, friendRequests, tabs, currentTab, setCurrentTab, renderPage } = useFriends();
  
  return (
    <div className="flex flex-col min-h-screen px-2 pb-2">
      <p className="text-[50px] font-medium my-5 text-center">
        Friends
      </p>

      <div className="flex flex-col flex-1">

        <SearchFriend />

        <div className="inline-block lg:flex lg:justify-center w-full border border-y-gray border-x-white my-[40px] py-2 overflow-x-auto">
          <div
            className={`flex justify-center items-center w-full lg:w-fit mr-16 cursor-pointer ${currentTab === tabs[0] ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => setCurrentTab(tabs[0])}
          >
            <span className="inline-block font-medium text-[25px]">All friends</span>
            <div className="flex justify-center items-center w-[30px] h-[30px] bg-gray rounded-full ml-3">
              <span className="text-white text-[13px] font-semibold">{friends.length}</span>
            </div>
          </div>
          <div
            className={`flex justify-center items-center w-full lg:w-fit cursor-pointer ${currentTab === tabs[1] ? 'opacity-100' : 'opacity-50'}`}
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