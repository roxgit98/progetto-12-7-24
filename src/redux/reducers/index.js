import { combineReducers } from "redux";
import songsReducer from "./songsReducer";
import currentSongReducer from "./currentSongReducer";
import likedSongsReducer from "./likedSongsReducer";

const rootReducer = combineReducers({
  songs: songsReducer,
  currentSong: currentSongReducer,
  likedSongs: likedSongsReducer,
});

export default rootReducer;
