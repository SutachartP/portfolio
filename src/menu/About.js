/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div class="container">
        <div class="padding-top"></div>
        <div class="row-11">
          <div class="col-sm-6">
            <div class="heading-sub text-uppercase">
              <b>About Me</b>
            </div>
            <div class="mt-4 text-content">
              I'm new graduated from Computer Science at Khonkaen University. I
              already knew some middle level programming languages like c,c++.
              Due to my interest on web-development I learned React JS ,
              Java-script and some front-end technologies.then I worked as an
              intern in a startup software company. yes,web web-development is
              awesome!.
            </div>
            <hr style={{ margin: "30px 0px", borderTop: "1px solid black" }} />
            <div class="heading-sub text-uppercase">
              <b>Technical Skills</b>
            </div>
            <div class="row mt-4 text-content">
              <div class="col-5 col-sm-5">
                <ul>
                  <li>C,C++</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>React JS</li>
                </ul>
              </div>
              <div class="col-7 col-sm-7">
                <ul>
                  <li>Ionic Framework</li>
                  <li>Java</li>
                  <li>Git,GIt Hub</li>
                  <li>Microsoft Office</li>
                  <li>Unity</li>
                </ul>
              </div>
            </div>
            <hr style={{ margin: "30px 0px", borderTop: "1px solid black" }} />
            <div class="heading-sub text-uppercase">
              <b>Language</b>
            </div>
            <div class="mt-4 text-content">
              <div>
                <ul>
                  <li>THAI : Excellent</li>
                  <li>ENGLISH : Fair</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            {/* <div class="row-md-6 row-6 h-75">
              <img
                class="border"
                style={{ zIndex: 1, position: "relative" }}
                src="/img/png/research.jpg"
                width="300"
              />
              <img
                class="border"
                style={{
                  zIndex: 2,
                  position: "absolute",
                }}
                src="/img/png/research.jpg"
                width="300"
              />
            </div> */}
          </div>
        </div>
        <div class="padding-bot"></div>
      </div>
    );
  }
}
