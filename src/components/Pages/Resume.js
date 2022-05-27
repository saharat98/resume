import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import "./Style/Resume.css";

function Resume() {
  const data = [
    {
      year: "2017",
      desc: (
        <div>
          <ul>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.7rem",
                fontWeight: "Bold",
              }}
            >
              👨‍💻 WinForm: Program Calculator
            </li>
            <li style={{ listStyle: "none", fontSize: "1.5rem", margin: 30 }}>
              It is a computer programming course project in which the
              calculator was modified to appear in the form of a windowform.
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.7rem",
                fontWeight: "Bold",
              }}
            >
              👨‍💻 Monogame: tic-tac-toe in python
            </li>
            <li style={{ listStyle: "none", fontSize: "1.5rem", margin: 30 }}>
              It is a modification of the game xo to show in the form of text
            </li>
          </ul>
        </div>
      ),
    },
    {
      year: "2018",
      desc: (
        <div>
          <ul>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.7rem",
                fontWeight: "Bold",
              }}
            >
              👨‍💻 Web: Website for selling clothes online
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.5rem",
                margin: 30,
              }}
            >
              It is a Data Structure course project. It is a shop system that
              <br></br>
              can search for product codes. and product categories Using MySQL
              to store data
            </li>
          </ul>
        </div>
      ),
    },
    {
      year: "2019",
      desc: (
        <div>
          <ul>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.7rem",
                fontWeight: "Bold",
              }}
            >
              👨‍💻 Web: Website for help stray animals
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.5rem",
                margin: 30,
              }}
            >
              It is a web application created to find new owners for stray
              animals using MySQL to store data.
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.7rem",
                fontWeight: "Bold",
              }}
            >
              👨‍💻 Game: tic-tac-toe Multiplayer
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.5rem",
                margin: 30,
              }}
            >
              is a two player tic-tac-toe game played on computer and mobile
              using firebase as online database.
            </li>
          </ul>
        </div>
      ),
    },
    {
      year: "2020",
      desc: (
        <div>
          <ul>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.7rem",
                fontWeight: "Bold",
              }}
            >
              👨‍💻 Game: XO -Algorithm minimax
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.5rem",
                margin: 30,
              }}
            >
              It is a game tic-tac-toe using minimax algorithms displayed as
              text
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.7rem",
                fontWeight: "Bold",
              }}
            >
              👨‍💻 Robot: True Temi Robot
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.5rem",
                margin: 30,
              }}
            >
              It is a robot that serves to facilitate users who come to eat at
              the Food Park. Central Phitsanulok.
            </li>
          </ul>
        </div>
      ),
    },
    {
      year: "2021",
      desc: (
        <div>
          <ul>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.7rem",
                fontWeight: "Bold",
              }}
            >
              👨‍💻 Senior Project - Artificial Intelligence for Building Entry
              <br></br>
              Identification and Support COVID-19 Prevention
            </li>
            <li style={{ listStyle: "none", fontSize: "1.5rem", margin: 30 }}>
              The aim of this project is to examine models with Yolov5, HOG
              identification and check the wearing of face masks and distancing.
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.7rem",
                fontWeight: "Bold",
              }}
            >
              👨‍💻 Internship - Mobile application MORNAD
            </li>
            <li style={{ listStyle: "none", fontSize: "1.5rem", margin: 30 }}>
              Using flutter, design the interface and fetch data from API to
              show it inside the app page.
            </li>
          </ul>
        </div>
      ),
    },
    {
      year: "2022 ",
      desc: (
        <div>
          <ul>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.7rem",
                fontWeight: "Bold",
              }}
            >
              2021 August - 2022 January
            </li>
            <li
              style={{
                listStyle: "none",
                fontSize: "1.7rem",
                fontWeight: "Bold",
              }}
            >
              👨‍💻 KOTCHASAAN TECHNOLOGY INVENTION COMPANY LIMITED
            </li>
            <li style={{ listStyle: "none", fontSize: "1.5rem", margin: 30 }}>
              Develop odoo ERP system software with Python languag according to
              customer requirements.
            </li>
            <li style={{ listStyle: "none", fontSize: "1.5rem", margin: 30 }}>
              Prepare reports for ERP systems with JasperReports
            </li>
            <li style={{ listStyle: "none", fontSize: "1.5rem", margin: 30 }}>
              Prepare reports for ERP systems with Qweb
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  return (
    <div className="resume-detail" id="resume">
      <h2>RESUME</h2>
      <div className="bar-resume">
        <HorizontalTimeline
          getLabel={(data) => data}
          index={current}
          indexClick={(index) => {
            setCurrent(index);
            setPrevious(current);
          }}
          values={data.map((el) => el.year)}
          maxEventPadding={20}
          minEventPadding={20}
          styles={{
            background: "white",
            foreground: "#BD3253",
            outline: "#BFBFBF",
            margin: "0 auto",
            textAlign: "center",
            opacity: 0,
          }}
        />
      </div>
      <div className="detail-resume">{data[current].desc}</div>
    </div>
  );
}

export default Resume;
