import React from "react"
import Navbar from "../layout/Navbar"
import SecondaryHeader from "../layout/SecondaryHeader"
import Footer from "../layout/Footer"
const Offer = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SecondaryHeader title="Oferta" />
      <div className="container"></div> <Footer />
    </React.Fragment>
  )
}

export default Offer
