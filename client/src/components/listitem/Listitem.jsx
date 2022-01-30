import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./listitem.scss";
import { useState } from "react";

export default function Listitem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  // const trailer =
  //   "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://www.nme.com/wp-content/uploads/2017/09/narcos_press_1000-696x456.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <div>
            {/* <video src={trailer} autoPlay={true} loop /> */}

            <iframe
              className="video"
              src="https://www.youtube-nocookie.com/embed/xl8zdCY-abw?autoplay=1&loop=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&color=white&autohide=0&controls=0&disablekb=1&mute=1"
              // width="250"
              // height="140"
              frameborder="0"
            ></iframe>
          </div>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+18</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit ametsto. Quis, rem. Sint laboriosam
              reprehenderit quo
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
