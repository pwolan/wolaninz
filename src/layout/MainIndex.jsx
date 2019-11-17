import React, { Component } from "react"
import About from "../components/About"
import Posts from "../components/Posts"
import SmallGallery from "../components/SmallGallery"
class MainIndex extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <About />
        <SmallGallery/>
        <Posts />
      </div>
    )
  }
}

export default MainIndex
