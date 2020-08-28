import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div class="contact">
        <div style={{ padding: "60px 10px" }}></div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="header-text text-center">
              <h3 class="text-uppercase">
                <b>Contact</b>
              </h3>
            </div>
          </div>
          <div class="row rounded mt-4">
            <div class="col-12 col-md-6 mt-2 mb-2">
              <form action="#" class="p-5 bg-white rounded">
                <div class="row form-group">
                  <div class="col-md-12 mb-3 mb-md-0">
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
                      value="CONFIRM"
                      class="btn btn-dark rounded btn-lg"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="col-12 col-md-6 mt-2 mb-2">
              <div class="p-5 bg-white rounded">
                <div class="p-3">086-875-0608</div>
                <div class="p-3">sutachart_me@kkumail.com</div>
                <div class="p-3">FB,IN,Git</div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer py-3" style={{ background: "#333333" }}>
          <div class="container">
            <div class="text-center">
              <span class="text-light">
                © 2020, Designed & Coded by React JS.
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
