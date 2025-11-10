import React from "react";
import Banners from "../Components/Banners";
import LiveStatistics from "./LiveStatistics";
import ActiveChallenges from "./ActiveChallenges";
import RecentTips from "./RecentTips";

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
      <section>
        <RecentTips></RecentTips>
      </section>
    </div>
  );
};

export default Home;
