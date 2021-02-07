import React from "react";
import Nav from "../components/Nav";
import Breadcrumb from "../components/Breadcrumb";

const Layout = (props) => {
  return (
    <>
      {props.nav && <Nav />}
      {props.breadcrumb && <Breadcrumb categories={props.categories} />}
      {props.children}
    </>
  );
};

export default Layout;
