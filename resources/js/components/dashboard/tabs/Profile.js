import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import useProfile from './useProfileHook';


const Profile = () => {
  const { user, defaultPicture, processImageFile } = useProfile();
  
  return (
    <div className="px-[50px] py-[30px]">
      <p className="text-[50px] font-medium mb-10">
        Profile
      </p>
      
      <div>
        <div className="flex items-center h-[335px] max-w-[900px] border-l-[5px] border-l-purple shadow-lg">
          <div className="relative w-[200px] h-[200px] rounded-[50%] ml-14">
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
          <div className="h-fit ml-14">
            <div className="text-[17px] my-2">
              <label className="inline-block w-[200px] font-medium">Firstname:</label>
              <span className="inline-block font-bold">{user.firstname}</span>
            </div>
            <div className="text-[17px] my-2">
              <label className="inline-block w-[200px] font-medium">Lastname:</label>
              <span className="inline-block font-bold">{user.lastname}</span>
            </div>
            <div className="text-[17px] my-2">
              <label className="inline-block w-[200px] font-medium">Email:</label>
              <span className="inline-block font-bold">{user.email}</span>
            </div>
            <div className="text-[17px] my-2">
              <label className="inline-block w-[200px] font-medium">Description:</label>
              <span className="inline-block font-bold">Software Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;