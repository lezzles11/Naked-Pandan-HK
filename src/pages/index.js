import React from "react"
import { Link } from "gatsby"
import "../components/styles.css"
import Box from "../components/pictures/Box"
import HundredWidth from "../components/HundredWidth"
import CloseUp from "../components/pictures/CloseUp"
import DateNightMotherAndSon from "../components/pictures/DateNightMotherAndSon"

import FromSide from "../components/pictures/FromSide"

import FromTop from "../components/pictures/FromTop"

import Review from "../components/pictures/Review"
import Sponge from "../components/pictures/Sponge"
import SoftSponge from "../components/pictures/SoftSponge"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/Button"
import OrderPage from "./order"
import StoryPage from "./story"

import OriginalPandan from "../components/pictures/OriginalPandan"

import PandanToShare from "../components/pictures/PandanToShare"

import PandanForFam from "../components/pictures/PandanForFam"

import PandanByWater from "../components/pictures/PandanByWater"

import PandanWithFriends from "../components/pictures/PandanWithFriends"

function Images() {
  return (
    <div>
      <OriginalPandan />
      <PandanToShare />
      <PandanForFam />
      <PandanWithFriends />
    </div>
  )
}
function Text({ p, color }) {
  const style = {
    color: `${color}`,
  }
  return (
    <div className="row justify-content-center card-body">
      <h3 style={style} className="font5">
        {p}
      </h3>
    </div>
  )
}

const pictureContainer = {
  margin: "10",
  maxWidth: "960",
}

function FromTopPic() {
  return (
    <div
      style={{ maxWidth: "960px", margin: "0 auto" }}
      className="pandanContainer row "
    >
      <div className="col-6">
        <FromTop />
      </div>{" "}
      <div className="col-6">
        <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br />
        <Text color="#2e7d32" p="a pandan opportunity" />
      </div>
    </div>
  )
}
function FromSidePic() {
  return (
    <div
      style={{ maxWidth: "960px", margin: "0 auto" }}
      className="pandanContainer row"
    >
      <div className="col">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Text color="#558b2f" p="atomic pandan" />
      </div>{" "}
      <div className="col">
        <FromSide />
      </div>
    </div>
  )
}
function TwoCakes() {
  return (
    <div
      style={{ maxWidth: "960px", margin: "0 auto" }}
      className="pandanContainer row"
    >
      <div className="col">
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <Text color="#558b2f" p="atomic pandan" />
      </div>{" "}
      <div className="col">
        <DateNightMotherAndSon />
      </div>
    </div>
  )
}

function Package() {
  return (
    <div
      style={{ maxWidth: "960px", margin: "0 auto" }}
      className="pandanContainer row"
    >
      <div className="col">
        <Box />
      </div>{" "}
      <div className="col">
        {" "}
        <br /> <br />
        <br />
        <br />
        <Text color="#00c853" p="baby, take a pandan" />
      </div>
    </div>
  )
}

function Endorsed() {
  return (
    <div
      style={{ maxWidth: "960px", margin: "0 auto" }}
      className="pandanContainer row"
    >
      <div className="col">
        {" "}
        <br /> <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <Text color="#8bc34a " p="be there in a pandan" />
      </div>{" "}
      <div className="col">
        <Review />
      </div>
    </div>
  )
}

function Ingredients() {
  return (
    <div className="pandanContainer row">
      <div className="col">
        <Sponge />
      </div>{" "}
      <div className="col">
        <Text color="#a5d6a7" p="pandan my mind" />
      </div>
    </div>
  )
}

function SoftSpongePic() {
  return (
    <div
      style={{ maxWidth: "960px", margin: "0 auto" }}
      className="pandanContainer row"
    >
      <div className="col">
        <SoftSponge />
      </div>{" "}
      <div className="col">
        {" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Text color="#a5d6a7" p="pandan my mind" />
      </div>
    </div>
  )
}

const IndexPage = () => (
  <Layout className="font5">
    <SEO title="Home" />
    <FromTopPic />
    <TwoCakes />
    <Package />
    <Endorsed />
    <SoftSpongePic />
    <br />
    <br />
  </Layout>
)

export default IndexPage
