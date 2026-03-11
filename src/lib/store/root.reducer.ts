import { combineReducers } from "@reduxjs/toolkit";
import projectsFilterReducer from "./projects-filter/projectsFilter.slice";

export const rootReducer = combineReducers({
  projectsFilter: projectsFilterReducer,
});
