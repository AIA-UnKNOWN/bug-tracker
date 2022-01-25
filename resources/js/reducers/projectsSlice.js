import { createSlice } from '@reduxjs/toolkit';


const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [
      {
        id: 1,
        name: 'Chat App',
        issues: 5
      },
      {
        id: 2,
        name: 'Calculator',
        issues: 5
      },
      {
        id: 3,
        name: 'Ecommerce',
        issues: 5
      },
      {
        id: 4,
        name: 'Expense Tracker',
        issues: 5
      },
      {
        id: 5,
        name: 'Chart App',
        issues: 5
      },
      {
        id: 6,
        name: 'Notepad',
        issues: 5
      },
      {
        id: 7,
        name: 'User tracker',
        issues: 5
      },
    ]
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload.projects;
    }
  }
});

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;