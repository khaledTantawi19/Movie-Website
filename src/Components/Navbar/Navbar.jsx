import mercedesLogo from "../../images/mercedes-logo.png";
import "./Navbar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

library.add(fas);

function Navbar() {
  const [clicked, setClicked] = useState(false);
  function handleClick(event) {
    setClicked(!clicked);
  }
  return (
    <>
      <nav className="navbar">
        <img src={mercedesLogo} alt="" />
        <div>
          <ul className={`lin${clicked ? " active" : ""}`}>
            <li>
              <a className="active" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <FontAwesomeIcon
            id="bar"
            className="icon"
            icon={clicked ? "times" : "bars"}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
