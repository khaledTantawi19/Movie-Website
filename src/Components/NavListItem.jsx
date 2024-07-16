// import React from "react";
// import "./navListItem.css";

// function NavListItem({ nav, navOnClick }) {
//   return (
//     <div>
//       <li>
//         <a
//           href={nav.link}
//           className={`${nav.active ? "active" : undefined}`}
//           onClick={() => {
//             navOnClick(nav.id);
//           }}
//         >
//           {nav.name}
//         </a>
//       </li>
//     </div>
//   );
// }

// export default NavListItem;

import React from "react";
import "./navListItem.css";

function NavListItem({ nav, navOnClick }) {
  return (
    <li>
      <a
        href={nav.link}
        className={nav.active ? "active" : ""}
        onClick={() => navOnClick(nav.id)}
      >
        {nav.name}
      </a>
    </li>
  );
}

export default NavListItem;
