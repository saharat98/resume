import "./Style/Navigation.css";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import React, { useState } from "react";

function Navigation(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="Nav">
        <div className="Navbar">
          <div className="Nav-item">
            <Link className="Nav-Link" to="home">
              Home
            </Link>
            <Link className="Nav-Link" to="about">
              About Me
            </Link>
            <Link className="Nav-Link" to="resume">
              Resume
            </Link>
            {/* <Link className="Nav-Link" to="contect">
              Contect
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
