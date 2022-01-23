import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/About.css";
import Box from "./Box";
import Grid from "./Grid";
import react_logo from "./../../assets/reactjs_logo.svg";
import python_logo from "./../../assets/python_logo.svg";
import postgresql from "./../../assets/postgresql_logo.png";
import odoo from "./../../assets/odoo_logo.png";
import mysql from "./../../assets/mysql_logo.svg";
import javascript from "./../../assets/javascript_logo.png";
import html5 from "./../../assets/html5.png";
import flutter from "./../../assets/flutter_logo.png";
import firebase from "./../../assets/firebase_logo.png";
import dart from "./../../assets/dart_logo.png";
import csharp from "./../../assets/csharp_logo.svg";
import css3_logo from "./../../assets/css3.png";

function About() {
  return (
    <>
      <div className="about-css">
        <h2>About Me</h2>
        <p className="text-about">
          I am very interested and eager to find more knowledge In programming
          and wanting to work To develop a program
        </p>
        <div className="detail-middle-box">
          <table>
            <thead>
              <tr>
                <th colspan="2">
                  <i
                    class="fa fa-info-circle fa-2x"
                    style={{ color: "#5FC9F3" }}
                  ></i>
                </th>
              </tr>
              <tr>
                <th colspan="2">INFO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name :</td>
                <td>Saharat penwijit</td>
              </tr>
              <tr>
                <td>Birthday :</td>
                <td>June-22-1998</td>
              </tr>
              <tr>
                <td>Address :</td>
                <td>Mueang Chiang Mai</td>
              </tr>
              <tr>
                <td>Phone :</td>
                <td>0931301375</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colspan="2">
                  <i
                    class="fas fa-user-graduate fa-2x"
                    style={{ color: "#F0A441" }}
                  ></i>
                </th>
              </tr>
              <tr>
                <th colspan="2">Education</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2011 - 2016</td>
                <td>2017 - 2021</td>
              </tr>
              <tr>
                <td>Chakkhamkhanathon school :</td>
                <td>
                  Bachelor Degree in Computer Engineering, Faculty of
                  Engineering at Naresuan University
                </td>
              </tr>
              <tr>
                <td>(GPA 3.2)</td>
                <td>(GPA 2.35)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 style={{ margin: "50px" }}>Skills</h2>
        <div className="skills-detail">
          <img alt="" src={react_logo} width="200" height="100" />
          <img alt="" src={python_logo} width="200" height="100" />
          <img alt="" src={css3_logo} width="200" height="100" />
          <img alt="" src={javascript} width="200" height="100" />
          <img alt="" src={html5} width="200" height="100" />
          <img alt="" src={odoo} width="200" height="100" />
          <img alt="" src={mysql} width="200" height="100" />
          <img alt="" src={flutter} width="200" height="100" />
          <img alt="" src={firebase} width="200" height="100" />
          <img alt="" src={dart} width="200" height="100" />
          <img alt="" src={csharp} width="200" height="100" />
          <img alt="" src={postgresql} width="200" height="100" />
        </div>
      </div>
    </>
  );
}

export default About;
