import { createSlice } from '@reduxjs/toolkit';


const issuesSlice = createSlice({
  name: 'issues',
  initialState: {
    issues: []
  },
  reducers: {
    setIssues: (state, action) => {
      state.issues = action.payload.issues;
    }
  }
});

export const { setIssues } = issuesSlice.actions;
export default issuesSlice.reducer;