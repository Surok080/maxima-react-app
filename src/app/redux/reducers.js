import { REGISTRATION_USER} from "./actions";
import { defaultState } from "./initialState";
import { defaultState2 } from "./initialState";

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTRATION_USER:
      return Object.assign({},state, {
        nameUser: action.name,
        emailUser: action.email,
        passwordUser: action.password,
      });

    // case OFFSET:
    //   return Object.assign({},state, {
    //     offset: action.offset
    //   });

    default:
      return state;
  }
};

const urlReducer = (state = 123213, action) => {
  switch (action.type) {
    case URL:
      return state = action.urlArray;

    default:
      return state;
  }
};


export { userReducer, urlReducer };
// export { counterReducer, urlReducer};

