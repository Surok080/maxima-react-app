import { combineReducers } from "redux";
import { userReducer, urlReducer } from "./reducers";


export default combineReducers({
  user: userReducer,
  urlArray: urlReducer,
});
// export default combineReducers({
//   count: counterReducer,
//   
// });
