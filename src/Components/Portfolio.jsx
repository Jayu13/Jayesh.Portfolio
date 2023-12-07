import React, { useState } from "react";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Spotify from "../Assets/Projects/Screenshot 2023-12-04 134520.png";
import JsGame from "../Assets/Projects/Screenshot 2023-12-04 133208.png";
import Mockup1 from "../Assets/Projects/Screenshot 2023-11-23 000841.png";
import Mockup2 from "../Assets/Projects/Screenshot 2023-11-24 030610.png";

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState("frontend");

  const projects = [
    {
      id: 1,
      title: "Spotify",
      category: "frontend",
      src: Spotify,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nulla Voluptas esse earum voluptate fuga minus blanditiis Magni",
      code: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Rock Paper Scissor JS Game",
      category: "frontend",
      src: JsGame,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nulla Voluptas esse earum voluptate fuga minus blanditiis Magni",
      code: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "UI MOBILE DESIGN",
      category: "uiux",
      src: Mockup2,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nulla Voluptas esse earum voluptate fuga minus blanditiis Magni",
      code: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "UI MOBILE DESIGN",
      category: "uiux",
      src: Mockup1,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nulla Voluptas esse earum voluptate fuga minus blanditiis Magni",
      code: "#",
      demo: "#",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === currentCategory
  );

  return (
    <div name="portfolio" className="bg-white w-full text-black md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="">
          <h1 className="text-4xl font-bold w-40 border-b-4 border-gray-500 hover:border-b-customColor duration-200">
            Portfolio
          </h1>
          <p className="py-4">Check Out Some Of My Work Right Here</p>
        </div>

        <div className="flex flex-col gap-5 mt-2">
          <div className="flex justify-center gap-5">
            <button
              onClick={() => setCurrentCategory("frontend")}
              className={`${
                currentCategory === "frontend"
                  ? "border-b-2 border-b-customColor"
                  : ""
              } text-lg`}
            >
              Frontend Projects
            </button>
            <button
              onClick={() => setCurrentCategory("uiux")}
              className={`${
                currentCategory === "uiux"
                  ? "border-b-2 border-b-customColor"
                  : ""
              } text-lg`}
            >
              UI/UX Projects
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {filteredProjects.map(
              ({ id, src, title, description, code, demo }) => (
                <div key={id} className="relative group">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full rounded-md cursor-pointer"
                  />
                  <div className="absolute top-[100%] left-0 right-0 bottom-0 backdrop-filter backdrop-blur-md bg-customColor bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all ease-out duration-500 rounded-md">
                    <h6 className="font-bold text-white">{title}</h6>
                    <p className="font-normal text-white mt-1 text-center w-96">
                      {description}
                    </p>
                    <div className="flex mt-3 justify-center gap-5">
                      <a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md w-32 h-14 text-white  flex items-center justify-center"
                      >
                        Code <FaGithub size={16} className="ml-1" />
                      </a>
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md w-32 h-14 text-white font-medium  flex items-center justify-center"
                      >
                        Live Demo <IoIosLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
