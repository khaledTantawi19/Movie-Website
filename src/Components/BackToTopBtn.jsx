import React from "react";
import "./backToTopBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackToTopBtn({ scroll }) {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <a
      className={`back-to-top ${scroll > 100 ? "active" : undefined}`}
      onClick={backToTop}
    >
      <FontAwesomeIcon className="icon" icon="fa-solid fa-arrow-up" />
    </a>
  );
}

export default BackToTopBtn;
