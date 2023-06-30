import Link from "next/link";
import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const Icons = [
    {
      href: "https://twitter.com/",
      icon: <BsTwitter />,
    },
    {
      href: "https://web.instagram.com/",
      icon: <BsInstagram />,
    },
    {
      href: "https://youtube.com/",
      icon: <BsLinkedin />,
    },
  ];

  return (
    <section id="contact" className="py-10 w-full">
      <div className="container">
        <div className="w-full flex flex-col items-start justify-start tab:flex-row gap-10">
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4">
            <h2 className="text-2xl font-semibold md:text-3xl text-secondary">
              Get in touch
            </h2>
            <p className="text-sm md:text-base font-normal">
              I’m very approachable and would love to speak to you. Feel free to
              call, send me an email . Follow me in social media or simply
              complete the enquiry form.
            </p>
            <div className="flex items-center justify-start gap-4 flex-wrap lg:flex-none">
              {Icons.map((item, i) => (
                <Link
                  href={item.href}
                  target="_blank"
                  key={i}
                  rel="noreferrer noopener"
                  className="w-12 h-12 shadow-footerShad flex items-center justify-center bg-[#ffffff1a] rounded-md backdrop-blur-sm border border-[#ffffff1a]"
                ></Link>
              ))}
            </div>
          </div>
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
