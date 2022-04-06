import useFriendRequests from './hook';
import FriendRequest from './FriendRequest';
import FetchLoading from '@animations/FetchLoading';

const FriendRequests = ({ data }) => {
  const { isLoading } = useFriendRequests();

  if (isLoading) return (
    <FetchLoading />
  );

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
        <FriendRequest
          key={friendRequest.id}
          friendRequest={friendRequest}
        />
      ))}
    </div>
  );
}

export default FriendRequests;