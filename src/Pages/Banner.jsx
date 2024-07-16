import React, { useState, useEffect } from "react";
import "./banner.css";

// import bgImg from "../images/bg-transformer.jpg";
import MovieContent from "../Components/MovieContent";
import MovieDate from "../Components/MovieDate";
import PlayBtn from "../Components/PlayBtn";
import MovieSwiper from "../Components/MovieSwiper";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchdata = () => {
    fetch("http://localhost:3000/Data/movieData.json")
      .then((res) => res.json())
      .then((Data) => setMovies(Data))
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const handleSlideChange = (id) => {
    const newMovies = movies.map((movie) => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovies);
  };
  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div className="movie">
            <img
              src={movie.bgImg}
              alt="Background Images"
              className={`bgImg ${movie.active ? "active" : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <MovieDate movie={movie} />
                  <PlayBtn movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}

      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  );
}

export default Banner;
