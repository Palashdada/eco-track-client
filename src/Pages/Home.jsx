import React from "react";
import Banners from "../Components/Banners";
import LiveStatistics from "./LiveStatistics";
import ActiveChallenges from "./ActiveChallenges";
import RecentTips from "./RecentTips";
import UpcomingEvents from "./UpcomingEvents";
import WhyGoGreen from "./WhyGoGreen";
import HowItWorks from "./HowItWorks";

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
      <section>
        <UpcomingEvents></UpcomingEvents>
      </section>
      <section>
        <WhyGoGreen></WhyGoGreen>
      </section>
      <section>
        <HowItWorks></HowItWorks>
      </section>
    </div>
  );
};

export default Home;
