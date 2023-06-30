import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="w-full flex  items-center justify-center py-4 gap-8">
      <ScrollLink
        to="mining"
        spy={true}
        smooth={true}
        className="flex items-center gap-2 font-general text-lg font-normal text-dark cursor-pointer hover:border-b-[3px] hover:border-success h-full"
      >Home</ScrollLink>
    </header>
  );
};

export default Header;
