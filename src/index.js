import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Contact from "./menu/Contact";
import Project from "./menu/Project";
import About from "./menu/About";
import Myskill from "./menu/Myskill";
import Myport from "./menu/Myport";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("home")
);
ReactDOM.render(
  <React.StrictMode>
    <Myport />
  </React.StrictMode>,
  document.getElementById("myport")
);
ReactDOM.render(
  <React.StrictMode>
    <Myskill />
  </React.StrictMode>,
  document.getElementById("skill")
);
ReactDOM.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
  document.getElementById("about")
);
ReactDOM.render(
  <React.StrictMode>
    <Project />
  </React.StrictMode>,
  document.getElementById("project")
);
ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById("contact")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
