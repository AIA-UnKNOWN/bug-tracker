import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import useProfile from './useProfileHook';


const Profile = () => {
  const { user, defaultPicture, processImageFile } = useProfile();
  
  return (
    <div className="px-2 pb-2">
      <p className="text-[50px] font-medium my-5 text-center">
        Profile
      </p>
      
      <div>
        <div className="flex flex-col py-10 px-5 md:w-[500px] md:mx-auto justify-center items-center border-l-[5px] border-l-purple shadow-lg">
          <div className="relative w-[200px] h-[200px] rounded-[50%] mb-5">
            <img
              className="w-full h-full object-cover rounded-[50%]"
              src={user.profilePicture ?? defaultPicture}
              alt=""
            />
            <div className="absolute right-4 bottom-4">
              <input
                className="hidden"
                type="file"
                name="profile-picture"
                id="profile-picture"
                accept="image/*"
                onChange={e => processImageFile(e)}
              />
              <label
                className="flex justify-center items-center rounded-[50%] bg-purple w-[30px] h-[30px] hover:cursor-pointer"
                htmlFor="profile-picture"
              >
                <FontAwesomeIcon icon={faPen} color="white" />
              </label>
            </div>
          </div>
          <div className="h-fit text-center">
            <div className="text-[17px] my-2 flex flex-col">
              <label className="block w-full font-medium">Firstname:</label>
              <span className="block font-bold">{user.firstname}</span>
            </div>
            <div className="text-[17px] my-2 flex flex-col">
              <label className="block w-full font-medium">Lastname:</label>
              <span className="block font-bold">{user.lastname}</span>
            </div>
            <div className="text-[17px] my-2 flex flex-col">
              <label className="block w-full font-medium">Email:</label>
              <span className="block font-bold">{user.email}</span>
            </div>
            <div className="text-[17px] my-2 flex flex-col">
              <label className="block w-full font-medium">Description:</label>
              <span className="block font-bold">Software Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;