import { createSlice } from '@reduxjs/toolkit';


const samplePic = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [],
    friendRequests: [
      {
        id: 4,
        name: 'Harry Potter',
        type: 'Backend Developer',
        profilePicture: samplePic
      }
    ]
  },
  reducers: {
    setFriends: (state, action) => {
      state.friends = action.payload.friends;
    },
    setFriendRequests: (state, action) => {
      state.friendRequests = action.payload.friendRequests;
    }
  }
});

export const { setFriends, setFriendRequests } = friendsSlice.actions;
export default friendsSlice.reducer;