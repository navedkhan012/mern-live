import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Layout } from "./screens/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./screens/Home";
import { Signin } from "./screens/Signin";
import { Signup } from "./screens/Signup";
import { Header } from "./components/Header";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
