import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Home.css";
import ReactTypingEffect from "react-typing-effect";
import background from "./../../assets/bg_home_page.jpg";
import resume from "./../../assets/Saharat penwijit.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <>
      <div
        id="home"
        className="home-css"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="text">SAHARAT PENWIJIT</div>
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
        <div className="Center">
          <a href={resume} download="Saharat penwijit.pdf">
            <button className="button button3">GET RESUME</button>
          </a>
          <a href="https://github.com/saharat98">
            <button className="button button3">Github</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
