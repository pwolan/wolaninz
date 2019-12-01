import React from "react"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"
import SecondaryHeader from "../layout/SecondaryHeader"

const Post = props => {
  const data = props.pageContext.data
  return (
    <React.Fragment>
      <Navbar />
      <SecondaryHeader title={data.title} />
      <div className="container">
        <h1 className='h1'>{data.title}</h1>
        
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Post
