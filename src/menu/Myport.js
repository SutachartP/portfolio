/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Myport extends Component {
  render() {
    return (
      <div className="padding-page">
        <div className="container">
          <div className="row h-50">
            <div className="col-sm-4">
              <div className="row row-sm-12 ">
                <div className="col-3 col-sm-3 mt-2">
                  <img src="img/icon/port/portfolio.png" width="70" />
                </div>
                <div className="col-9 col-sm-9">
                  <p className="heading-sub">
                    <b>Portfolio</b>
                  </p>
                  <p className="text-content">
                    I built this static portfolio website with HTML/CSS and
                    Java-script.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row row-sm-12 ">
                <div className="col-3 col-sm-3 mt-2">
                  <img src="img/icon/port/todolist.png" width="70" />
                </div>
                <div className="col-9 col-sm-9">
                  <p className="heading-sub">
                    <b>To do list</b>
                  </p>
                  <p className="text-content">
                    I built this web-page for show my projects. i used this
                    react.js and use github pages for hosting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row row-sm-12 ">
                <div className="col-3 col-sm-3 mt-2">
                  <img src="img/icon/port/jobs.png" width="70" />
                </div>
                <div className="col-9 col-sm-9">
                  <p className="heading-sub">
                    <b>My Jobs</b>
                  </p>
                  <p className="text-content">
                    I'm new graduated student and looking for a job as a
                    front-end or back-end developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
