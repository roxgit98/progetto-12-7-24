import { useDispatch } from "react-redux";
import { fetchSongs } from "../redux/actions";
import MusicSection from "./MusicSection";
import { useEffect } from "react";

const MainSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs("queen", "rock"));
    dispatch(fetchSongs("katyperry", "pop"));
    dispatch(fetchSongs("eminem", "hiphop"));
  }, [dispatch]);

  return (
    <div>
      <div className="d-none d-md-flex justify-content-between mainLinks m-0">
        <a href="#">Trending</a>
        <a href="#">Podcast</a>
        <a href="#">Moods and genres</a>
        <a href="#">New Releases</a>
        <a href="#">Discover</a>
      </div>
      <MusicSection fon title="Rock Classics" sectionId="rock" />
      <MusicSection title="Pop Culture" sectionId="pop" />
      <MusicSection title="Hiphop" sectionId="hiphop" />
    </div>
  );
};

export default MainSection;
