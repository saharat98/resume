import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/About.css";
import Box from "./Box";
import Grid from "./Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <>
      <div className="about-css">
        <h2>About Me</h2>
        <p className="text-about">
          I am very interested and eager to find more knowledge In programming
          and wanting to work To develop a program
        </p>
        <Box>
          <div className="title-left-box">
            <i class="fas fa-phone 3x" style={{ color: "#F57A07" }}></i>
            <h5 className="title-font">INFO</h5>
          </div>
          <div className="detail-left-box">
            <div className="container-each-detail-box">
              <div className="container-border-detail-left-middle-box">
                <Grid>
                  <div className="subject">
                    <ul>
                      <li>Name :</li>
                      <li>Birthday :</li>
                      <li>Address :</li>
                      <li>Phone :</li>
                    </ul>
                  </div>
                  <div className="detail">
                    <ul>
                      <li>Saharat penwijit</li>
                      <li>June 22, 1998</li>
                      <li>Mueng Chiang Mai</li>
                      <li>093-1301375</li>
                    </ul>
                  </div>
                </Grid>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default About;
