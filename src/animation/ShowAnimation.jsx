import React from "react";
import { motion } from "framer-motion";

export function ShowAnimation({ children, className }) {

  return (<motion.div className={className ?? className}
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>)
}