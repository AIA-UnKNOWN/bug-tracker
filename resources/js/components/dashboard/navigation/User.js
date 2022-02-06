import useUser from './useUserHook';


const User = () => {
  const { user, defaultPicture } = useUser();
  
  return (
    <div className="flex justify-center items-center w-full h-[300px] border-b border-light-black">
      <div className="mt-5">
        <div className="mx-auto w-[150px] h-[150px] overflow-hidden rounded-[50%]">
          <img
            className="w-full h-full object-cover"
            src={user.profilePicture ?? defaultPicture}
            alt="Profile Picture"
          />
        </div>
        <span className="block text-[20px] text-center mt-8 font-medium">{user.firstname} {user.lastname}</span>
      </div>
    </div>
  );
}

export default User;