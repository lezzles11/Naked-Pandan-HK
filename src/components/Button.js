import React from "react"
import { motion } from "framer-motion"
import "./styles.css"
const styles = {
  borderRadius: 30,
  width: 150,
  padding: "10px 20px",
  margin: "auto",
  color: "#333",
  outline: "none",
  border: "none",
  cursor: "pointer",
}

export default function Button() {
  return (
    <motion.button
      className="btn btn-outline-dark waves-effect"
      style={styles}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
    >
      Button
    </motion.button>
  )
}
