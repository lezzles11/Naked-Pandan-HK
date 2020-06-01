import React from "react"
import { Link } from "gatsby"
import "../components/styles.css"
import Box from "../components/pictures/Box"

import CloseUp from "../components/pictures/CloseUp"

import DateNightMotherAndSon from "../components/pictures/DateNightMotherAndSon"

import FromSide from "../components/pictures/FromSide"

import FromTop from "../components/pictures/FromTop"

import Review from "../components/pictures/Review"
import Sponge from "../components/pictures/Sponge"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/Button"
import OrderPage from "./order"
import StoryPage from "./story"

function Text({ p }) {
  return <div className="row justify-content-center card-body">{p}</div>
}

function FromTopPic() {
  return (
    <div className="row ">
      <div className="col-6">
        <FromTop />
      </div>{" "}
      <div className="col-6">
        <Text p="Developed with motherly love" />
      </div>
    </div>
  )
}
function FromSidePic() {
  return (
    <div className="row">
      <div className="col">
        <Text p="Developed with motherly love" />
      </div>{" "}
      <div className="col">
        <FromSide />
      </div>
    </div>
  )
}
function TwoCakes() {
  return (
    <div className="row">
      <div className="col">
        <Text p="Developed with motherly love" />
      </div>{" "}
      <div className="col">
        <DateNightMotherAndSon />
      </div>
    </div>
  )
}

function Package() {
  return (
    <div className="row">
      <div className="col">
        <Box />
      </div>{" "}
      <div className="col">
        <Text p="Developed with motherly love" />
      </div>
    </div>
  )
}

function Endorsed() {
  return (
    <div className="row">
      <div className="col">
        <Text p="Developed with motherly love" />
      </div>{" "}
      <div className="col">
        <Review />
      </div>
    </div>
  )
}

function Ingredients() {
  return (
    <div className="row">
      <div className="col">
        <Sponge />
      </div>{" "}
      <div className="col">
        <Text p="Developed with motherly love" />
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
    <Ingredients />
  </Layout>
)

export default IndexPage
