import React from "react";
import "./footerNavItem.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

function FooterNavItem({ name }) {
  return (
    <li>
      <FontAwesomeIcon className="icon" icon="fa-solid fa-chevron-right" />
      <a href="#">{name}</a>
    </li>
  );
}

export default FooterNavItem;
