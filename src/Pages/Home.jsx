import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Testimonial from "../Components/Body/Testimonial";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen bg-yellow-500 px-2 py-16 sm:py-5 relative m-0 p-0"
    >
      <div className="grid md:grid-cols-2 justify-center py-10">
        <div className="flex flex-col space-y-2">
          <h1 className="lg:text-6xl md:text-4xl text-2xl font-extrabold text-white text-center uppercase">
            Welcome To <span className="text-red-600">Hamro</span> Aim
          </h1>
          <p className=" text-md text-center text-indigo-500 font-light">
            Always remember that you are different.
            <br />
            सधैं सम्झनुहोस् कि तपाईं अनौंठो हुनुहुन्छ ।
          </p>
        </div>
        <div className="flex justify-center items-center my-10">
          <Link to="/subscribe">
            <button className="rounded-md border-2 py-1 px-4 lg:py-2 lg:px-8 uppercase shadow-lg border-black text-black font-extrabold hover:text-red-600 hover:border-red-600 hover:bg-gray-100">
              Join With Us
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <Testimonial />
      </div>
    </motion.div>
  );
}
export default Home;
