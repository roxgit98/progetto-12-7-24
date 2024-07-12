// components/MusicSection.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { playSong, toggleLike } from "../redux/actions";
import { Row, Col, Button } from "react-bootstrap";

const MusicSection = ({ title, sectionId }) => {
  const songs = useSelector((state) => state.songs[sectionId]);
  const likedSongs = useSelector((state) => state.likedSongs);
  const dispatch = useDispatch();

  const handlePlay = (song) => {
    dispatch(playSong(song));
  };

  const handleLike = (song) => {
    dispatch(toggleLike(song));
  };

  return (
    <div>
      <h2 className="text-white">{title}</h2>
      <Row>
        {songs &&
          songs.map((song) => (
            <Col key={song.id} className="text-center">
              <img className="img-fluid" src={song.album.cover} alt="album" />
              <p className="text-white">
                Track: "{song.title}"<br />
                Artist: {song.artist.name}
              </p>
              <Button onClick={() => handlePlay(song)}>Play</Button>
              <Button variant="success" onClick={() => handleLike(song)}>
                {likedSongs.includes(song.id) ? "Unlike" : "Like"}
              </Button>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MusicSection;
