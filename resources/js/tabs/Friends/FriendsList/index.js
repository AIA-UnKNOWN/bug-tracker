import useFriendsList from './hook';
import Friend from './Friend';

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
        <Friend
          key={friend.id}
          friend={friend}
        />
      ))}
    </div>
  );
}

export default FriendsList;