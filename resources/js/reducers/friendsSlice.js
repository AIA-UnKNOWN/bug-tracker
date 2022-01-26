import { createSlice } from '@reduxjs/toolkit';


const samplePic = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [
      {
        name: 'John Doe',
        type: 'Software Developer',
        profilePicture: samplePic
      },
      {
        name: 'Mark Houston',
        type: 'Frontend Developer',
        profilePicture: samplePic
      },
      {
        name: 'Xavier San Lorenzo',
        type: 'Full Stack Developer',
        profilePicture: samplePic
      }
    ],
    friendRequests: [
      {
        name: 'Harry Potter',
        type: 'Backend Developer',
        profilePicture: samplePic
      }
    ]
  },
  reducers: {
    setFriends: (state, action) => {
      state.friends = action.payload.newFriends;
    },
    setFriendRequests: (state, action) => {
      state.friendRequests = action.payload.newFriendRequests;
    }
  }
});

export const { setFriends, setFriendRequests } = friendsSlice.actions;
export default friendsSlice.reducer;