import axios from "axios";

// base url to make requests to the movie database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmNlMzYwYWY0ODI0ZDg4MmM3ZjkyYWUzODBjNWQ2MCIsInN1YiI6IjY1MjE5OWM3MDcyMTY2MDBhY2I4NmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oG88liuStlOv495xtiwxgnRddKXlS2WtQid1txMheXc",
  },
});
export default instance;
