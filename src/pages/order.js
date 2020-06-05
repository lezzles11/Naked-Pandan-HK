import React from "react"
import "../components/styles.css"
import "../components/gallery.css"
import Layout from "../components/layout"
import FromTop from "../components/pictures/FromTop"
import Box from "../components/pictures/Box"
import HundredWidth from "../components/HundredWidth"
import CloseUp from "../components/pictures/CloseUp"
import DateNightMotherAndSon from "../components/pictures/DateNightMotherAndSon"
import FromSide from "../components/pictures/FromSide"
import Review from "../components/pictures/Review"
import Sponge from "../components/pictures/Sponge"
import SoftSponge from "../components/pictures/SoftSponge"
function FromTopPic() {
  return (
    <div className="row" style={{ margin: "10", maxWidth: "1000px" }}>
      <div className="col-6">
        <FromTop />
      </div>{" "}
      <div className="col-6">
        <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br />
        hi
      </div>
    </div>
  )
}
const OrderPage = () => {
  return (
    <Layout>
      <div
        className=" justify-content-center"
        style={{ maxWidth: "960", margin: "auto" }}
      >
        <div className="row justify-content-center">
          <h1 style={{ color: "#8bc34a" }} className="font5">
            <span style={{ color: "#558b2f" }}>Contact</span>
            <br />
            Magdelene Teo @
            <br /> <span style={{ color: "#00c853" }}>+852-90275651 </span>
            <br />
            <span style={{ color: "#2e7d32" }}> through WhatsApp</span>
          </h1>
        </div>
        <br />

        <div
          className="row justify-content-center"
          style={{ maxWidth: "960", margin: "auto" }}
        >
          {" "}
          <h1 style={{ color: "#8bc34a" }} className="font5">
            Get ready to be{" "}
            <span style={{ color: "#2e7d32" }}> pandanned.</span>
          </h1>
        </div>
      </div>
    </Layout>
  )
}

export default OrderPage
