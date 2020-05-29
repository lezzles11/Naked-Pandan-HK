import { Link } from "gatsby"
import PropTypes from "prop-types"
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

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="font5">{siteTitle}</h1>
      <div className="row">
        <div className="col">
          <Button to="story" name="Our Story" />
        </div>
        <div className="col">
          <Button to="order" name="Order" />
        </div>
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
