// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const BreadCrumbs = () => {
//   let { pathname } = useLocation();

//   let path = pathname.split("/").filter((x) => x);

//   let breadCrumbPath = "";
//   return (
//     <div>
//       <Link to="/">Home</Link>

//       {path.map((name, index) => {
//         breadCrumbPath += `/${name}`;

//         let isLastName = index === path.length - 1;

//         return isLastName ? (
//           <span>/{name}</span>
//         ) : (
//           <span>
//             /<Link to={breadCrumbPath}>{name}</Link>
//           </span>
//         );
//       })}
//     </div>
//   );
// };

// export default BreadCrumbs;

import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  let { pathname } = useLocation();

  let path = pathname.split("/").filter((x) => x);

  let breadCrumbPath = "";
  return (
    <div>
      <Link to="/">Home</Link>

      {path.map((name, index) => {
        breadCrumbPath += `/ ${name}`;

        let isLast = index === path.length - 1;

        return isLast ? (
          <span>/{name}</span>
        ) : (
          <span>
            / <Link to={breadCrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
