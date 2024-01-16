import React, { useEffect } from "react";
import React, { useState, useEffect } from "react";
import axios from "../axios";

function Row({ title }) {
  const [movie, setMovies] = useState([]);
  // A snippet of code which runs based on a specific condition
  useEffect(() => {}, [movie]);
  //if [], run once when th row loads, and dont run again.
  //if Array is empty load the condition once but when there is a parameter for example " movie" load when movie changes.
  return (
    <div>
      <h2> {title}</h2>
      {/*container -> posters*/}
    </div>
  );
}

export default Row;
