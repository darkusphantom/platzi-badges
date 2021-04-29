import React from "react";

class BadgeForm extends React.Component {
  state = {};

  handleClick = (event) => {
    console.log("Under Pressure");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              id="firstname"
              name="firstName"
              className="form-control"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              id="lastname"
              name="lastName"
              className="form-control"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobtitle">Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              id="jobtitle"
              name="jobTitle"
              className="form-control"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              id="twitter"
              name="twitter"
              className="form-control"
              value={this.props.formValues.twitter}
            />
          </div>

          <div className="form-group">
            <label htmlFor="photo">Agrega una foto</label>
            <input
              onChange={this.props.onChange}
              type="file"
              accept=".jpg,.png"
              id="photo"
              name="photo"
              value={this.props.formValues.photo}
            />
          </div>

          <button
            onClick={this.handleClick}
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
