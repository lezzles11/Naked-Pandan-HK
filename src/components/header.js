import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { motion } from "framer-motion"
import "./styles.css"
import Footer from "./Footer"
const styles = {
  borderRadius: 30,
  width: 150,
  padding: "10px 20px",
  margin: "10px",
  color: "#333",
  outline: "none",
  border: "none",
  cursor: "pointer",
}

function Button({ to, name }) {
  return (
    <motion.button
      className="btn btn-outline-dark waves-effect"
      style={styles}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
    >
      <Link
        to={to}
        className="font5"
        style={{
          textDecoration: `none`,
          color: "black",
        }}
      >
        {name}
      </Link>
    </motion.button>
  )
}

const headerStyle = {
  height: "50%",
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="row justify-content-center">
      <div style={headerStyle} className=" card-body justify-content-center">
        <br />
        <br />
        <h1
          style={headerStyle}
          className="row justify-content-center card-title h1-responsive pt-3 mb-5 font-bold font5"
        >
          {siteTitle}
        </h1>
        <br />
        <br />
        <p className="row justify-content-center mx-5 mb-5">
          Fluffy and soft pandan cakes
        </p>
        <br />
        <br />
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-end ">
        {" "}
        <div className="col-1"></div>
        <div className="col-3">
          <Button to="/" name="Home" />
        </div>
        <div className="col-3">
          <Button to="story" name="Our Story" />
        </div>
        <div className="col-3">
          <Button to="order" name="Order" />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
