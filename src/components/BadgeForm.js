import React from "react";

class BadgeForm extends React.Component {
  state = {};

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    console.log("Under Pressure");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form was stopped");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="firstname">First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="firstname"
              name="firstname"
              className="form-control"
              value={this.firstName}
            />
          </div>

          <div className="form-group">
            <label for="lastname">Last Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="lastname"
              name="lastname"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label for="email">Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={this.lastName}
            />
          </div>

          <div className="form-group">
            <label for="jobtitle">Job Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="jobtitle"
              name="jobtitle"
              className="form-control"
              value={this.email}
            />
          </div>

          <div className="form-group">
            <label for="twitter">Twitter</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="twitter"
              name="twitter"
              className="form-control"
              value={this.twitter}
            />
          </div>

          <button
            onClick={this.handleClick}
            type="submit"
            class="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
