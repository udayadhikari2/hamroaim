import React from "react";
import { motion } from "framer-motion";

function GetConnected() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-red-100 "
    >
      <div className="grid lg:grid-cols-2 items-center lg:space-x-4">
        <div className="shadow-lg flex flex-col items-center py-3 px-2 bg-gray-300">
          <form action="" className="flex flex-col space-y-5 max-w-sm mx-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="firstname">First Name </label>
              <input
                type="text"
                placeholder="First Name and Middle Name"
                className="focus:outline-none rounded-sm p-1 focus:ring-1 focus:bg-gray-200 ring-green-700 ring-offset-1 ring-offset-transparent text-semibold font-sans text-sm"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="focus:outline-none rounded-sm p-1 focus:ring-1 focus:bg-gray-200 ring-green-700 ring-offset-1 ring-offset-transparent text-semibold font-sans text-sm"
              />
            </div>
            <div className="flex flex-row space-x-5 items-center">
              <label htmlFor="">Male</label>
              <input type="radio" />
              <label htmlFor="">Female</label>
              <input type="radio" />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="">Date of Birth</label>
              <input
                type="date"
                className="focus:outline-none rounded-sm p-1 focus:ring-1 focus:bg-gray-200 ring-green-700 ring-offset-1 ring-offset-transparent text-semibold font-sans text-sm"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Valid Email"
                className="focus:outline-none rounded-sm p-1 focus:ring-1 focus:bg-gray-200 ring-green-700 ring-offset-1 ring-offset-transparent text-semibold font-sans text-sm"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="Profession">Profession Skills</label>
              <select
                name="option"
                id=""
                className="focus:outline-none rounded-sm p-1 focus:ring-1 focus:bg-gray-200 ring-green-700 ring-offset-1 ring-offset-transparent text-semibold font-sans text-sm"
              >
                <option value="..." disabled>
                  ------ Select Your Major Profession Skill --------
                </option>
                <option value="web">Web Developer</option>
                <option value="Mobile">Mobile App Developer</option>
                <option value="Desktop">Desktop App Developer</option>
                <option value="Data">Data Analysis</option>
                <option value="IOT">IOT</option>
              </select>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="education">Education</label>
              <select
                name=""
                id=""
                className="focus:outline-none rounded-sm p-1 focus:ring-1 focus:bg-gray-200 ring-green-700 ring-offset-1 ring-offset-transparent text-semibold font-sans text-sm"
              >
                <option value="..." disabled>
                  ------ Select Your Highest Education Level --------
                </option>
                <option value="school">School Level</option>
                <option value="intermediate">Intermediate Level</option>
                <option value="highschool">High School Level</option>
                <option value="bachelor">Bachelor Level</option>
                <option value="Master">Master Level</option>
                <option value="Others">Others...</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="Experience ">Experience In </label>
              <div className="flex flex-row space-x-5">
                <label htmlFor="Years">Years</label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  className="focus:outline-none rounded-sm p-1 focus:ring-1 focus:bg-gray-200 ring-green-700 ring-offset-1 ring-offset-transparent text-semibold font-sans text-sm"
                />
                <label htmlFor="Months">Months</label>
                <input
                  type="number"
                  min="0"
                  max="12"
                  className="focus:outline-none rounded-sm p-1 focus:ring-1 focus:bg-gray-200 ring-green-700 ring-offset-1 ring-offset-transparent text-semibold font-sans text-sm"
                />
              </div>
            </div>
            <button className="text-md text-gray-100 font-semibold rounded-md py-1 bg-green-700 hover:bg-green-600">
              Connect With Us
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default GetConnected;
