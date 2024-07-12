import { useSelector } from "react-redux";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import next from "../assets/next.png";
import play from "../assets/play.png";
import prev from "../assets/prev.png";
import repeat from "../assets/repeat.png";
import shuffle from "../assets/shuffle.png";

const Player = () => {
  const currentSong = useSelector((state) => state.currentSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Row className="justify-content-center align-items-center">
            <Col md={4} className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>

              <ProgressBar className="mt-2" />

              {currentSong && (
                <div>
                  <p className="text-white">
                    {" "}
                    {currentSong.title} by {currentSong.artist.name}
                  </p>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
