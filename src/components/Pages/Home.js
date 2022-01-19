import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap/";
import "./Style/Home.css";
import ReactTypingEffect from "react-typing-effect";

function Home() {
  return (
    <>
      <div className="home-css">
        <div class="text">SAHARAT PENWIJIT</div>
        <ReactTypingEffect
          text={["I am Saharat", "I am a Junior Web Developer"]}
          speed={80}
          eraseDelay={300}
          eraseSpeed={200}
          className="typingeffect"
        ></ReactTypingEffect>
      </div>
    </>
  );
}

export default Home;
