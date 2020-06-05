import React from "react"
import "../components/styles.css"

import Button from "../components/Button"
import PandanByWater from "../components/pictures/PandanByWater"
import OriginalPandan from "../components/pictures/OriginalPandan"
import Layout from "../components/layout"
import PandanToShare from "../components/pictures/PandanToShare"

import PandanForFam from "../components/pictures/PandanForFam"

import PandanWithFriends from "../components/pictures/PandanWithFriends"
function Description() {
  return (
    <div className="card">
      <div className="card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        sagittis sodales venenatis.
      </div>
    </div>
  )
}

function StageOne() {
  const margin = {
    margin: "auto 0",
  }
  const columnHeight = {
    height: "300px",
  }
  return (
    <div
      style={{ maxWidth: "960px", margin: "0 auto" }}
      className="container-fluid"
    >
      <div className="row">
        <div style={columnHeight} className="col-6">
          <div style={margin} className="row">
            <h1 className="font5">Stage 1</h1>
          </div>
          <div className="row" style={margin}>
            <h3 className="font5">Grab some pandan and friends</h3>
          </div>
          <div className="row">
            <div className="col">
              <OriginalPandan height="450px" />
            </div>
            <div className="col">
              <div className="row" style={margin}>
                <Description />
              </div>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col" style={{ right: 0, margin: "30px" }}>
                  <Button to="/" name="Home" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <PandanWithFriends height="600px" />
        </div>
      </div>
    </div>
  )
}

function StageTwo() {
  const margin = {
    margin: "auto 0",
  }
  const columnHeight = {
    height: "300px",
  }
  return (
    <div
      style={{ maxWidth: "960px", margin: "0 auto" }}
      className="container-fluid"
    >
      <div className="row">
        <div style={columnHeight} className="col-6">
          <div style={margin} className="row">
            <h1 className="font5">Stage 2</h1>
          </div>
          <div className="row" style={margin}>
            <h3 className="font5">If possible, go in the sun</h3>
          </div>
          <div className="row">
            <div className="col">
              <PandanToShare height="450px" />
            </div>
            <div className="col">
              <div className="row" style={margin}>
                <Description />
              </div>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col" style={{ right: 0, margin: "30px" }}>
                  <Button to="/" name="Home" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <PandanByWater height="600px" />
        </div>
      </div>
    </div>
  )
}
function Border() {
  const style = {
    borderStyle: "solid",
    color: "red",
    height: "100%",
    width: "100%",
  }
  return (
    <div style={style}>
      <h1>Border To Show How Things Fit</h1>
    </div>
  )
}

function TemplateTwo() {
  return (
    <div
      style={{ maxWidth: "960px", margin: "0 auto" }}
      className="container-fluid"
    >
      <h1 className="font5">Stage 3</h1>
      <h3 className="font5">
        Savor every bite. Every slice will be gone soon!
      </h3>
      <div className="row">
        <div className="col">
          <PandanForFam />
        </div>
        <div className="col">
          <div className="row">
            <Description />
          </div>
          <div className="row">
            <Description />
          </div>
          <div className="row">
            <Description />
          </div>
        </div>
      </div>
    </div>
  )
}

const StoryPage = () => {
  return (
    <Layout>
      <StageOne />
      <br />
      <br />
      <StageTwo />
      <TemplateTwo />
    </Layout>
  )
}

export default StoryPage
