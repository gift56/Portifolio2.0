import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="py-10 w-full xl:h-[90vh] xl:pt-0">
      <div className="container h-full">
        <div className="w-full flex flex-col items-center justify-center tab:flex-row gap-10 h-full">
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4">
            <h1 className="text-2xl font-semibold md:text-3xl">
              Hello, my name is{" "}
              <i className="font-styleFont text-secondary">Efe Asieghwu Gift</i>
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
            <span className="text-base md:text-lg font-medium">
              Freelance Software Engineer, Fullstack developer, & Data Miner. I
              create seamless web experiences the meets client expectation.
            </span>
            <div className="flex items-center justify-start gap-5">
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                className="text-base font-normal text-white cursor-pointer hover:bg-transparent border-secondary border flex items-center justify-center gap-3 w-fit bg-secondary py-2 px-8 rounded-lg transition-all duration-300"
              >
                Projects
              </ScrollLink>
              <Link
                href="/CvFile/myCv.pdf"
                download
                className="text-base font-normal text-white cursor-pointer hover:bg-secondary border-secondary border flex items-center justify-center gap-3 w-fit bg-transparent py-2 px-8 rounded-lg transition-all duration-300"
              >
                Download CV
              </Link>
            </div>
          </div>
          <div className="tab:flex-1 w-full relative flex items-center justify-center h-full md:overflow-hidden">
            <div className="w-full bg-secondary md:absolute h-[416px] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/img/heroImg.png"
                alt="hero_image"
                className="w-[418px] h-[416px] rounded-lg relative z-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
