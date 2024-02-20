import React from "react";
import react, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

// you can only have one default export in a file
//fetchUrl was pass in the function below as a prop
function Row({ title, fetchUrl, isLargeRow }) {
  const [Movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // A snippet of code which runs based on a specific condition /variable
  useEffect(() => {
    //if [], run once when th row loads, and dont run again.
    //if Array is empty load the condition once but when there is a parameter for example " movie" load when movie changes.
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      setMovies(requests.data.results);
      return requests;
    }

    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2 className="title"> {title}</h2>
      <div className="row__posters">
        {Movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
