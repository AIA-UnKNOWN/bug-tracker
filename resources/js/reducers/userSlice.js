import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: 0,
      name: '',
      email: '',
      isAuthenticated: false
    }
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload.user;
    }
  }
});

export const { updateUser, authenticate } = userSlice.actions;
export default userSlice.reducer;