const Tabs = ({ tabs, currentTab, friendsCount, friendRequestsCount, setCurrentTab }) => {
  return (
    <div className="inline-block lg:flex lg:justify-center w-full border
    border-y-gray border-x-white my-[40px] py-2 overflow-x-hidden"
    >
      <div
        className={`flex justify-center items-center w-full lg:w-fit
        mr-16 cursor-pointer ${currentTab === tabs[0] ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => setCurrentTab(tabs[0])}
      >
        <span className="inline-block font-medium text-[25px]">
          All friends
        </span>
        <div className="flex justify-center items-center w-[30px] h-[30px] bg-gray
          rounded-full ml-3"
        >
          <span className="text-white text-[13px] font-semibold">
            {friendsCount}
          </span>
        </div>
      </div>
      <div
        className={`flex justify-center items-center w-full lg:w-fit cursor-pointer
        ${currentTab === tabs[1] ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => setCurrentTab(tabs[1])}
      >
        <span className="inline-block font-medium text-[25px]">
          Friend requests
        </span>
        <div className="flex justify-center items-center w-[30px] h-[30px] bg-gray
          rounded-full ml-3"
        >
          <span className="text-white text-[13px] font-semibold">
            {friendRequestsCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tabs;