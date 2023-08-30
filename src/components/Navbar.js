import React, { useState } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import Colo from "./Colo";

export default function Navbar(props) {

    // function setMode({ mode, setMode }) {
    //     const handleChange = () => {
    //         setMode('dark');
    //     };
    // }
  const [theme, setTheme] = useState("dark");
  const toggleTheme = (color) => {
    switch (color) {
      case "red":
        setTheme("red");
        // setMode("dark");
        document.body.style.backgroundColor = "#AB2328";
        document.body.style.color = "white";
        break;
      case "blue":
        setTheme("blue");
        document.body.style.backgroundColor = "#06038D";
        break;
      case "green":
        setTheme("green");
        document.body.style.backgroundColor = "#013220";
        break;
      case "brown":
        setTheme("brown");
        document.body.style.backgroundColor = "#836953";
        break;

      default:
        props.showAlert(" Theme no change", "failed ");
        break;
    }
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode==='light'? 'dark' : 'light'}`}>
        {/* navbar-${props.mode} bg-${props.mode}*/}
        <div className="container-fluid " >
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          {/* le dark mode */}
          <div className="form-check form-switch ">
          
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label text-black"
              htmlFor="flexSwitchCheckDefault"
            >
            <i className="fa-solid fa-sun"></i>

            </label>
          </div>
          <Colo toggleTheme={toggleTheme} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse justify-content-md-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.Home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Features">
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  Home: PropTypes.string.isRequired,
};
Navbar.defaultProps = { title: "this_default", Home: "this_default" };
