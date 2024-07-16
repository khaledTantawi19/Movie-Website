import React from "react";
import "./trendCard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

function TrendCard({ slide }) {
  return (
    <div className="trend-card">
      <img className="img-fluid" src={slide.previewImg} alt="hello" />
      <a href="#">
        Add to calender <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
      </a>
    </div>
  );
}

export default TrendCard;
