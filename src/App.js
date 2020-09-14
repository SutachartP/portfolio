/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <div
          className="navbar navbar-expand-md navbar-light justify-content-center fixed-top"
          id="navbar"
        >
          <div className="container">
            <a
              href="#home"
              className="navbar-brand d-flex w-50 mr-auto text-uppercase"
            >
              <img
                src="img/icon/SP-model.png"
                style={{ width: 50, height: 50 }}
                alt="Logo"
              />
            </a>
            <nav className="navbar-collapse collapse w-100" id="menu">
              <ul className="navbar-nav w-100 justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link text-uppercase active cool-link"
                    href="#home"
                  >
                    <span className="span-link">Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className=" nav-link text-uppercase" href="#about">
                    <span className="span-link">About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase" href="#project">
                    <span className="span-link">Work</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase" href="#contact">
                    <span className="span-link">Contact</span>
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                <li className="mr-1">
                  <a
                    className="nav-link"
                    href="https://www.facebook.com/sutachart"
                    target="_blank"
                  >
                    <img src="img/icon/nav/facebook.png" alt="" width="20" />
                  </a>
                </li>
                <li className="nav-item mr-1">
                  <a
                    className="nav-link"
                    href="https://www.github.com/sutachart"
                    target="_blank"
                  >
                    <img src="img/icon/nav/github.png" alt="" width="20" />
                  </a>
                </li>
                <li className="nav-item mr-1">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/sutachart-pookmuenwai-4aa76219b/"
                    target="_blank"
                  >
                    <img src="img/icon/nav/linkedin.png" alt="" width="20" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div id="border-active" className="border-navbar"></div>
        </div>
        <div className="container">
          <div className="row align-items-center text-center justify-content-center site-blocks-cover">
            <div className="col-md-8 col-10">
              <h1 className="text-uppercase heading-home" id="active-img">
                Hi, i am Sutachart
                <img
                  className="hidden-img"
                  src="/img/png/suit.png"
                  alt=""
                  width="400"
                />
              </h1>
              <span className="heading-low">Programmer & Web Developer</span>
              <div>
                <p className="home-sub-text">
                  Welcome to my portfolio, I like to learn new things and
                  improve yourself always.
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/sutachart-pookmuenwai-4aa76219b/"
                    target="_blank"
                    className="a-link"
                  >
                    Linkedin
                  </a>
                  <span className="a-link"> | </span>
                  <a
                    href="https://github.com/sutachart"
                    target="_blank"
                    className="a-link"
                  >
                    GitHub
                  </a>
                  <span className="a-link"> | </span>
                  <a
                    href="https://github.com/sutachart"
                    target="_blank"
                    className="a-link"
                  >
                    Facebook
                  </a>
                </p>
              </div>
            </div>
            <div className="down-link">
              <a href="#about">
                <img src="img/icon/arrow-down.png" alt="" width="60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
