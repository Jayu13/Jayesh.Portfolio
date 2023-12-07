import React from "react";
import Hero from "../Assets/sapiens.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";
import html from "../Assets/html.png";
import css from "../Assets/css-3.png";
import JavaScript from "../Assets/js.png";
import reactJs from "../Assets/react-js-icon.png";
import Tailwind from "../Assets/tailwind-css-icon.png";
import Github from "../Assets/logo (1).png";
import { gsap } from "gsap";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const animation = document.querySelector(".home");
    gsap.to(animation, {
      duration: 1,
      opacity: 1,
      y: 100,
      ease: "ease-in",
    });
  }, []);

  const techs = [
    {
      id: 1,
      src: html,
    },
    {
      id: 2,
      src: css,
    },
    {
      id: 3,
      src: JavaScript,
    },
    {
      id: 4,
      src: reactJs,
    },
    {
      id: 5,
      src: Tailwind,
    },
    {
      id: 6,
      src: Github,
    },
  ];

  return (
    <div name="home" className="h-screen w-full bg-white mb-20">
      <div className=" home max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 mb-10 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-7xl sm:text-7xl text-black font-bold">
            I'm a UI Developer
          </h2>
          <p className="text-black py-4 font-medium mx-w-md">
            Hi,I'm Jayesh Jawarani. A passionate Front-end Developer & UI/UX Designer based in
            India , Mumbai.
            <FaLocationDot className="inline text-customColor" />
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-customColor"
            >
              Portfolio
              <span className="group-hover:rotate-90 group-hover:scale-105 duration-500">
                <MdKeyboardArrowRight className="ml-2" size={20} />
              </span>
            </Link>
          </div>
          <div className="my-4">
            <ul className="flex  items-center capitalize">
              <p className="inline-block font-medium">techs stack :-</p>
              {techs.map(({ id, src }) => (
                <li key={id} className="inline-block">
                  <img src={src} alt="" className="w-4 h-4 mx-3" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <img
            src={Hero}
            alt="my profile"
            className="mx-auto w-full md:w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
