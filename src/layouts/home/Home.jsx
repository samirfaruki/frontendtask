// import React from "react";
import { Outlet } from "react-router-dom";
import React, { Fragment } from "react";
import { Header } from "../header/Header";

function Home() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default Home;
