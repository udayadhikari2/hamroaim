import React from "react";
import { Link } from "next/link";
import CopyRight from "../Components/Footer/CopyRight";
import SubscribeForm from "../Components/Footer/SubscribeForm";
import { footerItems } from "../utils/Data/footerItems";
import Logo from "../Assets/Images/HamroAim.png";

function Footer() {
  return (
    <div className="bg-gray-800 w-full">
      <div className="grid xl:grid-cols-4 grid-cols-2 px-4 py-5 justify-center items-center">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="" width={150} />
        </div>
        <div className="flex flex-col items-center">
          <ul className="grid sm:grid-cols-2 text-white text-sm font-semibold cursor-default">
            {footerItems.map((footerMenuList, index) => {
              return (
                <Link to={footerMenuList.path} key={index}>
                  <li className="px-5 py-2 border-b-2 border-transparent hover:border-b-2 hover:border-white rounded-md hover:shadow-lg ">
                    {footerMenuList.items}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center mt-5 xl:mt-0 ">
          <SubscribeForm />
        </div>
        <div className="flex flex-row w-full justify-center items-center space-x-2">
          <CopyRight />
        </div>
      </div>
    </div>
  );
}

export default Footer;
