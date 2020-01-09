import { combineReducers } from "redux";
import { processReducer } from "./process";
import { tokenReducer } from "./token";

export const rootReducer = combineReducers({ tokenReducer, processReducer });
