import React from "react";
import { motion } from "framer-motion";

export function ShowAnimation({ children }) {

  return (<motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>)
}