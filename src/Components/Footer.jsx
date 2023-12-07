import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://Linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/Jayu13",
    },
  ];
  return (
    <div className="w-full h-16 bg-customColor flex flex-col md:flex-row justify-center md:justify-between  items-center px-6 ">
        <ul className="flex">
          {Links.map(({ id, child, href, style }) => (
            <li
              key={id}
              className={`flex justify-center items-center w-10 h-10 px-4 bg-customColor
              ${style} `}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-white text-sm"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      <div>
        <p className="font-medium text-white text-sm">
          @CopyWrite 2023.All rights are reserved
        </p>
      </div>
    </div>
  );
};
