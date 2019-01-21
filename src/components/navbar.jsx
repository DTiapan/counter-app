import React, { Component } from "react";

//stateless functional component
const NavBar = props => {
  return (
    <nav className="navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-seconday">{props.totalCounters}</span>
      </a>
    </nav>
  );
};



export default NavBar;
