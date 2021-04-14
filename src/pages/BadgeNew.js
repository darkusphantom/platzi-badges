import React from "react";

import "./styles/BadgeNew.css";
import NavBar from "../components/NavBar";
import header from "../images/badge-header.svg";

import Badge from "../components/Badge";
import PhotoProfile from "../images/photo.jpg";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Luis"
                lastName="Rodriguez"
                jobTitle="FrontEnd Developer"
                user_twitter="WitcherPhantom"
                url_avatar={PhotoProfile}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
