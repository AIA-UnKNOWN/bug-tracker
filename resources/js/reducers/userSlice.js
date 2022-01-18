import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    id: 0,
    name: 'John Doe',
    email: '',
    isAuthenticated: false
  },
  reducers: {
    updateUser: (state, action) => {
      state = action.payload;
    }
  }
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;