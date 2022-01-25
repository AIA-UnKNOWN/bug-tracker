import { createSlice } from '@reduxjs/toolkit';


const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    currentTab: 'projects'
  },
  reducers: {
    switchTab: (state, action) => {
      state.currentTab = action.payload.currentTab;
    }
  }
});

export const { switchTab } = tabSlice.actions;
export default tabSlice.reducer;