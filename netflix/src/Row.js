import React from "react";
import react, { useState, useEffect } from "react";
import axios from "./axios";

// you can only have one default export in a file
//fetchUrl was pass in the function below as a prop
function Row({ title, fetchUrl }) {
  const [movie, setMovies] = useState([]);
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
  console.log(setMovies);
  return (
    <div>
      <h2> {title}</h2>
      {/*container -> posters*/}
    </div>
  );
}

export default Row;
