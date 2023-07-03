import React, { useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Layout } from "./screens/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./screens/Home";
import { Signin } from "./screens/Signin";
import { Signup } from "./screens/Signup";
import { Header } from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import Product from "./screens/Product";
import Order from "./screens/Order";
import Category from "./screens/Category";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.token) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.token, dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/products" component={Product} />
          <PrivateRoute path="/categories" component={Category} />
          <PrivateRoute path="/orders" component={Order} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
