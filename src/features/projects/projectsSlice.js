import {createSlice} from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    status: "loading",
    projects: []
  },
  reducers: {
    fetchProjects: state => {
      state.status = "loading";
    },
    fetchProjectsSuccess: (state, {payload: projects}) => {
      state.projects = projects;
      state.status = "success";
    },
    fetchError: state => {
      state.status = "error";
    }
  },
});

export const {
  fetchError,
  fetchProjects,
  fetchProjectsSuccess
} = projectsSlice.actions;

const selectState = state => state.projects;

export const selectProjectsStatus = state => selectState(state).status;
export  const selectProjects = state => selectState(state).projects;

export default projectsSlice.reducer