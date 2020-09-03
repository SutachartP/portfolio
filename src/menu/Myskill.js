/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Myskill extends Component {
  render() {
    return (
      <div class="container">
        <div
          class="row align-items-center text-center justify-content-center h-50"
          style={{ minHeight: "40vh" }}
        >
          <div class="w-100">
            <div class="header-text" style={{ color: "#343a40" }}>
              <b>Skills</b>
            </div>
            <div class="justify-content-center">
              <div class="skill-box">
                <div class="frame">
                  <img src="img/icon/skill/html.png" />
                </div>
              </div>
              <div class="skill-box">
                <div class="frame">
                  <img src="img/icon/skill/css.png" />
                </div>
              </div>
              <div class="skill-box">
                <div class="frame">
                  <img src="img/icon/skill/js.svg" />
                </div>
              </div>
              <div class="skill-box">
                <div class="frame">
                  <img src="img/icon/skill/bootstrap.svg" />
                </div>
              </div>
              <div class="skill-box">
                <div class="frame">
                  <img src="img/icon/skill/react.png" />
                </div>
              </div>
              <div class="skill-box">
                <div class="frame">
                  <img src="img/icon/skill/ionic.png" />
                </div>
              </div>
              <div class="skill-box">
                <div class="frame">
                  <img src="img/icon/skill/github.svg" />
                </div>
              </div>
              <div class="skill-box">
                <div class="frame">
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
