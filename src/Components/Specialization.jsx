import React from "react";
import html from "../Assets/html.png";
import css from "../Assets/css-3.png";
import JavaScript from "../Assets/js.png";
import reactJs from "../Assets/react-js-icon.png";
import Tailwind from "../Assets/tailwind-css-icon.png";
import Github from "../Assets/logo (1).png";
import figma from "../Assets/icons8-figma-48.png"
import adobe from "../Assets/icons8-adobe-xd-48.png"

const Specialization = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactJs,
      title: "ReactJS",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Github,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 7,
      src: figma,
      title: "Figma",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: adobe,
      title: "Adobe XD",
      style: "shadow-pink-500",
    },
  ];
  return (
    <div
      name="specialization"
      className=" bg-white w-full h-screen mt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <h1 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline hover:border-customColor duration-200">
            Specialization
          </h1>
          <p className="py-6">These are the technologies / Tools I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${
                style || " "
              }`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialization;
