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
          src="https://www.youtube.com/embed/xl8zdCY-abw?autoplay=1&mute=1&showinfo=0&rel=0&iv_load_policy=3" //this is for testing
          // src={movie.video} //actual code is suppose to be this
          frameborder="0"
          height="100%"
          width="100%"
        ></iframe>
      </div>
      {/* <video className="video" autoplay progress controls src="" /> */}
    </div>
  );
}
