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

const IndexPage = () => (
  <Layout className="font5">
    <SEO title="Home" />
    <Box />
    <CloseUp />
    <DateNightMotherAndSon />
    <FromSide />
    <Review />
    <Sponge />
    <FromTop />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/story/">Our Story</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
