import React from "react";
import "./movieContent.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
// import titleImg from "../images/transformer-title.png";
import Button from "./Button";

library.add(fas, far);

function MovieContent({ movie }) {
  return (
    <div className={`content ${movie.active ? "active" : undefined}`}>
      <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>{movie.year}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>{movie.description}</p>
      <div className="button">
        <Button
          icon={<FontAwesomeIcon icon={faBookmark} />}
          name="Book"
          color="#ff3700"
          bgColor="#ffffff"
        />
        <Button icon={<FontAwesomeIcon icon={faPlusSquare} />} name="My List" />
      </div>
    </div>
  );
}

export default MovieContent;
