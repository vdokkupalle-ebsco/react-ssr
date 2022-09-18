import { combineReducers } from "redux";
import usersList from "./usersList";

export default combineReducers({
  users: usersList,
});
