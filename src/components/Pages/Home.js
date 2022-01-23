import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap/";
import "./Style/Home.css";
import ReactTypingEffect from "react-typing-effect";
import background from "./../../assets/bg_home_page.jpg";
import GitHubButton from "react-github-btn";
import resume from "./../../assets/resume.pdf";

function Home() {
  return (
    <>
      <div
        id="home"
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
        <div class="Center">
          <a href={resume} download="resume.pdf">
            <button className="button button3">GET RESUME</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
