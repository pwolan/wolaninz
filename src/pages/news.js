import React from "react"
import Navbar from "../layout/Navbar"
import Posts from "../components/Posts"
import Footer from "../layout/Footer"
import SecondaryHeader from "../layout/SecondaryHeader"

const News = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SecondaryHeader title="Aktualności" />
      <div className="container">
        <Posts noButton />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default News
