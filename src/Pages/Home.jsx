import React from "react";
import Banners from "../Components/Banners";
import LiveStatistics from "./LiveStatistics";

const Home = () => {
  return (
    <div>
      <section>
        <Banners></Banners>
      </section>
      <section>
        <LiveStatistics></LiveStatistics>
      </section>
    </div>
  );
};

export default Home;
