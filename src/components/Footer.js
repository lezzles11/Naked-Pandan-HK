import React from "react"

const Footer = () => {
  const style = {
    bottom: 0,
  }
  const stickToBottom = {
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
  }
  return (
    <div style={stickToBottom}>
      <footer>
        <div className="row">
          <div className="col-7"></div>
          <div className="col-5 row">
            {" "}
            <br />
            <p style={{ padding: "1px", color: "white" }}>
              {" "}
              &nbsp;&nbsp;&nbsp;{" "}
              <span className=" orange darken-3 container">
                cakes made by Mag
              </span>
              <br />
              {` `}&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {` `}
              <span className=" blue accent-4 container">
                site built by lezzles
              </span>
              <br />
              {` `}&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="pink accent-4 container">
                keeping calm during the corona
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
