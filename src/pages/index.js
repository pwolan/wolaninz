import React from "react"
// import { Link } from "gatsby"
import Navbar from "../layout/Navbar"
import Header from "../layout/Header"
import MainIndex from "../layout/MainIndex"
import Footer from "../layout/Footer"

const IndexPage = () => (
  <React.Fragment>
    <Navbar/>
    <Header/>
    <MainIndex/>
    <Footer/>
  </React.Fragment>
)

export default IndexPage
