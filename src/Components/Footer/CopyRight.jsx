import React from "react";
import { Link } from "next/link";

function CopyRight() {
  return (
    <div className="space-y-4">
      <Link to="/">
        <div className="flex">
          <span className="text-white text-xl font-bold">&#174;</span>
          <p className="underline text-blue-500 uppercase">हाम्रो Aim</p>
        </div>
      </Link>
      <span className="text-white text-md font-bold">&#169; Hamro Aim</span>
    </div>
  );
}

export default CopyRight;
