import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
export default function Featured({ type }) {
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
      <img
        src="https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F6d2602825f7eb06670e8fcf0e77dd015.png"
        alt=""
      />
      <div className="info">
        <img
          src="https://www.pngplay.com/wp-content/uploads/12/Matrix-Movie-PNG-Photos.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          possimus, odit quasi saepeiste dignissimos nam quo ut fugiat rerum
          animi id exercita tionem porro numquam voluptatem consequuntur placeat
          pariatur ipsa? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illum possimus, odit quasi saepeiste dignissimos nam quo ut
          fugiat rerum animi id exercita tionem porro numquam voluptatem
          consequuntur placeat pariatur ipsa? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum possimus, odit quasi saepeiste
          dignissimos nam quo ut fugiat rerum animi id exercita tionem porro
          numquam voluptatem consequuntur placeat pariatur ipsa?
        </span>
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
