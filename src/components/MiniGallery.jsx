import React, { Component } from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Lightbox from "./Lightbox"

class MiniGallery extends Component {
  state = {
    lightBoxOn: false,
    mainImg: "",
  }
  handleImgClick = e => {
    console.log("object")
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

  render() {
    const { handleCloseRequest, handleImgClick } = this
    const { mainImg, lightBoxOn } = this.state
    const { images } = this.props
    console.log(images)
    console.log(images)
    return (
      <section className="small-gallery">
        <h2 className="small-gallery__header h1">Ostatnie projekty</h2>
        {images.map(({ id, url }) => (
          <div
            key={id}
            className="small-gallery__img-container"
            onClick={handleImgClick}
          >
            <img src={url} className="small-gallery__img" />
          </div>
        ))}
        <Link to="/gallery" className="small-gallery__more">
          Zobacz więcej
        </Link>
        <Lightbox
          isOpen={lightBoxOn}
          imagesList={images}
          handleClose={handleCloseRequest}
          mainImg={mainImg}
        />
      </section>
    )
  }
}

export default MiniGallery
