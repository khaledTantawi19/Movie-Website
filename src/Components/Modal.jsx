import React from "react";
import "./modal.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

function Modal({ movie, status, toggleModal }) {
  return (
    <div className={`movieModal ${status ? "active" : undefined}`}>
      <a href="##" className="modalClose" onClick={toggleModal}>
        <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
      </a>
      <iframe
        width="1280"
        height="720"
        src={movie.video}
        title={`${movie.title} | Offical Trailer`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
