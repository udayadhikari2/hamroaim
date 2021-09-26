import React from "react";
import { motion } from "framer-motion";

function Subscribe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-indigo-500 "
    >
      Subscribe Us
    </motion.div>
  );
}

export default Subscribe;
