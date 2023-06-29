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
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
