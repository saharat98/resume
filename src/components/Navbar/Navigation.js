import "./Style/Navigation.css";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./../../assets/profile.jpg";

function Navigation(props) {
  return (
    <>
      <div className="bg-navbar">
        <img
          alt=""
          src={Profile}
          width="30"
          height="30"
          className="profile-pic"
        />
        <p>Saharat penwijit</p>
        {/* <p style={{ paddingLeft: "5%" }}>
          I am very interested and eager to find more knowledge In programming
          and wanting to work To develop a program
        </p> */}
        <div className="color-navbar">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/abount">Abount</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contect">Contect</Nav.Link>
        </div>
        <div className="fontawesomeicon">
          <Nav.Link href="#/home">
            <i class="fab fa-github fa-3x" style={{ color: "#000000" }}></i>
          </Nav.Link>
          <Nav.Link href="#/home">
            <i class="fas fa-envelope fa-3x" style={{ color: "#000000" }}></i>
          </Nav.Link>
          <nav>
            <i class="fas fa-phone fa-3x" style={{ color: "#000000" }}></i>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;
