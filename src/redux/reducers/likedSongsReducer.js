// reducers/likedSongsReducer.js
import { TOGGLE_LIKE } from "../actions";

const likedSongsReducer = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_LIKE:
      return state.includes(action.payload.id)
        ? state.filter((id) => id !== action.payload.id)
        : [...state, action.payload.id];
    default:
      return state;
  }
};

export default likedSongsReducer;
