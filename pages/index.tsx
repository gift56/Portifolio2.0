import React from "react";
import LandingpageLayout from "@/layouts/LandingpageLayout";
import { About, Hero } from "@/components";

const Homepage = () => {
  return (
    <LandingpageLayout pageTitle="I create seamless web experiences for end-users">
      <Hero />
      <About />
    </LandingpageLayout>
  );
};

export default Homepage;
