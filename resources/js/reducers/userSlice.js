import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
      profilePicture: null,
      isAuthenticated: false
    }
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
    updateProfilePicture: (state, action) => {
      state.user.profilePicture = action.payload.profilePicture;
    }
  }
});

export const { updateUser, updateProfilePicture } = userSlice.actions;
export default userSlice.reducer;