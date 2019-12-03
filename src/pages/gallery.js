import React from "react"
import Navbar from "../layout/Navbar"
import SecondaryHeader from "../layout/SecondaryHeader"
import { graphql, Link, StaticQuery } from "gatsby"
import Footer from "../layout/Footer"
import Lightbox from "../components/Lightbox"
class Gallery extends React.Component {
  state = {
    lightBoxOn: false,
    mainImg: "",
  }
  handleImgClick = e => {
    this.setState({
      lightBoxOn: true,
      mainImg: e.target.src,
    })
  }
  handleCloseRequest = () => {
    this.setState({
      lightBoxOn: false,
      mainImg: "",
    })
  }
  images = this.props.data.wolaninzieba.assets
  render() {
    const { images, handleImgClick, handleCloseRequest } = this
    const { lightBoxOn, mainImg } = this.state
    return (
      <React.Fragment>
        <Navbar />
        <SecondaryHeader title="Galeria" />
        <div className="container">
          <section className="gallery">
            <h1 className="h1"> Najnowsze projekty </h1>
            {images.map(img => (
              <div
                key={img.id}
                className="gallery__img-container"
                onClick={handleImgClick}
              >
                <img src={img.url} alt={img.id} className="gallery__img" />
              </div>
            ))}
          </section>

          <Lightbox
            isOpen={lightBoxOn}
            imagesList={images}
            handleClose={handleCloseRequest}
            mainImg={mainImg}
          />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        wolaninzieba {
          assets(
            where: { thumbnailPost_none: { _search: "" } }
            orderBy: updatedAt_DESC
            first: 18
          ) {
            id
            fileName
            url
          }
        }
      }
    `}
    render={data => <Gallery data={data} {...props} />}
  />
)
