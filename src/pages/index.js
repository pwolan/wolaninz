import React from "react"
import Navbar from "../layout/Navbar"
import Header from "../layout/Header"
import About from "../components/About"
import Posts from "../components/Posts"
import SmallGallery from "../components/SmallGallery"
import Footer from "../layout/Footer"
import { Link, graphql } from "gatsby"

const IndexPage = props => {
  console.log(props.data)
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <div className="container">
        <About />
        <SmallGallery />
        <Posts index />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage


