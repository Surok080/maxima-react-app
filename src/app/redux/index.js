import { combineReducers } from "redux";
import { userReducer, urlReducer, themReducer } from "./reducers";


export default combineReducers({
  user: userReducer,
  urlArray: urlReducer,
  them: themReducer,
});
// export default combineReducers({
//   count: counterReducer,
//   
// });
