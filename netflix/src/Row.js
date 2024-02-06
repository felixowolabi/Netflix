import React from "react";
import react, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

// you can only have one default export in a file
//fetchUrl was pass in the function below as a prop
function Row({ title, fetchUrl }) {
  const [Movies, setMovies] = useState([]);
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
  console.table(Movies);
  return (
    <div className="row__posters">
      <h2> {title}</h2>
      <div className="row__poster">
        {Movies.map((movie) => (
          <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
        ))}
      </div>
      {/*container -> posters*/}
    </div>
  );
}

export default Row;
