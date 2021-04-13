import React from "react";

import "./styles/badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={this.props.url_avatar} alt="Avatar" />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>
            Twitter:{" "}
            <a href="twitter.com/WitcherPhantom">@{this.props.user_twitter}</a>
          </div>
        </div>

        <div className="Badge__footer">#Learning-React</div>
      </div>
    );
  }
}

export default Badge;

/*





*/
