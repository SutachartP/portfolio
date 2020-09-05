/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <div
          class="navbar navbar-expand-md navbar-light justify-content-center fixed-top"
          id="navbar"
        >
          <div class="container">
            <a href="/" class="navbar-brand d-flex w-50 mr-auto text-uppercase">
              {/* P. Sutachart */}
              <img
                src="img/icon/SP-model.png"
                style={{ width: 50, height: 50 }}
              />
            </a>
            <button
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#menu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <nav class="navbar-collapse collapse w-100" id="menu">
              <ul class="navbar-nav w-100 justify-content-center">
                <li class="nav-item">
                  <a
                    class="nav-link text-uppercase active cool-link"
                    href="#home"
                  >
                    <span class="span-link">Home</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class=" nav-link text-uppercase" href="#about">
                    <span class="span-link">About</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-uppercase" href="#project">
                    <span class="span-link">Work</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-uppercase" href="#contact">
                    <span class="span-link">Contact</span>
                  </a>
                </li>
              </ul>
              <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                <li class="mr-1">
                  <a
                    class="nav-link"
                    href="https://www.facebook.com/sutachart"
                    target="_blank"
                  >
                    <img src="img/icon/facebook.png" width="20" />
                  </a>
                </li>
                <li class="nav-item mr-1">
                  <a
                    class="nav-link"
                    href="https://github.com/sutachart"
                    target="_blank"
                  >
                    <img src="img/icon/github.png" width="20" />
                  </a>
                </li>
                <li class="nav-item mr-1">
                  <a
                    class="nav-link"
                    href="https://www.linkedin.com/in/sutachart-pookmuenwai-4aa76219b/"
                    target="_blank"
                  >
                    <img src="img/icon/linkedin.png" width="20" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div id="border-active" class="border-navbar"></div>
        </div>
        <div class="container">
          <div class="row align-items-center text-center justify-content-center site-blocks-cover">
            <div class="col-md-8 col-10">
              <h1 class="text-uppercase heading-home" id="active-img">
                Hi, i am Sutachart
                <img class="hidden-img" src="/img/png/suit.png" width="400" />
              </h1>
              <span class="heading-low">Programmer & Web Developer</span>
              <div>
                <p class="home-sub-text">
                  Welcome to my portfolio, I like to learn new things and
                  improve yourself always.
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/sutachart-pookmuenwai-4aa76219b/"
                    target="_blank"
                    class="a-link"
                  >
                    Linkedin
                  </a>
                  <span class="a-link"> | </span>
                  <a
                    href="https://github.com/sutachart"
                    target="_blank"
                    class="a-link"
                  >
                    GitHub
                  </a>
                  <span class="a-link"> | </span>
                  <a
                    href="https://github.com/sutachart"
                    target="_blank"
                    class="a-link"
                  >
                    Facebook
                  </a>
                </p>
              </div>
            </div>
            <div class="down-link">
              <a href="#about">
                <img src="img/icon/arrow-down.png" width="60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
