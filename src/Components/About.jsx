import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import AboutImg from "../Assets/sapiens (1).png";
import { gsap } from "gsap";

const About = () => {
  useEffect(() => {
    const animation = document.querySelector(".about");
    gsap.to(animation, {
      duration: 2,
      opacity: 1,
      ease: "ease-in",
    });
  }, []);

  return (
    <div name="about" className="w-full h-screen bg-white text-black about ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-b-gray-500 hover:border-b-customColor duration-200">
            About Me
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row  ">
          <div>
            <img
              src={AboutImg}
              alt=""
              className="flex w-96 sm:w-full justify-center"
            />
          </div>
          <div className="mb-10">
            <p className=" text-md sm:text-xl">
              Hello! 👋 I'm a Mumbai-based Junior Front-end Developer with
              expertise in HTML, CSS, JavaScript, React, and Tailwind CSS. My
              passion lies in crafting seamless and enjoyable user experiences
              through responsive website design.
            </p>
            <br />
            <p className="text-md sm:text-xl">
              Beyond coding, I'm eager to enhance my skills in UI/UX design,
              using tools like Figma and Adobe XD. As a dedicated team player,
              I'm ready to collaborate and contribute to impactful projects.
              Let's create something amazing together! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
