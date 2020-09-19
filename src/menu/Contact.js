import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="padding-top"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="header-text text-center">
              <h3 className="text-uppercase">
                <b>Contact</b>
              </h3>
            </div>
          </div>
          <div className="row rounded mt-4 justify-content-center">
            <div className="col-12 col-md-10">
              <form action="#" className="p-5 bg-white rounded box-shadow">
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold">Your Name</label>
                    <input
                      type="text"
                      id="fullname"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold">Your Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="8"
                      className="form-control"
                      placeholder="Please sent your message."
                    ></textarea>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="SEND"
                      className="btn btn-dark rounded btn-lg w-100"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer mt-4 py-3" style={{ background: "#333333" }}>
          <div className="text-center">
            <span className="text-light">
              © 2020, Designed & Coded by React JS.
            </span>
          </div>
        </div>
      </div>
    );
  }
}
