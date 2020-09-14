/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Myskill extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row align-items-center text-center justify-content-center h-50"
          style={{ minHeight: "40vh" }}
        >
          <div className="w-100">
            <div className="header-text" style={{ color: "#343a40" }}>
              <b>Skills</b>
            </div>
            <div className="justify-content-center">
              <div className="skill-box">
                <div className="frame">
                  <img src="img/icon/skill/html.png" />
                </div>
              </div>
              <div className="skill-box">
                <div className="frame">
                  <img src="img/icon/skill/css.png" />
                </div>
              </div>
              <div className="skill-box">
                <div className="frame">
                  <img src="img/icon/skill/js.svg" />
                </div>
              </div>
              <div className="skill-box">
                <div className="frame">
                  <img src="img/icon/skill/bootstrap.svg" />
                </div>
              </div>
              <div className="skill-box">
                <div className="frame">
                  <img src="img/icon/skill/react.png" />
                </div>
              </div>
              <div className="skill-box">
                <div className="frame">
                  <img src="img/icon/skill/ionic.png" />
                </div>
              </div>
              <div className="skill-box">
                <div className="frame">
                  <img src="img/icon/skill/github.svg" />
                </div>
              </div>
              <div className="skill-box">
                <div className="frame">
                  <img src="img/icon/skill/unity.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
