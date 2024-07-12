// reducers/currentSongReducer.js
import { PLAY_SONG } from "../actions";

const currentSongReducer = (state = null, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return action.payload;
    default:
      return state;
  }
};

export default currentSongReducer;
