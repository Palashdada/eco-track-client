import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col">
      <section className="">
        <NavBar></NavBar>
      </section>
      <section className="flex-1 min-h-screen  mt-5 w-11/12 mx-auto">
        <Outlet></Outlet>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default HomeLayout;
