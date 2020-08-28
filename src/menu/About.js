/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div class="container">
        <div style={{ padding: "60px 10px" }}></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="heading text-uppercase">
              <b>About Me</b>
            </div>
            <div class="mt-4 text-content">
              I worked as an electrical testing engineer. I later decided to
              change my career to information technology field because of my
              curiosity towards web-development and also I already knew some
              middle level programming languages like c,c++. Due to my interest
              on web-development I learned Python,Java-script and some front-end
              technologies.then I worked as an intern in a startup software
              company. yes,web web-development is awesome!.
            </div>
            <hr style={{ margin: "30px 0px" }} />
            <div class="heading text-uppercase">
              <b>Technical Skills</b>
            </div>
            <div class="mt-4 text-content row">
              <div class="col-5">
                <ul>
                  <li>C,C++</li>
                  <li>HTML/CSS</li>
                  <li>Bootstrap</li>
                  <li>React JS</li>
                  <li>Ionic Framework</li>
                </ul>
              </div>
              <div class="col-5">
                <ul>
                  <li>Git,GIt Hub</li>
                  <li>Java</li>
                  <li>Microsoft Office</li>
                  <li>Unity</li>
                  <li>Node JS</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="row-md-6 row-6 h-75">
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
            </div>
            <div class="row-md-6 row-6">
              <div class="heading text-uppercase">
                <b>Languages</b>
              </div>
              <div class="mt-4 text-content">
                <li>C,C++</li>
                <li>HTML/CSS</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
