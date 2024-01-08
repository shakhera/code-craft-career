import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
