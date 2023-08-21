import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./screens/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from "./screens/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./store/actions/auth";
import ProductDetail from "./screens/ProductDetail";
import { Cart } from "./screens/Cart";
import { updateCart } from "./store/actions/cart";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.token) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.token, dispatch]);
  useEffect(() => {
    dispatch(updateCart());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/:productSlug/:productId/p" component={ProductDetail} />
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
