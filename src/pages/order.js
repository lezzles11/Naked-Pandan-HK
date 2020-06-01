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
        className="row justify-content-center"
        style={{ maxWidth: "960", margin: "auto" }}
      >
        <h2 className="font5">Looking to be pandanned?</h2>
        <br />
        <br />{" "}
        <div className="card">
          <div className="card-body">
            <div className="card-title">Contact Magdelene Teo</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OrderPage
