import { REGISTRATION_USER, THEMA} from "./actions";
import { defaultState } from "./initialState";


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

const themReducer = (state = 'a', action) => {
  switch (action.type) {
    case THEMA:
      localStorage.setItem('them', JSON.stringify(action.them));
      return state = action.them;

    default:
      return state;
  }
};



export { userReducer, urlReducer, themReducer };
// export { counterReducer, urlReducer};

