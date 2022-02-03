import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <div className="iframe-container">
        <iframe
          className="video"
          src={
            movie.video +
            "?autoplay=1&loop=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&color=white&autohide=0&controls=0&disablekb=1&mute=1"
          }
          // src="https://www.youtube.com/embed/T6DJcgm3wNY?autoplay=1&loop=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&color=white&autohide=0&controls=0&disablekb=1&mute=1"
          // width="250"
          // height="140"
          frameborder="0"
        ></iframe>
      </div>
      {/* <video className="video" autoplay progress controls src="" /> */}
    </div>
  );
}
