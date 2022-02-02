import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./listitem.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Listitem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  // const embedString = (string) => {
  //   const embed = "https://www.youtube.com/embed/";
  //   const code = string.split("/")[3];
  //   return embed + code;
  // };
  // console.log(item);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjc0ZWE2MmYyOGM4ODY2N2ZmYTVhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzYzMDQ1MywiZXhwIjoxNjQ0MDYyNDUzfQ.kd-14RQjmQk4ok0Kn9PtYgmMvdw3CWzJCLLgVFCzbEA",
          },
        });
        setMovie(res.data);
      } catch (error) {
        // console.log(error);
      }
    };
    getMovie();
  }, [item]);
  // const trailer = [];
  // trailer = embedString(movie.trailer);
  // console.log(typeof movie);
  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <div>
              {/* <video src={trailer} autoPlay={true} loop /> */}

              <iframe
                className="video"
                // src={
                //   trailer+
                //   "?autoplay=1&loop=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&color=white&autohide=0&controls=0&disablekb=1&mute=1"
                // }
                src="https://www.youtube.com/embed/T6DJcgm3wNY?autoplay=1&loop=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&color=white&autohide=0&controls=0&disablekb=1&mute=1"
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
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">+{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
