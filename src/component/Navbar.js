// import React from "react";
// import { Link } from "react-router-dom";
// import { UseSelector, useDispatch, useSelector } from "react-redux";

// const Navbar = () => {
//   let dispatch = useDispatch();
//   let names = useSelector((state) => state.cart);

//   let item = names.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         textAlign: "center",
//         gap: 15,
//         fontSize: 20,
//         backgroundColor: "skyblue",
//         padding: 15,
//       }}
//     >
//       <Link
//         to="/"
//         style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
//       >
//         Home
//       </Link>
//       <Link
//         to="/about"
//         style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
//       >
//         About
//       </Link>
//       <Link
//         to="/cart"
//         style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
//       >
//         Cart
//       </Link>

//       <Link
//         to="#"
//         style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
//       >
//         Total Item:{names.length}
//       </Link>
//       <Link
//         to="#"
//         style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
//       >
//         Total Price:{item}
//       </Link>

//       <Link
//         to="login"
//         style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
//       >
//         LOGIN
//       </Link>
//     </div>
//   );
// };

// export default Navbar;

// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const names = useSelector((state) => state.cart);

  const item = names.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Check if user is logged in
  const isLogged = localStorage.getItem("isLogged") === "true";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        gap: 15,
        fontSize: 20,
        backgroundColor: "skyblue",
        padding: 15,
      }}
    >
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
      >
        About
      </Link>
      <Link
        to="/cart"
        style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
      >
        Cart
      </Link>

      <Link
        to="#"
        style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
      >
        Total Item:{names.length}
      </Link>
      <Link
        to="#"
        style={{ textDecoration: "none", color: "black", fontWeight: 700 }}
      >
        Total Price:{item}
      </Link>

      {isLogged ? (
        <Link
          to="#"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: 700,
          }}
        >
          Logout
        </Link>
      ) : (
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: 700,
          }}
        >
          LOGIN
        </Link>
      )}
    </div>
  );
};

export default Navbar;
