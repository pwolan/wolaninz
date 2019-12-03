import React from "react"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"
import SecondaryHeader from "../layout/SecondaryHeader"
import Markdown from "react-markdown"
import MiniGallery from "../components/MiniGallery"
const Post = props => {
  const data = props.pageContext.data
  console.log(data)
  console.log("xddd")
  return (
    <React.Fragment>
      <Navbar />
      <SecondaryHeader bg={data.thumbnail.url} title={data.title} />
      <div className="container">
        <section>
          <Markdown
            source={data.postBody.html}
            className="news-post"
            escapeHtml={false}
          />
          <MiniGallery images={data.picturesGallery} />
        </section>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Post
