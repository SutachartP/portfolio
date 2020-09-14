/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="padding-top"></div>
        <div className="row">
          <div className="col-sm-6 col-12">
            <div className="heading-sub text-uppercase">
              <b>About Me</b>
            </div>
            <div className="mt-4 text-content">
              I'm new graduated from Computer Science at Khonkaen University. I
              already knew some middle level programming languages like c,c++.
              Due to my interest on web-development I learned React JS ,
              Java-script and some front-end technologies. then I worked as an
              intern in a startup software company. Now i’m not working at the
              moment and i'm looking for a job as Front-end or Back-end
              developer.
            </div>
            <hr style={{ margin: "30px 0px", borderTop: "1px solid black" }} />
            <div className="heading-sub text-uppercase">
              <b>Technical Skills</b>
            </div>
            <div className="row mt-4 text-content pl-3">
              <div className="col-5 col-sm-5">
                <ul>
                  <li>C,C++</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>React JS</li>
                </ul>
              </div>
              <div className="col-7 col-sm-7">
                <ul>
                  <li>Ionic Framework (Basic)</li>
                  <li>Java</li>
                  <li>Git,GIt Hub</li>
                  <li>Microsoft Office</li>
                  <li>Unity</li>
                </ul>
              </div>
            </div>
            <hr style={{ margin: "30px 0px", borderTop: "1px solid black" }} />
            <div className="heading-sub text-uppercase">
              <b>Language</b>
            </div>
            <div className="mt-4 text-content pl-3">
              <div>
                <ul>
                  <li>THAI : Excellent</li>
                  <li>ENGLISH : Fair</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="img-about">
              <img src="img/png/about/mockuppage.png" className="image-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="padding-bot"></div>
      </div>
    );
  }
}
