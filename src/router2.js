import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./navlink.css";

export default function Router2() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink
          to="/"
          classname="menu"
          activeClassName="active_menu"
          activeStyle={{ fontWeight: "bold" }}
          exact={true}
        >
          Home
        </NavLink>
        -&nbsp;
        <NavLink to="/products" classname="menu" activeClassName="active_menu">
          Products
        </NavLink>
        -&nbsp;
        <NavLink to="/member" classname="menu" activeClassName="active_menu">
          Member
        </NavLink>
        -&nbsp;
        <NavLink to="/contact" classname="menu" activeClassName="active_menu">
          Contact Us
        </NavLink>
      </nav>
    </BrowserRouter>
  );
}
