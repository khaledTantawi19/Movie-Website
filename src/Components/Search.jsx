import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.css";

library.add(fas);

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="search" />
      <FontAwesomeIcon className="icon" icon="fa-solid fa-magnifying-glass" />
    </div>
  );
}

export default Search;
