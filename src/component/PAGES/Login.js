import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("isLogged", "true");
    navigate("/home");
  };

  // Check if user is already logged in
  if (localStorage.getItem("isLogged") === "true") {
    navigate("/home");
    return null;
  }

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Login page</h1>
      <br />
      <br />
      <input type="text" placeholder="type here" />
      <br />
      <br />
      <input type="number" placeholder="type here" />
      <br />
      <br />
      <button className="bbtn" onClick={handleClick}>
        LOGIN
      </button>
    </div>
  );
};

export default Login;
