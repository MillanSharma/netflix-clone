import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
export default function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjc0ZWE2MmYyOGM4ODY2N2ZmYTVhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzYzMDQ1MywiZXhwIjoxNjQ0MDYyNDUzfQ.kd-14RQjmQk4ok0Kn9PtYgmMvdw3CWzJCLLgVFCzbEA",
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "TV Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="romantic">Romantic</option>
            <option value="thriller">Thriller</option>
            <option value="historical">Historical</option>
            <option value="sci-fi">Science-fi</option>
            <option value="dramas">Dramas</option>
            <option value="documentary">Documentary</option>
            <option value="western">Western</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
