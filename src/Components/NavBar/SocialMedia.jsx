import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="absolute bottom-0 my-5 flex flex-row space-x-10 justify-center items-center">
      <div className="group">
        <span className="absolute w-full -top-12 left-0 -translate-x-full text-sm text-white font-semibold py-1 px-3 rounded-md  text-center transform transitio duration-300 ease-in-out group-hover:translate-x-0">
          Twitter
        </span>
        <FaTwitter
          size="25"
          color="white"
          className="transform transition ease-in-out duration-300 hover:scale-150"
        />
      </div>
      <div className="group">
        <span className="absolute w-full -top-12 left-0 -translate-x-full text-sm text-white font-semibold py-1 px-3 rounded-md  text-center transform transition  duration-300 ease-in-out group-hover:translate-x-0 ">
          Instagram
        </span>
        <FaInstagram
          size="25"
          color="white"
          className="transform transition ease-in-out duration-300 hover:scale-150"
        />
      </div>
      <div className="group">
        <span className="absolute w-full -top-12 left-0 -translate-x-full text-sm text-white font-semibold py-1 px-3 rounded-md  text-center transform transition  duration-300 ease-in-out group-hover:translate-x-0 ">
          Facebook
        </span>
        <FaFacebook
          size="25"
          color="white"
          className="transform transition ease-in-out duration-300 hover:scale-150"
        />
      </div>
    </div>
  );
}

export default SocialMedia;
