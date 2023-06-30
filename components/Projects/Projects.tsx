import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const Projects = () => {
  const data = [
    {
      image: "/img/image1.png",
      title: "Tiktik-World",
      desc: "A dynamic and engaging environment for users to create, discover, and share short videos.",
      liveUrl: "https://tiktik-world.vercel.app",
      repo: "https://github.com/gift56/Tiktik_World",
    },
    {
      image: "/img/image2.png",
      title: "Zfarmers",
      desc: "A dynamic website that Empowering farmers through blockchain. Start farming, earn, travel, play and learn with zkFarmers.",
      liveUrl: "https://zkfarmers.io/",
      repo: "https://github.com/ShopOasisDapp/zkBuds-Connect",
    },
    {
      image: "/img/image3.png",
      title: "Ivorytusk",
      desc: "A dynamic website that promote the adoption of blockchain technology and support the growth of the web3 ecosystem.",
      liveUrl: "https://ivorytusk.finance/",
      repo: "https://ivorytusk.finance/",
    },
    {
      image: "/img/image4.png",
      title: "MovieWorld",
      desc: "A dynamic website that promote the adoption of blockchain technology and support the growth of the web3 ecosystem.",
      liveUrl: "https://netflix-clone-roan-nine.vercel.app/",
      repo: "https://github.com/gift56/Netflix_Clone",
    },
    {
      image: "/img/image5.png",
      title: "MovieWorld",
      desc: "A dynamic website that provides the opportunity to Find the perfect freelance services for your business",
      liveUrl: "https://fiverr-web.netlify.app/",
      repo: "https://github.com/gift56/Fiverr-clone",
    },
    {
      image: "/img/image6.png",
      title: "MovieWorld",
      desc: "A website that promotes Grow with Innovative Product Development, High-End Web Design, and Effective Branding.",
      liveUrl: "https://colhacklabs.com/",
      repo: "https://colhacklabs.com/",
    },
  ];

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
              {data.map((item) => (
                <SwiperSlide
                  key={item.desc}
                  className="w-full p-6 flex flex-col items-start justify-start bg-[#31313F] rounded-xl shadow-cardShad !h-[450px] mb-10"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[190px] w-full"
                  />
                  <div className="flex items-center justify-start gap-3 mt-4">
                    <h2 className="text-xl font-semibold text-secondary tab:text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-sm font-medium md:text-base">{item.desc}</p>
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
