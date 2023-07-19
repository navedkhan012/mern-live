import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import { Header } from "./components/Header";
import ProductList from "./screens/ProductList";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:slug" component={ProductList} />
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
