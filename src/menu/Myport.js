/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Myport extends Component {
  render() {
    return (
      <div class="padding-page">
        <div class="container">
          <div class="row h-50">
            <div class="col-sm-4">
              <div class="row row-sm-12 ">
                <div class="col-3 col-sm-3 mt-2">
                  <img src="img/icon/port/portfolio.png" width="70" />
                </div>
                <div class="col-9 col-sm-9">
                  <p class="heading-sub">
                    <b>Portfolio</b>
                  </p>
                  <p class="text-content">
                    I built this static portfolio website with HTML/CSS and
                    Java-script.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="row row-sm-12 ">
                <div class="col-3 col-sm-3 mt-2">
                  <img src="img/icon/port/todolist.png" width="70" />
                </div>
                <div class="col-9 col-sm-9">
                  <p class="heading-sub">
                    <b>To do list</b>
                  </p>
                  <p class="text-content">
                    I built this web-page for show my projects. i used this
                    react.js and use github pages for hosting.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="row row-sm-12 ">
                <div class="col-3 col-sm-3 mt-2">
                  <img src="img/icon/port/jobs.png" width="70" />
                </div>
                <div class="col-9 col-sm-9">
                  <p class="heading-sub">
                    <b>My Jobs</b>
                  </p>
                  <p class="text-content">
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
