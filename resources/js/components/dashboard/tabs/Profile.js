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
        <div className="flex flex-col lg:flex-row py-10 px-5 md:w-[500px] lg:w-[900px] md:mx-auto justify-center lg:justify-start items-center border-l-[5px] border-l-purple shadow-lg">
          <div className="relative w-[200px] h-[200px] rounded-[50%] mb-5 lg:mx-14">
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
          <div className="h-fit text-center lg:text-left">
            <div className="text-[17px] my-2 flex flex-col lg:flex-row">
              <label className="block lg:inline-block w-full lg:w-[200px] font-medium">Firstname:</label>
              <span className="block font-bold">{user.firstname}</span>
            </div>
            <div className="text-[17px] my-2 flex flex-col lg:flex-row">
              <label className="block lg:inline-block w-full lg:w-[200px] font-medium">Lastname:</label>
              <span className="block font-bold">{user.lastname}</span>
            </div>
            <div className="text-[17px] my-2 flex flex-col lg:flex-row">
              <label className="block lg:inline-block w-full lg:w-[200px] font-medium">Email:</label>
              <span className="block font-bold">{user.email}</span>
            </div>
            <div className="text-[17px] my-2 flex flex-col lg:flex-row">
              <label className="block lg:inline-block w-full lg:w-[200px] font-medium">Description:</label>
              <span className="block font-bold">Software Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;