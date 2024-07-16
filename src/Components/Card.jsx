import React from "react";
import "./card.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);
function Card({ movie }) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="movie-card">
        <img src={movie.previewImg} alt="Preview-Image" className="img-fluid" />
        <p>
          {movie.length} | {movie.category}
        </p>
        <div className="content">
          <h4>{movie.title}</h4>
          <div className="card-icons">
            <FontAwesomeIcon className="icon" icon="fa-solid fa-plus" />
            <FontAwesomeIcon className="icon" icon="fa-solid fa-play" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
