export const FETCH_SONGS = "FETCH_SONGS";
export const PLAY_SONG = "PLAY_SONG";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const fetchSongs = (artistName, sectionId) => async (dispatch) => {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
    );
    if (response.ok) {
      let { data } = await response.json();
      dispatch({
        type: FETCH_SONGS,
        payload: { sectionId, songs: data.slice(0, 4) },
      });
    } else {
      throw new Error("Error in fetching songs");
    }
  } catch (err) {
    console.log("error", err);
  }
};

export const playSong = (song) => ({
  type: PLAY_SONG,
  payload: song,
});

export const toggleLike = (song) => ({
  type: TOGGLE_LIKE,
  payload: song,
});
