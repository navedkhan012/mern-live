import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getallcategory } from "../store/actions/category";

import { NavLink } from "react-router-dom";
import ModalPopUp from "./ModalPopUp";
import { loginAction } from "../store/actions/auth";

function Menu() {
  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const categoriesMenu = useSelector(
    (state) => state.categoryList.categoroyList
  );
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  useEffect(() => {
    dispatch(getallcategory());

    if (auth.authenticate) {
      return;
    }
  }, [auth.authenticate, dispatch]);
  const renderCategoryList = (categories) => {
    const categoriesArr = [];
    for (const cat of categories) {
      categoriesArr.push(
        <li className="menu_parent">
          <NavLink to={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`}>
            {cat.name}
          </NavLink>
          {cat.children.length > 0 ? (
            <ul className="menu_children">
              <li>
                <NavLink to={renderCategoryList(cat.children)}>
                  {renderCategoryList(cat.children)}
                </NavLink>
              </li>
            </ul>
          ) : null}
        </li>
      );
    }
    return categoriesArr;
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(loginAction(user));
    // loginAction(user);
    // dispatch(login(user));
  };

  const renderLoginModal = () => {
    return (
      <ModalPopUp
        heading="Please add login details"
        handleShow={loginModal}
        handleClose={() => setLoginModal(false)}
        handleSave={onSubmitLogin}
      >
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </Form.Group>
        </Form>
      </ModalPopUp>
    );
  };

  return (
    <>
      <Navbar expand="lg" className="navbar navbar-dark bg-primary">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>MY Store</Navbar.Brand>{" "}
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {categoriesMenu && renderCategoryList(categoriesMenu)}

              {/* <Nav.Link href="#action2">Link</Nav.Link> */}
              {auth.token ? (
                <>
                  <Nav.Link href="#action2">{auth.user.fullName}</Nav.Link>
                  <Nav.Link href="#signlout">Sign out</Nav.Link>
                  <Nav.Link href="#profile">Profile</Nav.Link>
                </>
              ) : (
                <NavDropdown title="Login" id="navbarScrollingDropdown">
                  <NavDropdown.Item onClick={() => setLoginModal(true)}>
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#signup">signup</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {renderLoginModal()}
    </>
  );
}

export default Menu;
