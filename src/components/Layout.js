import React, { Fragment } from "react";

import NavBar from "../components/NavBar";

function Layout(props) {
  const children = props.children;
  return (
    <Fragment>
      <NavBar />
      {children}
    </Fragment>
  );
}

export default Layout;
