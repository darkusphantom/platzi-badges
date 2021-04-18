import React, { Component } from "react";

import "./styles/BadgesList.css";

class BadgesList extends Component {
  render() {
    return (
      <div class="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li className="BadgesListItem" key={badge.id}>
                <div className="ItemPhoto">
                  <img src="" alt="Photo Badge" />
                </div>
                <p className="ItemName">
                  {badge.firstName} {badge.lastName}
                </p>
                <div className="ItemTwitter">
                  <img
                    className="twitterIcon"
                    src={badge.avatarUrl}
                    alt="Icon Twitter"
                  />
                  <a className="twitterUser">@{badge.twitter}</a>
                </div>
                <p className="ItemJobTitle">{badge.jobTitle}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
