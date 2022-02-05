import useFriendsList from './useFriendsList';


const FriendsList = ({ data }) => {
  useFriendsList();

  if (data.length === 0) return (
    <div className="flex flex-col flex-1 justify-center items-center bg-light-gray">
      <div>
        <span className="font-medium">You don't have any friends</span>
      </div>
    </div>
  );

  return (
    <div>
      {data.map(friend => (

        <div
          key={friend.id}
          className="flex items-center w-[500px] h-[150px] border-l-[5px] border-purple shadow-md mb-4 px-8"
        >
          <div className="flex items-center w-full">
            <div className="w-[90px] h-[90px] overflow-hidden rounded-full">
              <img
                className="w-full h-full object-cover"
                src={friend.profile_picture ?? ''}
                alt={`${friend.name}'s profile picture`}
              />
            </div>
            <div className="ml-8 w-full">
              <div>
                <p className="font-semibold text-[25px]">{friend.name}</p>
                <p className="font-medium text-[15px]">Software Developer</p>
                
                {friend.is_friend !== undefined && !!friend.is_friend === false && (
                  <div className="flex justify-end">
                    <button
                      className="w-[100px] h-[30px] bg-purple text-white text-[15px] font-medium rounded-md"
                      onClick={() => console.log(friend.id)}
                    >Add</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      ))}
    </div>
  );
}

export default FriendsList;