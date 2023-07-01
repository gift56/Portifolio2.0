import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosCall, IoMdBriefcase } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";

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

  const Icons = [
    {
      href: "https://twitter.com/AsiughuE",
      icon: BsTwitter,
    },
    {
      href: "https://www.instagram.com/giftedvibez20/",
      icon: BsInstagram,
    },
    {
      href: "https://www.linkedin.com/in/efe-gift-109120241",
      icon: BsLinkedin,
    },
    {
      href: "https://github.com/gift56",
      icon: BsGithub,
    },
  ];

  return (
    <footer className="w-full py-10 bg-primary">
      <div className="container">
        <div className="flex items-center flex-col justify-center w-full">
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-8 items-center justify-center">
            {links.map((item, i) => (
              <ScrollLink
                key={i}
                to={item.to}
                spy={true}
                smooth={true}
                className="text-base font-normal text-white cursor-pointer hover:text-blue-500 flex items-center justify-start gap-3"
              >
                <item.icon size={18} />
                <span>{item.text}</span>
              </ScrollLink>
            ))}
          </div>
          <div className="mt-9 w-full flex items-center justify-center gap-5 md:justify-between border-t pt-4 flex-wrap lg:flex-nowrap">
            <div className="flex items-center justify-start gap-4 flex-wrap lg:flex-none">
              {Icons.map((item, i) => (
                <Link
                  href={item.href}
                  target="_blank"
                  key={i}
                  rel="noreferrer noopener"
                  className="w-12 h-12 flex items-center justify-center bg-[#ffffff1a] rounded-md backdrop-blur-sm border border-[#ffffff1a] hover:bg-secondary hover:text-white hover:origin-bottom transition-all duration-300"
                >
                  <item.icon size={20} className="hover:text-white" />
                </Link>
              ))}
            </div>
            <span>© 2023 - Built with React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
