import { THEMA} from "./actions";

const themReducer = (state = 'light', action) => {
  switch (action.type) {
    case THEMA:
      localStorage.setItem('them', JSON.stringify(action.them));
      return state = action.them;

    default:
      return state;
  }
};

export {  themReducer };


