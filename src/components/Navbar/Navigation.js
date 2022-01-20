import "./Style/Navigation.css";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./../../assets/profile.jpg";

function Navigation(props) {
  return (
    <>
      <div className="contrainer">
        <div className="bg-navbar">
          <img
            alt=""
            src={Profile}
            width="50"
            height="50"
            className="profile-pic"
          />

          <p
            style={{
              color: "yellow",
              fontSize: "22px",
              fontFamily: "'Archivo Black",
            }}
          >
            SAHARAT
          </p>
        
          <div className="color-navbar">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/abount">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contect">Contect</Nav.Link>
          </div>
          {/* <div className="fontawesomeicon">
          <Nav.Link href="#/home">
            <i class="fab fa-github fa-3x" style={{ color: "#000000" }}></i>
          </Nav.Link>
          <Nav.Link href="#/home">
            <i class="fas fa-envelope fa-3x" style={{ color: "#000000" }}></i>
          </Nav.Link>
          <nav>
            <i class="fas fa-phone fa-3x" style={{ color: "#000000" }}></i>
          </nav>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Navigation;
