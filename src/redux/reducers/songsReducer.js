import { FETCH_SONGS } from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hiphop: [],
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        [action.payload.sectionId]: action.payload.songs,
      };
    default:
      return state;
  }
};

export default songsReducer;
