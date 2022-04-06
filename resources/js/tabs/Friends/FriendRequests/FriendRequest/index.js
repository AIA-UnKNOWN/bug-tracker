import useFriendRequest from './hook';

const FriendRequest = ({ friendRequest }) => {
  const { defaultPicture, acceptFriendRequest, rejectFriendRequest } = useFriendRequest();

  return (
    <div
      key={friendRequest.id}
      className="flex items-center w-full md:w-[500px] h-[150px] border-l-[5px] border-purple shadow-md mb-4 md:mx-auto px-8"
    >
      <div className="flex items-center flex-1">
        <div className="w-[90px] h-[90px] overflow-hidden rounded-full">
          <img
            className="w-full h-full object-cover"
            src={friendRequest.profile_picture ?? defaultPicture}
            alt={`${friendRequest.name}'s profile picture`}
          />
        </div>
        <div className="ml-4 grow">
          <div>
            <p className="font-semibold text-[20px] leading-[23px]">{friendRequest.name}</p>
            <p className="font-medium text-[13px] mt-1">Software Developer</p>
          </div>
          <div className="flex justify-end w-full mt-3">
            <button
              className="flex justify-center items-center text-[13px] w-[80px] h-[30px] rounded-md bg-purple text-white font-medium"
              onClick={() => acceptFriendRequest(friendRequest.id)}
            >Accept</button>
            <button
              className="flex justify-center items-center text-[13px] w-[80px] h-[30px] rounded-md bg-white border border-purple text-purple font-medium ml-2"
              onClick={() => rejectFriendRequest(friendRequest.id)}
            >Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;