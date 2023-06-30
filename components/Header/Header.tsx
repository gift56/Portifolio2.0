import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="w-full flex  items-center justify-center py-4 gap-20">
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        className="text-base font-normal text-white cursor-pointer hover:text-blue-500 hidden md:flex"
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        className="text-base font-normal text-white cursor-pointer hover:text-blue-500 hidden md:flex"
      >
        About Me
      </ScrollLink>
      <div className="border border-blue-500 w-10 h-10 font-styleFont text-3xl flex items-center justify-center rounded-full select-none font-semibold">E</div>
      <ScrollLink
        to="projects"
        spy={true}
        smooth={true}
        className="text-base font-normal text-white cursor-pointer hover:text-blue-500 hidden md:flex"
      >
        Projects
      </ScrollLink>
      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        className="text-base font-normal text-white cursor-pointer hover:text-blue-500 hidden md:flex"
      >
        Contact
      </ScrollLink>
    </header>
  );
};

export default Header;
