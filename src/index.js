import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./global.css";
import Badge from "./components/Badge";
import PhotoProfile from "./images/photo.jpg";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Luis"
    lastName="Rodriguez"
    jobTitle="FrontEnd Developer"
    user_twitter="WitcherPhantom"
    url_avatar={PhotoProfile}
  />,
  container
);
