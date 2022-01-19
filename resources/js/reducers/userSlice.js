import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: 0,
      name: 'John Doe',
      email: '',
      isAuthenticated: false
    }
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
    authenticate: (state, action) => {
      state.user.isAuthenticated = action.payload.isAuthenticated;
    }
  }
});

export const { updateUser, authenticate } = userSlice.actions;
export default userSlice.reducer;