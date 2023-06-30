import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const Projects = () => {
  const [screen, setScreen] = useState<number | any>(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newScreen = screenWidth <= 714 ? 1 : screenWidth <= 940 ? 2 : 3;
      setScreen(newScreen);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="projects" className="py-10 w-full">
      <div className="container">
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-500">
            Featured projects
          </h2>
          <p className="text-sm md:text-base font-medium">
            I have worked on many projects over the course of being a Web
            Developer, here are a few of my live, real-world projects
          </p>
          <div className="w-full mt-5"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
