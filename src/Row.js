import React, { useState, useEffect } from "react"; 
import "./Row.css";
 import axios from './Axios'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const[trailerUrl, setTrailerUrl] = useState("");

  // A snipet of caode which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  
  const opts = {
    height: "390px",
    width : "100%",
    playerVars :{
      autoplay :1,
    },
  };
const handleClick =(movie) =>{
  if(trailerUrl){
    setTrailerUrl("");
  }else{
    movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
    .then((url) =>{
      const urlParams = new URLSearchParams(new URL(url).search)
      setTrailerUrl(urlParams.get("v"));
    })
    .catch((error)=>console.log(error));
  }
}
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      <div className="row_posters">
        {/* serveral row_poster(s) */}

        {movies.map((movie) =>
((isLargeRow && movie.poster_path)||(!isLargeRow && movie.backdrop_path)) &&(
          <img
        onClick={()=> handleClick(movie)}
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* container -> posters */}
      <div style ={{padding :"40px"}}>
{trailerUrl && <YouTube videoId={trailerUrl} opts = {opts} />}
       </div>
    </div>
  );
}

export default Row;