import useFriendRequests from './useFriendRequests';


const FriendRequests = ({ data }) => {
  const { acceptFriendRequest, rejectFriendRequest } = useFriendRequests();

  if (data.length === 0) return (
    <div className="flex flex-col flex-1 justify-center items-center bg-light-gray">
      <div>
        <span className="font-medium">You don't have any friend requests</span>
      </div>
    </div>
  );

  return (
    <div>
      {data.map(friendRequest => (

        <div
          key={friendRequest.id}
          className="flex items-center w-[500px] h-[150px] border-l-[5px] border-purple shadow-md mb-4 px-8"
        >
          <div className="flex items-center flex-1">
            <div className="w-[90px] h-[90px] overflow-hidden rounded-full">
              <img
                className="w-full h-full object-cover"
                src={friendRequest.profile_picture ?? ''}
                alt={`${friendRequest.name}'s profile picture`}
              />
            </div>
            <div className="ml-8 grow">
              <div>
                <p className="font-semibold text-[25px]">{friendRequest.name}</p>
                <p className="font-medium text-[15px] -mt-1">Software Developer</p>
              </div>
              <div className="flex justify-end w-full mt-3">
                <button
                  className="flex justify-center items-center w-[100px] h-[30px] rounded-md bg-purple text-white font-medium"
                  onClick={() => acceptFriendRequest(friendRequest.id)}
                >Accept</button>
                <button
                  className="flex justify-center items-center w-[100px] h-[30px] rounded-md bg-white border border-purple text-purple font-medium ml-4"
                  onClick={() => rejectFriendRequest(friendRequest.id)}
                >Reject</button>
              </div>
            </div>
          </div>
        </div>

      ))}
    </div>
  );
}

export default FriendRequests;