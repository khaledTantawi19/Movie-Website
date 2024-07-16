// import React, { useState } from "react";
// import "./header.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import NavListItem from "../Components/NavListItem";
// import NavListData from "../Components/NavListData";
// import Search from "../Components/Search";
// import Button from "../Components/Button";

// library.add(fas);

// function Header({ scroll }) {
//   const [navList, setNavList] = useState(NavListData);
//   const handleNavOnClick = (id) => {
//     const newNavList = navList.map((nav) => {
//       nav.active = false;
//       if (nav.id == id) nav.active = true;
//       return nav;
//     });
//     setNavList(newNavList);
//   };
//   return (
//     <div>
//       <header className={`${scroll > 100 ? "scrolled" : undefined}`}>
//         <a href="/" className="logo">
//           cinema
//           <FontAwesomeIcon className="icon" icon="fa-solid fa-clapperboard" />
//         </a>
//         <ul className="nav">
//           {navList.map((nav) => (
//             <NavListItem key={nav.id} nav={nav} navOnClick={handleNavOnClick} />
//           ))}
//         </ul>
//         <Search />
//         <Button
//           icon={<FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />}
//           name="Sign In"
//         />
//       </header>
//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import "./header.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavListItem from "../Components/NavListItem";
import NavListData from "../Components/NavListData";
import Search from "../Components/Search";
import Button from "../Components/Button";

library.add(fas);

function Header({ scroll }) {
  const [navList, setNavList] = useState(NavListData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavOnClick = (id) => {
    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav.id === id) nav.active = true;
      return nav;
    });
    setNavList(newNavList);
    setIsMenuOpen(false); // Close menu when an item is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className={scroll > 100 ? "scrolled" : undefined}>
        <a href="/" className="logo">
          cinema
          <FontAwesomeIcon className="icon" icon="fa-solid fa-clapperboard" />
        </a>
        <button className="menu-btn" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isMenuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}
          />
        </button>
        <ul className={`nav ${isMenuOpen ? "open" : ""}`}>
          {navList.map((nav) => (
            <NavListItem key={nav.id} nav={nav} navOnClick={handleNavOnClick} />
          ))}
          <li className="mobile-sign-in">
            <Button
              icon={
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />
              }
              name="Sign In"
            />
          </li>
        </ul>
        <div className="desktop-sign-in">
          <Search />
          <Button
            icon={<FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />}
            name="Sign In"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
