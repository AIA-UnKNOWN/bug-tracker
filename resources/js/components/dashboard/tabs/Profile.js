import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import { updateProfilePicture } from '../../../reducers/userSlice';


const Profile = () => {
  const user = useSelector(state => state.user.user);
  const defaultPicture = "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";

  return (
    <div className="px-[50px] py-[30px]">
      <p className="text-[50px] font-medium  mb-10">
        Profile
      </p>
      
      <div>
        <div className="flex items-center h-[335px] max-w-[900px] border-l-[5px] border-l-purple shadow-lg">
          <div className="w-[200px] h-[200px] rounded-[50%] overflow-hidden ml-14">
            <img
              className="w-full h-full object-cover"
              src={user.profilePicture !== '' ? user.profilePicture : defaultPicture}
              alt=""
            />
            <div>
              <input type="file" />
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
          <div className="h-fit ml-14">
            <div className="text-[17px] my-2">
              <label className="inline-block w-[200px] font-medium">Firstname:</label>
              <span className="inline-block font-bold">{user.name}</span>
            </div>
            <div className="text-[17px] my-2">
              <label className="inline-block w-[200px] font-medium">Lastname:</label>
              <span className="inline-block font-bold">{user.name}</span>
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