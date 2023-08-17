import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from "./screens/Product";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:slug" component={Product} />
          {/* <PrivateRoute path="/products" component={Product} />
          <PrivateRoute path="/categories" component={Category} />
          <PrivateRoute path="/orders" component={Order} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
