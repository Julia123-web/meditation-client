import { combineReducers } from "redux";
import users from "./users";
import videos from "./videos";
import quotes from "./quotes";

export default combineReducers({ users, videos, quotes });
