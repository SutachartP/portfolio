/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-lg-6 order-lg-2 bg-about-image1"></div>
          <div className="col-lg-6 order-lg-1 my-auto">
            <div className="content-about">
              <h2>About Us</h2>
              <p>
                I'm new graduated from Computer Science at Khonkaen University.
                I already knew some middle level programming languages like
                c,c++. Due to my interest on web-development I learned React JS
                , Java-script and some front-end technologies. then I worked as
                an intern in a startup software company. Now i’m not working at
                the moment and i'm looking for a job as Front-end or Back-end
                developer.
              </p>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 order-lg-1 bg-about-image2"></div>
          <div className="col-lg-6 order-lg-2 my-auto">
            <div className="content-about">
              <h2>Technical Skills</h2>
              <p>
                <li>C,C++</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React JS</li>
                <li>Ionic Framework (Basic)</li>
                <li>Java</li>
                <li>Git,GIt Hub</li>
                <li>Microsoft Office</li>
                <li>Unity</li>
              </p>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 order-lg-2 bg-about-image3"></div>
          <div className="col-lg-6 order-lg-1 my-auto">
            <div className="content-about">
              <h2>Language & Personality</h2>
              <div className="mt-4 text-content pl-3">
                <div>
                  <ul>
                    <li>THAI : Excellent</li>
                    <li>ENGLISH : Fair</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
