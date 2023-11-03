import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

import "../App.css";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  console.log(isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Set isLoggedIn to false upon logout
    window.location.href = "/"; // Redirect the user to the login page
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/home">
          <BiCameraMovie />
          RXBOW
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cari..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
        {isLoggedIn ? (
          <h2>
            <button
              style={{
                marginLeft: 30,
                backgroundColor: "red",
                borderColor: "#c50000",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </h2>
        ) : (
          <>
            <h2>
              <Link to="/">
                <button style={{ marginLeft: 30 }}>Login</button>
              </Link>
            </h2>
            <h2>
              <Link to="register">
                <button>Register</button>
              </Link>
            </h2>
          </>
        )}
      </form>
    </nav>
  );
};
