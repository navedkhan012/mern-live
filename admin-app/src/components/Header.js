import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/auth";
/**
 * @author
 * @function Header
 **/

export const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  const loggedNavigation = () => {
    return (
      <Nav className="nav justify-content-end">
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
        <Link to="/signup" className="nav-link">
          Logout
        </Link>
        <Link to="/signup" className="nav-link">
          Profile
        </Link>
        <Link to="/signin" onClick={logout} className="nav-link">
          Sign out
        </Link>
      </Nav>
    );
  };
  const nonLoggedNavigation = () => {
    return (
      <Nav className="nav justify-content-end">
        <Link to="/signin" className="nav-link">
          Sign In
        </Link>
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
      </Nav>
    );
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          {auth.token ? loggedNavigation() : nonLoggedNavigation()}
        </Container>
      </Navbar>
    </div>
  );
};
