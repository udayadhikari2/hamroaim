import React from "react";
import { motion } from "framer-motion";

function Project() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-green-500 "
    >
      Projects
    </motion.div>
  );
}

export default Project;
