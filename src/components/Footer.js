import React from "react"

const Footer = () => {
  const style = {
    bottom: 0,
  }
  return (
    <footer>
      <div className="row">
        <div className="col-7"></div>
        <div className="col-5">
          {" "}
          <br />
          <p style={{ padding: "1px", color: "white" }}>
            {" "}
            &nbsp;&nbsp;&nbsp;{" "}
            <span className=" orange darken-3 container">
              built during the corona
            </span>
            <br />
            {` `}&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {` `}
            <span className=" blue accent-4 container">built by lezzles</span>
            <br />
            {` `}&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="pink accent-4 container">
              built with{" "}
              <a style={{ color: "white" }} href="https://www.gatsbyjs.org">
                Gatsby
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
