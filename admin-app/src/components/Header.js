import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
/**
 * @author
 * @function Header
 **/

export const Header = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="nav justify-content-end">
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
            <Link to="/signin" className="nav-link">
              Sign In
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
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
