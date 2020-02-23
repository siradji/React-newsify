import { SET_LOADING, DISPLAY_NEWS } from '../types';
export default (state, action) => {
  switch (action.type) {
    case DISPLAY_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
