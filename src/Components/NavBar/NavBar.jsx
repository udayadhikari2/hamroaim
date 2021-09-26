import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../Data/navitems";
import { MobileViewMenu } from "../Responsive/MobileViewMenu";
import { FaTimesCircle } from "react-icons/fa";
import SocialMedia from "./SocialMedia";
import Logo from "../../Assets/Images/HamroAim.png";

function NavBar({ scrolled }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    });
  });

  return (
    <div ref={ref} className="z-50">
      <MobileViewMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrolled={scrolled}
        Logo={Logo}
      />
      <div
        className={`md:translate-x-0 absolute w-56 md:relative inset-y-0 left-0 transform transition duration-500 ease-in-out bg-gradient-to-l from-gray-900 to-blue-800 
        ${isOpen ? "translate-x-0 bg-red-500" : "-translate-x-full"}`}
      >
        <div className="p-2 absolute right-0 sm:hidden">
          <FaTimesCircle
            size="25"
            color="white"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="px-5 min-h-screen">
          <div className="flex flex-col items-center justify-center mb-10 p-2 cursor-default">
            <img src={Logo} alt="" />
          </div>
          <ul className="items-center">
            {menuItems.map((itemsList, index) => {
              return (
                <Link
                  to={itemsList.path}
                  key={index}
                  className={`flex flex-grow px-5 py-1 my-2 text-sm font-semibold border rounded-sm text-white hover:bg-blue-700`}
                >
                  <li className="items-center">{itemsList.items}</li>
                </Link>
              );
            })}
          </ul>

          <div className="flex justify-center">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
