import { combineReducers } from "redux";
import { themReducer } from "./reducers";

export default combineReducers({
  them: themReducer,
});
