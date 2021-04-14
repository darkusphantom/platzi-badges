import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./global.css";
//import Badge from "./components/Badge";
//import PhotoProfile from "./images/photo.jpg";
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById("app");
/*
  <Badge
    firstName="Luis"
    lastName="Rodriguez"
    jobTitle="FrontEnd Developer"
    user_twitter="WitcherPhantom"
    url_avatar={PhotoProfile}
  />,
  */

ReactDOM.render(<BadgeNew />, container);
