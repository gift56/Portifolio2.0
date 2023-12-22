import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectData } from "@/contant";

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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="text-2xl md:text-3xl font-semibold text-blue-500"
          >
            Featured projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="text-sm md:text-base font-medium"
          >
            I have worked on many projects over the course of being a Web
            Developer, here are a few of my live, real-world projects
          </motion.p>
          <div className="w-full mt-5">
            <Swiper
              slidesPerView={screen}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
            >
              {projectData.slice(0, 6).map((item) => (
                <SwiperSlide
                  key={item.desc}
                  className="w-full p-6 flex flex-col items-start justify-start bg-primary rounded-xl shadow-cardShad md:!h-[450px] mb-10"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[190px] w-full rounded-md"
                  />
                  <div className="flex items-start justify-start flex-col gap-3 mt-4">
                    <h2 className="text-xl font-semibold text-secondary tab:text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-sm font-medium md:text-base">
                      {item.desc}
                    </p>
                    <div className="flex items-center flex-col md:flex-row justify-center gap-4 w-full">
                      <Link
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-base font-normal text-white cursor-pointer hover:bg-transparent border-secondary border flex items-center justify-center gap-3 w-full md:w-fit bg-secondary py-2 px-8 rounded-lg transition-all duration-300"
                      >
                        View Live
                      </Link>
                      <Link
                        href={item.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-base font-normal text-white cursor-pointer hover:bg-secondary border-secondary border flex items-center justify-center gap-3 w-full md:w-[50%] bg-transparent py-2 px-4 rounded-lg transition-all duration-300"
                      >
                        Github Repo
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
