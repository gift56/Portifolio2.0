import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="py-10 w-full xl:h-[80vh] xl:pt-0">
      <div className="container h-full">
        <div className="w-full flex flex-col items-end justify-center tab:flex-row gap-6 h-full">
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4">
            <h1 className="text-2xl font-semibold md:text-3xl">
              Hello, my name is{" "}
              <i className="font-styleFont text-[#fa5b0f]">Efe Asieghwu Gift</i>
            </h1>
            <TypeAnimation
              sequence={[
                "I'm a Software Engineer",
                1000,
                "I'm a Frontend developer",
                1000,
                "I'm a Web Inventor",
                1000,
                "It's Nice meeting you...😊",
                1000,
              ]}
              speed={50}
              className="text-2xl font-semibold md:text-3xl"
              repeat={Infinity}
            />
            <span>
              Freelance UI designer, Fullstack developer, & Data Miner. I create
              seamless web experiences for end-users.
            </span>
          </div>
          <div className="tab:flex-1 w-full relative flex items-center justify-center h-full">
            <img
              src="/img/heroImg.png"
              alt="hero_image"
              className="relative bottom-10 z-10"
            />
            <div className="absolute w-[80%] left-8 bg-[#fa5b0f] bottom-0 h-[70%] rounded-[50%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
