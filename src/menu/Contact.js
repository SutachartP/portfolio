import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div class="contact">
        <div class="padding-top"></div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="header-text text-center">
              <h3 class="text-uppercase">
                <b>Contact</b>
              </h3>
            </div>
          </div>
          <div class="row rounded mt-4 justify-content-center">
            <div class="col-12 col-md-10">
              <form action="#" class="p-5 bg-white rounded box-shadow">
                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="font-weight-bold" for="fullname">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      class="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="font-weight-bold" for="email">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="font-weight-bold" for="message">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="8"
                      class="form-control"
                      placeholder="Please sent your message."
                    ></textarea>
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-md-12">
                    <input
                      type="submit"
                      value="SEND"
                      class="btn btn-dark rounded btn-lg w-100"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="footer mt-4 py-3" style={{ background: "#333333" }}>
          <div>
            <div class="text-center">
              <span class="text-light">
                © 2020, Designed & Coded by React JS.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
