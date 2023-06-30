import React from "react";

const Contact = () => {
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
          </div>
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
