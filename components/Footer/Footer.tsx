import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosCall, IoMdBriefcase } from "react-icons/io";

const Footer = () => {
  const links = [
    {
      icon: IoHomeOutline,
      text: "Home",
      to: "home",
    },
    {
      icon: FaRegUser,
      text: "About Me",
      to: "about",
    },
    {
      icon: IoMdBriefcase,
      text: "Projects",
      to: "projects",
    },
    {
      icon: IoIosCall,
      text: "Contact",
      to: "contact",
    },
  ];

  return (
    <footer className="w-full py-10 bg-primary">
      <div className="container">
        <div className="flex items-center flex-col justify-center w-full">
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-8 items-center justify-center"></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
