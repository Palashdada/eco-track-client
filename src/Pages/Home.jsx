import React from "react";
import Banners from "../Components/Banners";
import LiveStatistics from "./LiveStatistics";
import ActiveChallenges from "./ActiveChallenges";

const Home = () => {
  return (
    <div>
      <section>
        <Banners></Banners>
      </section>
      <section>
        <LiveStatistics></LiveStatistics>
      </section>
      <section>
        <ActiveChallenges></ActiveChallenges>
      </section>
    </div>
  );
};

export default Home;
