import { createSlice } from '@reduxjs/toolkit';


const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: []
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload.projects;
    }
  }
});

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;