/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <div className="container">
        <div className="padding-top"></div>
        <div className="text-center">
          <div className="header-text text-uppercase">
            <b>Work</b>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card box-shadow">
              <a href="#" className="img-project">
                <img
                  alt="PIS Website [100%x225]"
                  src="img/png/work/portfolio.png"
                />
              </a>
              <div className="card-body text-center">
                <p className="card-head-text">Portfolio</p>
                <p>
                  <a href="#work">HTML</a>
                  <a href="#work">CSS</a>
                  <a href="#work">JS</a>
                  <a href="#work">React.JS</a>
                  <a href="#work">Portfolio</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card box-shadow">
              <a
                href="https://sutachart.github.io/Probity-Intersupply-ReactJS/"
                target="_blank"
                className="img-project"
              >
                <img alt="PIS Website [100%x225]" src="img/png/work/pis.png" />
              </a>
              <div className="card-body text-center">
                <p className="card-head-text">Probity Intersupply</p>
                <p>
                  <a href="#work">HTML</a>
                  <a href="#work">CSS</a>
                  <a href="#work">JS</a>
                  <a href="#work">React.JS</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card box-shadow">
              <a
                href="https://drive.google.com/drive/folders/1dnHWtv3VbR4zgVOWNfbvxpA33B39pHoH?usp=sharing"
                target="_blank"
                className="img-project"
              >
                <img alt="PIS Website [100%x225]" src="img/png/work/ar.png" />
              </a>
              <div className="card-body text-center">
                <p className="card-head-text">Solar Universe 3D</p>
                <p>
                  <a href="#work">C#</a>
                  <a href="#work">Unity</a>
                  <a href="#work">Application</a>
                  <a href="#work">senior project</a>
                  <a href="#work">AR</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-auto">
            <div className="btn-work btn1 w-100">
              <a>More ...</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
