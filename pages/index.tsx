import React from "react";
import LandingpageLayout from "@/layouts/LandingpageLayout";
import { About, Contact, Hero, Projects } from "@/components";

const Homepage = () => {
  return (
    <LandingpageLayout pageTitle="I create seamless web experiences for end-users">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </LandingpageLayout>
  );
};

export default Homepage;
