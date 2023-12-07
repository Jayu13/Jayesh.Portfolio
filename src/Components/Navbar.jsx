import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const Navbar = () => {
  const [Icon, setIcon] = useState(false);
    
  const Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "specialization",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      id="nav"
      name="navbar"
      className="flex justify-between items-center bg-white w-full h-14 text-black fixed px-4 z-10  "
    >
      <div>
        <Link
          to="home"
          smooth
          duration={500}
          className="text-xl cursor-pointer font-bold"
        >
          Jayesh.dev
        </Link>
      </div>
      <ul className="hidden md:flex">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer  font-medium capitalize text-black hover:scale-105 hover:text-customColor duration-300"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => {
          setIcon(!Icon)
        }}
        className="cursor-pointer text-grey-500 pr-4 md:hidden  z-10"
      >
        {Icon ? <FaTimes size={20}  /> : <FaBars size={20} />}
      </div>

      {Icon && (
        <ul  
          className={`flex flex-col justify-center items-center text-white absolute top-0 left-0 
           w-full h-screen bg-customColor`} 
        >
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl hover:scale-105 duration-300 "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
