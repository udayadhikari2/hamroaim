import React from "react";
import Link from "next/link";

function CopyRight() {
  return (
    <div className="space-y-4">
      <div className="flex">
        <span className="text-white text-xl font-bold">&#174;</span>
        <Link href="/">
          <a>
            <p className="underline text-blue-500 uppercase cursor-pointer">
              हाम्रो Aim
            </p>
          </a>
        </Link>
      </div>

      <span className="text-white text-md font-bold">&#169; Hamro Aim</span>
    </div>
  );
}

export default CopyRight;
