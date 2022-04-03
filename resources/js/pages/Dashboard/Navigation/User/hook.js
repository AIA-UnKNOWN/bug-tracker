import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { updateProfilePicture } from '@reducers/userSlice';


const useUser = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const defaultPicture = "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";

  useEffect(() => {
    getProfilePicture();
  }, []);

  const getProfilePicture = async () => {
    const response = await fetch(`/api/user/${user.id}/profile-picture`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    });
    const data = await response.json();
    dispatch(updateProfilePicture({ profilePicture: data.profile_picture }));
  }

  return { user, defaultPicture, getProfilePicture };
}

export default useUser;