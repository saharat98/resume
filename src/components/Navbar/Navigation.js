import "./Style/Navigation.css";
import {
  Nav,
  NavbarContainer,
  NacLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation(props) {
  return (
    <>
      <div className="Nav">
        <div className="Navbar">
          <div className="Nav-menu">
            <div className="Nav-item">
              <div className="Nav-Link">
                <Nav.Link className="Nav-Link" to="home">
                  Home
                </Nav.Link>
                <Nav.Link className="Nav-Link" to="about">
                  About Me
                </Nav.Link>
                <Nav.Link className="Nav-Link" to="resume">
                  Resume
                </Nav.Link>
                <Nav.Link className="Nav-Link" to="contect">
                  Contect
                </Nav.Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
