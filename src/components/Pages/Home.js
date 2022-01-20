import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap/";
import "./Style/Home.css";
import ReactTypingEffect from "react-typing-effect";
import background from "./../../assets/bg_home_page.jpg";
import About from "./About";

function Home() {
  return (
    <>
        <div
          className="home-css"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div class="text">SAHARAT PENWIJIT</div>
          <ReactTypingEffect
            text={[
              "I am France",
              "I am a Junior Web Developer",
              "I am a Developer",
            ]}
            speed={70}
            eraseDelay={300}
            eraseSpeed={100}
            typingDelay={80}
            className="typingeffect"
          ></ReactTypingEffect>
        </div>
    </>
  );
}

export default Home;
