import React from "react";
import ProfileImg from "../Assets/Images/b.png";

function Profile() {
  return (
    <div className="flex justify-center my-10">
      <img
        src={ProfileImg}
        alt=""
        width={120}
        height={100}
        className="rounded-full"
      />
    </div>
  );
}

export default Profile;
