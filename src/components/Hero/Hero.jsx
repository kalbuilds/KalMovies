import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Hero.css";

function Hero() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ],
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ... " : str;
  }
  return (
    <div
      className="hero"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero_contents">
        <h1 className="hero_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="hero_buttons">
          <button className="hero_button play">Play</button>
          <button className="hero_button">My List</button>
        </div>
        <h1 className="hero_description">{truncate(movie?.overview, 160)}
        </h1>
      </div>

      <div className="hero_fadeBottom" />
    </div>
  );
}

export default Hero;
