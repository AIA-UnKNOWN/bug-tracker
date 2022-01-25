import { useSelector, useDispatch } from 'react-redux';


const User = () => {
  const user = useSelector(state => state.user.user);
  const defaultPicture = "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";
  
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