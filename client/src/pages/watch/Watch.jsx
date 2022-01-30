import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <div className="iframe-container">
        <iframe
          src="https://www.youtube.com/embed/xl8zdCY-abw?autoplay=1&mute=1&showinfo=0&rel=0&iv_load_policy=3"
          frameborder="0" 
          height="100%" 
          width="100%"
        ></iframe>
      </div>
      {/* <video className="video" autoplay progress controls src="" /> */}
    </div>
  );
}
