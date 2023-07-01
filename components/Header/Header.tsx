import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setMobileNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex items-center justify-center py-4 gap-20">
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        className="text-base font-normal text-white cursor-pointer hover:text-secondary hidden md:flex"
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        className="text-base font-normal text-white cursor-pointer hover:text-secondary hidden md:flex"
      >
        About Me
      </ScrollLink>
      <div className="border-2 border-blue-500 w-10 h-10 font-styleFont text-[38px] items-center justify-center rounded-full select-none font-semibold hidden md:flex">
        E
      </div>
      <div
        onClick={() => setMobileNav(true)}
        className="border-2 border-blue-500 w-10 h-10 font-styleFont text-[38px] flex items-center justify-center rounded-full select-none font-semibold md:hidden"
      >
        E
      </div>
      <ScrollLink
        to="projects"
        spy={true}
        smooth={true}
        className="text-base font-normal text-white cursor-pointer hover:text-secondary hidden md:flex"
      >
        Projects
      </ScrollLink>
      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        className="text-base font-normal text-white cursor-pointer hover:text-secondary hidden md:flex"
      >
        Contact
      </ScrollLink>
      <div
        className={`${
          mobileNav ? "left-0" : "-left-full"
        } tab:hidden flex flex-col h-screen bg-black/40 gap-7 absolute top-0 w-full z-10 transition-all duration-300 `}
      >
        <div
          ref={modalRef}
          className={`flex flex-col h-full bg-primary gap-7 absolute top-0 p-4 w-[250px]`}
        >
          <div className="w-full flex items-center justify-end">
            <span className="text-dark" onClick={() => setMobileNav(false)}>
              <MdClose size={25} />
            </span>
          </div>
          <nav className="w-full flex items-start justify-start flex-col gap-6">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              onClick={() => setMobileNav(false)}
              className="text-base font-normal text-white cursor-pointer hover:text-secondary"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              onClick={() => setMobileNav(false)}
              className="text-base font-normal text-white cursor-pointer hover:text-secondary"
            >
              About Me
            </ScrollLink>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              onClick={() => setMobileNav(false)}
              className="text-base font-normal text-white cursor-pointer hover:text-secondary"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              onClick={() => setMobileNav(false)}
              className="text-base font-normal text-white cursor-pointer hover:text-secondary"
            >
              Contact
            </ScrollLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
