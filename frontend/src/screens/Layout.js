import React from "react";
import { Header } from "../components/Header";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      {props.children}
    </div>
  );
};

export default Layout;
