import { useSelector, useDispatch } from 'react-redux';
import { updateProfilePicture } from '@reducers/userSlice';


const useProfile = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const defaultPicture = "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";
  
  const processImageFile = e => {
    const fileInput = e.target;
    const reader = new FileReader();

    reader.readAsDataURL(fileInput.files[0]);
    reader.onload = () => {
      const dataURL = reader.result;
      updateProfileImage(dataURL);
    }
  }

  const updateProfileImage = imageData => {
    fetch('/api/user/profile-picture/update', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf_token"]').content
      },
      body: JSON.stringify({
        userId: user.id,
        profilePicture: imageData
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        dispatch(updateProfilePicture({ profilePicture: imageData }));
      })
      .catch(error => console.log(error));
  }

  return { user, defaultPicture, processImageFile, updateProfileImage };
}

export default useProfile;