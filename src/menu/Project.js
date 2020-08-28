/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <div class="container">
        <div style={{ padding: "60px 10px" }}></div>
        <div class="text-center">
          <div class="header-text text-uppercase">
            <b>Work</b>
          </div>
          <span class="text-light">
            A selection of my web design and development projects
          </span>
        </div>

        <div class="row mt-5">
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <a
                href="#"
                style={{ border: "#a3a3a3 solid 0.5px" }}
                class="img-hover-zoom"
              >
                <img
                  alt="PIS Website [100%x225]"
                  style={{
                    height: "225px",
                    width: "100%",
                  }}
                  src="img/png/work/portfolio.png"
                />
              </a>
              <div class="card-body text-center">
                <p class="card-head-text text-uppercase">Portfolio</p>
                <p>
                  <a href="#">HTML</a>
                  <a href="#">CSS</a>
                  <a href="#">JS</a>
                  <a href="#">React.JS</a>
                  <a href="#">Portfolio</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <a
                href="https://sutachart.github.io/Probity-Intersupply-ReactJS/"
                target="_blank"
                style={{ border: "#a3a3a3 solid 0.5px" }}
                class="img-hover-zoom"
              >
                <img
                  alt="PIS Website [100%x225]"
                  style={{ height: "225px", width: "100%" }}
                  src="img/png/work/pis.png"
                />
              </a>
              <div class="card-body text-center">
                <p class="card-head-text text-uppercase">Probity Intersupply</p>
                <p>
                  <a href="#">HTML</a>
                  <a href="#">CSS</a>
                  <a href="#">JS</a>
                  <a href="#">React.JS</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <a
                href="#"
                style={{ border: "#a3a3a3 solid 0.5px" }}
                class="img-hover-zoom"
              >
                <img
                  alt="PIS Website [100%x225]"
                  style={{ height: "225px", width: "100%" }}
                  src="img/png/work/ar.png"
                />
              </a>
              <div class="card-body text-center">
                <p class="card-head-text text-uppercase">Solar Universe 3D</p>
                <p>
                  <a href="#">C#</a>
                  <a href="#">Unity</a>
                  <a href="#">Application</a>
                  <a href="#">senior project</a>
                  <a href="#">AR</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
