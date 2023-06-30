import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="w-full flex  items-center justify-center py-4 gap-8">
      <ScrollLink
        to="mining"
        spy={true}
        smooth={true}
        className="text-base font-normal text-white cursor-pointer hover:text-blue-500"
      >
        Home
      </ScrollLink>
    </header>
  );
};

export default Header;
