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
              <b>P. Sutachart</b>
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
                <li class="nav-item mr-3">
                  <a
                    class="nav-link text-uppercase active cool-link"
                    href="#home"
                  >
                    <span class="span-link">Home</span>
                  </a>
                </li>
                <li class="nav-item mr-3">
                  <a class=" nav-link text-uppercase  cool-link" href="#about">
                    <span class="span-link">About</span>
                  </a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link text-uppercase" href="#project">
                    <span class="span-link">Work</span>
                  </a>
                </li>
                <li class="nav-item mr-3">
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
        </div>
        <div class="container">
          <div class="row align-items-center text-center justify-content-center site-blocks-cover">
            <div class="col-md-8 col-10">
              <h1 class="text-uppercase heading-home" id="active-img">
                Hi, i am Sutachart
                <img class="hidden-img" src="/img/png/suit.png" width="400" />
              </h1>
              <span style={{ fontWeight: 600, color: "#706c61" }}>
                Programmer & Developer
              </span>
              <div class="mt-5">
                <span style={{ color: "#706c61" }}>
                  web design & SEO agency in Brussels! We love creating
                  beautiful interfaces for web and mobile devices, to make your
                  business shine online.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
