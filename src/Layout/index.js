import React, { Fragment } from "react";
import { Route } from "react-router";
import Header from "./Header";
import Home from "./Home";

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container px-5">
        {/* TODO: Implement the screen starting here */}
        <Route>
          <Home />
        </Route>
      </div>
    </Fragment>
  );
}

export default Layout;
