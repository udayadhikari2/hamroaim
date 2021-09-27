import React from "react";
import { FaBars } from "react-icons/fa";
import Image from 'next/image'
export const MobileViewMenu = ({ isOpen, setIsOpen, scrolled, Logo }) => {
  return (
    <div
      className={`md:hidden absolute w-full transform transition ease-in-out duration-500 ${
        isOpen ? "hidden" : "block"
      } ${
        scrolled && "bg-gradient-to-l from-yellow-600 to-yellow-400 shadow-lg "
      }`}
    >
      {!isOpen && (
        <div
          className={`flex flex-row  transform transition ease-in-out duration-500 ${
            scrolled && "flex-row-reverse"
          }  justify-between items-center px-10 py-2`}
        >
          <div className="border rounded-md p-1 border-black shadow-lg">
            <FaBars
              size="25"
              color="black"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={Logo} alt="" width="100px" height="50" />
          </div>
        </div>
      )}
    </div>
  );
};
