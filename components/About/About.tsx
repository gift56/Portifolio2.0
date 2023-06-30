import React from "react";

const About = () => {
  return (
    <section className="py-10 w-full">
      <div className="container">
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-500">
            About Me
          </h2>
          <p className="text-sm md:text-base font-medium">
            Hi, my name is Efe Asieghwu Gift, i am a Frontend web developer,
            React developer, and a Tech influencer. I have honed my skills in
            Web Development and advance i have core understanding of advance UI
            design principles. Here are the major skills i do dominate.
          </p>
          <div className="flex items-start justify-start gap-5 flex-col md:flex-row md:items-center">
            <span className="text-3xl md:text-4xl lg:text-6xl font-semibold text-blue-500">
              4+
            </span>
            <span className="text-lg md:text-xl font-medium">
              Years of experience. Specialised in building web applications, while ensuring
              a seamless
              <br className="hidden lg:block" /> web performance and user experience.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
